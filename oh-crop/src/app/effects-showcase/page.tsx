"use client";

import {
    AnimatedSection,
    ExpandingDot,
    MagneticButton,
    RevealText,
    StaggeredList,
    TiltCard,
    TypewriterText,
} from "@/components/AnimatedComponents";
import {
    FloatingShape,
    GlitchText,
    HolographicCard,
    ParticleField
} from "@/components/CreativeEffects";
import { motion } from "framer-motion";

export default function EffectsShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0E27] via-[#1A1F3A] to-[#2D3561] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-6xl font-black text-white text-center mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Creative Effects Showcase
        </motion.h1>
        <p className="text-center text-gray-300 mb-16 text-xl">
          All the amazing effects you can use in your Oh Crop website
        </p>

        {/* Glitch Text */}
        <AnimatedSection className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-4">1. Glitch Text</h2>
          <div className="glass-card p-8 rounded-2xl">
            <GlitchText className="text-5xl font-black text-white">
              Futuristic Glitch Effect
            </GlitchText>
          </div>
        </AnimatedSection>

        {/* Holographic Card */}
        <AnimatedSection className="mb-20" delay={0.2}>
          <h2 className="text-4xl font-bold text-white mb-4">
            2. Holographic Card
          </h2>
          <HolographicCard className="glass-card p-12 rounded-2xl group">
            <h3 className="text-3xl font-bold text-white mb-4">
              Hover over this card
            </h3>
            <p className="text-gray-300 text-lg">
              Watch the holographic shine effect sweep across
            </p>
          </HolographicCard>
        </AnimatedSection>

        {/* Reveal Text */}
        <AnimatedSection className="mb-20" delay={0.3}>
          <h2 className="text-4xl font-bold text-white mb-4">
            3. Reveal Text Animation
          </h2>
          <div className="glass-card p-8 rounded-2xl">
            <RevealText
              text="Each word reveals one by one creating a smooth entrance"
              className="text-3xl font-semibold text-white"
            />
          </div>
        </AnimatedSection>

        {/* Typewriter Text */}
        <AnimatedSection className="mb-20" delay={0.4}>
          <h2 className="text-4xl font-bold text-white mb-4">
            4. Typewriter Effect
          </h2>
          <div className="glass-card p-8 rounded-2xl">
            <TypewriterText
              text="This text types out character by character..."
              className="text-3xl font-mono text-white"
            />
          </div>
        </AnimatedSection>

        {/* Tilt Card */}
        <AnimatedSection className="mb-20" delay={0.5}>
          <h2 className="text-4xl font-bold text-white mb-4">5. 3D Tilt Card</h2>
          <TiltCard className="glass-card p-12 rounded-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Hover to tilt me!
            </h3>
            <p className="text-gray-300 text-lg">
              This card tilts in 3D space on hover
            </p>
          </TiltCard>
        </AnimatedSection>

        {/* Magnetic Button */}
        <AnimatedSection className="mb-20" delay={0.6}>
          <h2 className="text-4xl font-bold text-white mb-4">
            6. Magnetic Button
          </h2>
          <div className="flex justify-center">
            <MagneticButton>
              <button className="gradient-primary text-white px-12 py-6 rounded-2xl text-2xl font-bold shadow-2xl">
                Move cursor near me!
              </button>
            </MagneticButton>
          </div>
        </AnimatedSection>

        {/* Staggered List */}
        <AnimatedSection className="mb-20" delay={0.7}>
          <h2 className="text-4xl font-bold text-white mb-4">
            7. Staggered List Animation
          </h2>
          <StaggeredList className="space-y-4">
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <ExpandingDot />
                <p className="text-xl text-white">First item appears</p>
              </div>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <ExpandingDot />
                <p className="text-xl text-white">Then the second</p>
              </div>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <ExpandingDot />
                <p className="text-xl text-white">And finally the third</p>
              </div>
            </div>
          </StaggeredList>
        </AnimatedSection>

        {/* Background Effects */}
        <AnimatedSection className="mb-20" delay={0.8}>
          <h2 className="text-4xl font-bold text-white mb-4">
            8. Background Effects
          </h2>
          <div className="relative glass-card p-12 rounded-2xl overflow-hidden min-h-[400px] flex items-center justify-center">
            <FloatingShape
              size={200}
              color="rgba(99, 102, 241, 0.2)"
              duration={10}
              initialX="10%"
              initialY="20%"
            />
            <FloatingShape
              size={150}
              color="rgba(236, 72, 153, 0.2)"
              duration={12}
              initialX="70%"
              initialY="60%"
            />
            <div className="relative z-10 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Floating Shapes
              </h3>
              <p className="text-gray-300 text-lg">
                Animated gradient orbs float around
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Usage Instructions */}
        <AnimatedSection delay={0.9}>
          <div className="glass-card p-12 rounded-2xl">
            <h2 className="text-4xl font-bold text-white mb-6">
              How to Use These Effects
            </h2>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                1. Import the component you want:
                <code className="block mt-2 p-4 bg-black/50 rounded-lg text-[#6366F1] font-mono">
                  import {"{ GlitchText }"} from "@/components/CreativeEffects";
                </code>
              </p>
              <p className="text-lg">
                2. Use it in your JSX:
                <code className="block mt-2 p-4 bg-black/50 rounded-lg text-[#EC4899] font-mono">
                  {"<GlitchText>Your Text</GlitchText>"}
                </code>
              </p>
              <p className="text-lg">
                3. Customize with props to match your design!
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Background particle effect */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <ParticleField />
      </div>
    </div>
  );
}
