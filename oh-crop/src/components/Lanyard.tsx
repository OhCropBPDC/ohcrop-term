'use client';
import { useEffect, useRef, useState } from 'react';
import { Canvas, extend, useFrame, type ThreeElement } from '@react-three/fiber';
import { Environment, Lightformer } from '@react-three/drei';
import { Text } from '@react-three/drei';
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
  RigidBodyProps
} from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';

// Extend THREE elements for React Three Fiber
extend({ MeshLineGeometry, MeshLineMaterial });

// TypeScript declarations for custom elements
declare module '@react-three/fiber' {
  interface ThreeElements {
    meshLineGeometry: ThreeElement<typeof MeshLineGeometry>
    meshLineMaterial: ThreeElement<typeof MeshLineMaterial>
    roundedBoxGeometry: ThreeElement<typeof THREE.BufferGeometry>
  }
}

interface LanyardProps {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
  onCardClick?: () => void;
}

export default function Lanyard({
  position = [0, 0, 30],
  gravity = [0, -40, 0],
  fov = 20,
  transparent = true,
  onCardClick
}: LanyardProps) {
  return (
    <div className="relative z-0 w-full h-screen flex justify-center items-center transform scale-100 origin-center">
      <Canvas
        camera={{ position, fov }}
        gl={{ alpha: transparent }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)}
      >
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity} timeStep={1 / 60}>
          <Band onCardClick={onCardClick} />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer
            intensity={2}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={10}
            color="white"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}

interface BandProps {
  maxSpeed?: number;
  minSpeed?: number;
  onCardClick?: () => void;
}

function Band({ maxSpeed = 50, minSpeed = 0, onCardClick }: BandProps) {
  const band = useRef<THREE.Mesh>(null);
  const fixed = useRef<any>(null);
  const j1 = useRef<any>(null);
  const j2 = useRef<any>(null);
  const j3 = useRef<any>(null);
  const card = useRef<any>(null);

  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();

  const segmentProps: any = {
    type: 'dynamic' as RigidBodyProps['type'],
    canSleep: true,
    colliders: false,
    angularDamping: 4,
    linearDamping: 4
  };

  // Create custom lanyard texture using Canvas API
  const [lanyardTexture, setLanyardTexture] = useState<THREE.Texture | null>(null);
  
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 32;
    const ctx = canvas.getContext('2d')!;
    
    // Create gradient for lanyard pattern
    const gradient = ctx.createLinearGradient(0, 0, 512, 0);
    gradient.addColorStop(0, '#7b97ad');
    gradient.addColorStop(0.5, '#89a8c2');
    gradient.addColorStop(1, '#7b97ad');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 32);
    
    // Add texture pattern
    ctx.fillStyle = 'rgba(255,255,255,0.1)';
    for (let i = 0; i < 512; i += 8) {
      ctx.fillRect(i, 0, 2, 32);
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    setLanyardTexture(texture);
  }, []);

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()])
  );
  const [dragged, drag] = useState<false | THREE.Vector3>(false);
  const [hovered, hover] = useState(false);

  const [isSmall, setIsSmall] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 1024;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = (): void => {
      setIsSmall(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return (): void => window.removeEventListener('resize', handleResize);
  }, []);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.45, 0]
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => {
        document.body.style.cursor = 'auto';
      };
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged && typeof dragged !== 'boolean') {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach(ref => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z
      });
    }
    if (fixed.current) {
      [j1, j2].forEach(ref => {
        if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())));
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
        );
      });
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      
      if (band.current?.geometry && 'setPoints' in band.current.geometry) {
        (band.current.geometry as MeshLineGeometry).setPoints(curve.getPoints(32));
      }
      
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  curve.curveType = 'chordal';

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type={'fixed' as RigidBodyProps['type']} />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps} type={'dynamic' as RigidBodyProps['type']}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps} type={'dynamic' as RigidBodyProps['type']}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps} type={'dynamic' as RigidBodyProps['type']}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? ('kinematicPosition' as RigidBodyProps['type']) : ('dynamic' as RigidBodyProps['type'])}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e: any) => {
              e.target.releasePointerCapture(e.pointerId);
              drag(false);
            }}
            onPointerDown={(e: any) => {
              e.target.setPointerCapture(e.pointerId);
              drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())));
            }}
            onClick={onCardClick}
          >
            {/* Custom Card Mesh */}
            <mesh>
              <RoundedBoxGeometry args={[1.6, 2.25, 0.02]} radius={0.05} smoothness={4} />
              <meshPhysicalMaterial
                color="#F9EDDF"
                clearcoat={1}
                clearcoatRoughness={0.15}
                roughness={0.1}
                metalness={0}
              />
            </mesh>
            
            {/* Card Content */}
            <group position={[0, 0, 0.015]}>
              {/* Decorative elements */}
              <mesh position={[-0.6, 0.6, 0]}>
                <circleGeometry args={[0.05]} />
                <meshBasicMaterial color="#ea4b19" />
              </mesh>
              <mesh position={[0.6, 0.6, 0]}>
                <circleGeometry args={[0.05]} />
                <meshBasicMaterial color="#efca72" />
              </mesh>
              
              {/* COMING SOON Text */}
              <Text
                position={[0, 0.2, 0.1]}
                fontSize={0.15}
                color="#000000"
                anchorX="center"
                anchorY="middle"
                maxWidth={1.2}
              >
                COMING SOON
              </Text>

              {/* Company Name */}
              <Text
                position={[0, -0.3, 0.1]}
                fontSize={0.08}
                color="#ea4b19"
                anchorX="center"
                anchorY="middle"
              >
                OHCROP
              </Text>
            </group>

            
            {/* Lanyard Hole */}
            <mesh position={[0, 1.0, 0]}>
              <ringGeometry args={[0.08, 0.12]} />
              <meshBasicMaterial color="#cccccc" />
            </mesh>
            
          </group>
        </RigidBody>
      </group>
      
      {/* Lanyard String */}
      {lanyardTexture && (
        <mesh ref={band}>
          <meshLineGeometry />
          <meshLineMaterial
            args={[{ 
              color: 'white',
              resolution: isSmall ? new THREE.Vector2(1000, 2000) : new THREE.Vector2(1000, 1000),
              useMap: 1,
              map: lanyardTexture,
              repeat: new THREE.Vector2(-4, 1),
              lineWidth: 1
            }]}
            color="white"
            depthTest={false}
            resolution={isSmall ? new THREE.Vector2(1000, 2000) : new THREE.Vector2(1000, 1000)}
            useMap={1}
            map={lanyardTexture}
            repeat={new THREE.Vector2(-4, 1)}
            lineWidth={1}
          />
        </mesh>
      )}
    </>
  );
}

// Custom rounded box geometry component
interface RoundedBoxGeometryProps {
  args: [number, number, number];
  radius?: number;
  smoothness?: number;    
}

function RoundedBoxGeometry({ args, radius = 0.05, smoothness = 4 }: RoundedBoxGeometryProps) {
  const geometry = useRef<THREE.BufferGeometry>(null!);
  
  useEffect(() => {
    if (geometry.current) {
      const [width, height, depth] = args;
      const shape = new THREE.Shape();
      const eps = 0.00001;
      const radius0 = radius - eps;
      
      shape.moveTo(-width/2, -height/2 + radius0);
      shape.lineTo(-width/2, height/2 - radius0);
      shape.quadraticCurveTo(-width/2, height/2, -width/2 + radius0, height/2);
      shape.lineTo(width/2 - radius0, height/2);
      shape.quadraticCurveTo(width/2, height/2, width/2, height/2 - radius0);
      shape.lineTo(width/2, -height/2 + radius0);
      shape.quadraticCurveTo(width/2, -height/2, width/2 - radius0, -height/2);
      shape.lineTo(-width/2 + radius0, -height/2);
      shape.quadraticCurveTo(-width/2, -height/2, -width/2, -height/2 + radius0);
      
      const extrudeSettings = {
        depth: depth,
        bevelEnabled: true,
        bevelSegments: smoothness * 2,
        steps: 1,
        bevelSize: radius,
        bevelThickness: radius,
        curveSegments: smoothness
      };
      
      const extrudeGeometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      
      // Copy the geometry to our ref
      geometry.current.copy(extrudeGeometry);
      
      // Clean up
      extrudeGeometry.dispose();
    }
  }, [args, radius, smoothness]);
  
  return <bufferGeometry ref={geometry} />;
}

// Extend the RoundedBoxGeometry
