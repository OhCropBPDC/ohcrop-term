
"use client";
import { useEffect, useState } from "react";




function AnimatedEventCard({ event, idx }: { event: any; idx: number }) {
  const [imgError, setImgError] = useState(false);
  const rotations = [8, -6, 4, -10, 7, -8, 5, -5];
  const scales = [1, 0.97, 1.04, 0.95, 1.02, 0.98, 1.05, 0.96];
  const offsetsX = [0, 60, 30, 90, 15, 75, 45, 105];
  const offsetsY = [0, 40, 20, 60, 10, 50, 30, 70];
  const floatAnims = ["float1", "float2", "float3", "float4"];
  const glowAnims = ["glow1", "glow2", "glow3", "glow4"];
  // PocketBase image URL builder
  const getImageUrl = (event: any) => {
    if (!event.image) return "/assets/gallery/event1.jpg";
    if (event.image.startsWith("http")) return event.image;
    // PocketBase file URL format
    return `https://bee-poet.pockethost.io/api/files/events/${event.id}/${event.image}`;
  };
  return (
    <div
      className={`animated-event-card ${floatAnims[idx % floatAnims.length]} ${glowAnims[idx % glowAnims.length]}`}
      style={{
        transform: `rotate(${rotations[idx % rotations.length]}deg) scale(${scales[idx % scales.length]}) translate(${offsetsX[idx % offsetsX.length]}px, ${offsetsY[idx % offsetsY.length]}px)`,
        zIndex: 10 + idx,
        left: `calc(${(idx % 4) * 23}% + ${(idx % 2) * 2}vw)`,
        top: `${Math.floor(idx / 4) * 340}px`,
        position: "absolute",
        animationDelay: `${0.1 * idx}s`,
        background: "linear-gradient(135deg, #1A1F3A 0%, #2D3561 100%)",
        border: "2.5px solid #6366F1",
        boxShadow: "0 8px 32px rgba(99,102,241,0.10), 0 2px 8px #6366F1",
      }}
    >
      <div className="animated-img-wrap">
        <img
          src={imgError ? "/assets/gallery/event1.jpg" : getImageUrl(event)}
          alt={event.title}
          className="animated-img"
          onError={() => setImgError(true)}
        />
      </div>
      <div className="animated-info">
        <h2 className="animated-title">{event.title}</h2>
        <p className="animated-date">{event.date ? new Date(event.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long' }) : ''}</p>
      </div>
    </div>
  );
}



export default function EventsPage() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
    const pocketbaseUrl = process.env.NEXT_PUBLIC_POCKETBASE_URL || "";
    useEffect(() => {
      const url = `${pocketbaseUrl}/api/collections/events/records?sort=-date`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setEvents(data.items || data.records || []))
        .finally(() => setLoading(false));
    }, []);

  return (
    <div className="animated-bg">
      <div className="events-header">
        <h1 className="events-title">OhCrop Events!!</h1>
        <p className="events-subtitle">A look back at our events!</p>
      </div>
      <div className="animated-container">
        {loading ? (
          <div style={{ color: '#fff', fontSize: 24, textAlign: 'center', width: '100%' }}>Loading events...</div>
        ) : events.length === 0 ? (
          <div style={{ color: '#fff', fontSize: 24, textAlign: 'center', width: '100%' }}>No events found.</div>
        ) : (
          events.map((event, idx) => (
            <AnimatedEventCard event={event} idx={idx} key={event.id || idx} />
          ))
        )}
      </div>
    </div>
  );
}
