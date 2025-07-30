import EventCard from "../../components/EventCard";

export default function EventsPage() {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-[url('/checker-bg.svg')] bg-repeat w-full py-12 mb-5 flex flex-col items-center">
        <h1 className="text-3xl font-bold">Oh Crop Events</h1>
        <h2 className="text-xl mt-2 mb-5 font-semibold">JULY 21ST - JULY 22ND</h2>
        <button className="bg-orange-600 hover:bg-orange-800 text-white px-4 py-1 rounded">Read more</button>
      </section>
      <section className="bg-[#F9EDDF] flex flex-col items-center gap-6 py-10">
        <EventCard type="COMPETITION" title="Capture the flag" desc="info about event"/>
        <EventCard type="WORKSHOP" title="Capture the flag" desc="info about event"/>
        <EventCard type="GALA" title="Capture the flag" desc="info about event"/>
        <EventCard type="GALA" title="Capture the flag" desc="info about event"/>
      </section>
    </div>
  );
}
