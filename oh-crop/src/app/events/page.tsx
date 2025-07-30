import EventCard from "../../components/EventCard";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#F9EDDF]">
      {/* Header Section */}
      <section
        className="bg-[url('/checker-bg.svg')] bg-repeat w-full flex flex-col items-center py-12 bg-white"
      >
        <h2 className="text-xl font-semibold mb-2 text-black">Oh Crop Events</h2>
        <h1 className="text-4xl font-bold text-black mb-4 tracking-tight text-center b">
          JULY 21ST - JULY 22ND
        </h1>
        <button className="bg-[#EA4B19] hover:bg-[#a73f14] border border-black shadow text-white px-5 py-2 font-semibold rounded transition mt-2">
          Read more
        </button>
      </section>
      {/* Event Cards: wide, centered */}
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-8 py-12 px-4">
        <EventCard type="COMPETITION" title="Capture the flag" desc="info about event" />
        <EventCard type="WORKSHOP" title="Capture the flag" desc="info about event" />
        <EventCard type="GALA" title="Capture the flag" desc="info about event" />
        <EventCard type="GALA" title="Capture the flag" desc="info about event" />
      </div>
    </div>
  );
}
