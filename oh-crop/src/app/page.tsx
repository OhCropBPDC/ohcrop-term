import CouncilMemberCard from "../components/CouncilMemberCard";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col font-sans">
      {/* HERO SECTION */}
      <section className="w-full h-[320px] relative flex items-start justify-start">
        {/* Background Color Blocks */}
        <div className="absolute inset-0 flex">
          <div className="w-[28%] h-full bg-[#EA4B19]" />
          <div className="w-[30%] h-full bg-[#9EB1C0]" />
          <div className="w-[22%] h-full bg-[#EA4B19]" />
          <div className="w-[20%] h-full bg-[#9EB1C0]" />
        </div>
        {/* Text Content */}
        <div className="relative z-10 px-5 pt-10 max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-black leading-snug">
            Welcome to Oh Crop:<br />
            <span className="text-black">Connecting Our<br />Community</span>
          </h1>
          <p className="mt-2 mb-2 text-black font-normal max-w-md">
            Discover our events, learn about our mission, and get in touch!
          </p>
          <a href="/events">
            <button className="bg-[#1E313F] text-white px-3 py-1.5 rounded shadow text-sm hover:bg-[#0c141a] border border-black">
              View our events
            </button>
          </a>
        </div>
      </section>

      {/* "What is Oh Crop" SECTION */}
      <section className="w-full bg-[#F6C15B] py-10 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-3 text-black">What is Oh Crop ?</h2>
        <p className="mb-2 text-base md:text-lg text-black text-center max-w-md">
          We are a group of like minded individuals<br />
          who like designing and seeing the visual aspects of things
        </p>
        <p className="mb-4 text-black text-center">Join us if you are interested as well!</p>
        <a href="/membership">
          <button className="bg-[#EA4B19] hover:bg-[#a23913] text-white px-4 py-2 rounded shadow border border-black">
            Join us
          </button>
        </a>
      </section>

      {/* "What we have been up to" SECTION */}
       <section className="bg-[#7b97ad] py-16 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-black text-center">
          What we have been up to
        </h2>
        <div className="flex gap-12 justify-center flex-wrap">
          {/* Left card */}
          <div
            className="w-64 h-80 bg-[#f3bc57] border border-black rounded shadow-md flex flex-col items-center"
            style={{ boxShadow: '3px 5px 0 #222' }}
          >
            <div className="mt-5 mb-3 w-[85%] h-24 bg-gray-200 rounded border border-gray-400"
                style={{ background: "repeating-linear-gradient(135deg,#f6f6f6 0 10px,#ccc 10px 20px)" }} />
            <div className="w-[85%] flex flex-col mt-2">
              <span className="text-lg font-bold text-[#974638] mb-1">Workshops</span>
              <span className="text-base text-[#542b2d]">we like to conduct<br />workshops</span>
            </div>
          </div>


          {/* Middle card - animated */}
          <div
            className="w-64 h-80 bg-[#f3bc57] border border-black rounded shadow-md flex flex-col items-center lift-animation"
            style={{ boxShadow: '3px 5px 0 #222' }}
          >
            <div className="mt-5 mb-3 w-[85%] h-24 bg-gray-200 rounded border border-gray-400"
                style={{ background: "repeating-linear-gradient(135deg,#f6f6f6 0 10px,#ccc 10px 20px)" }} />
            <div className="w-[85%] flex flex-col mt-2">
              <span className="text-lg font-bold text-[#974638] mb-1">Workshops</span>
              <span className="text-base text-[#542b2d]">we like to conduct<br />workshops</span>
            </div>
          </div>


          {/* Right card */}
          <div
            className="w-64 h-80 bg-[#f3bc57] border border-black rounded shadow-md flex flex-col items-center"
            style={{ boxShadow: '3px 5px 0 #222' }}
          >
            <div className="mt-5 mb-3 w-[85%] h-24 bg-gray-200 rounded border border-gray-400"
                style={{ background: "repeating-linear-gradient(135deg,#f6f6f6 0 10px,#ccc 10px 20px)" }} />
            <div className="w-[85%] flex flex-col mt-2">
              <span className="text-lg font-bold text-[#974638] mb-1">Workshops</span>
              <span className="text-base text-[#542b2d]">we like to conduct<br />workshops</span>
            </div>
          </div>
        </div>
      </section>


      {/* COUNCIL MEMBERS SECTION */}
      <section className="w-full bg-[#F9EDDF] pt-10 pb-8 pl-8">
        <h2 className="text-3xl font-bold mb-1 text-black">Core Council<br />Members</h2>
        <p className="mb-8 mt-3 text-black text-[1.1rem]">
          we talk briefly about the council and how<br />
          they help the club.
        </p>

        <div className="relative-container">
          {/* Card 1 */}
          <div className="card-tilted card-1">
            <span className="label">President</span>
            <div className="w-28 h-28 bg-[repeating-linear-gradient(135deg,#f6f6f6_0_10px,#ccc_10px_20px)] rounded border border-gray-400 mb-3 mt-2" />
            <span className="role">Aimy Acksa Shaji</span>
          </div>
          {/* Card 2 */}
          <div className="card-tilted card-2">
            <span className="label">Vice President</span>
            <div className="w-28 h-28 bg-[repeating-linear-gradient(135deg,#f6f6f6_0_10px,#ccc_10px_20px)] rounded border border-gray-400 mb-3 mt-2" />
            <span className="role">Divyansh Garg</span>
          </div>
          {/* Card 3 */}
          <div className="card-tilted card-3">
            <span className="label">General Secretary</span>
            <div className="w-28 h-28 bg-[repeating-linear-gradient(135deg,#f6f6f6_0_10px,#ccc_10px_20px)] rounded border border-gray-400 mb-3 mt-2" />
            <span className="role">Dagsh Srivastava</span>
          </div>
          {/* Card 4 */}
          <div className="card-tilted card-4">
            <span className="label">Treasurer</span>
            <div className="w-28 h-28 bg-[repeating-linear-gradient(135deg,#f6f6f6_0_10px,#ccc_10px_20px)] rounded border border-gray-400 mb-3 mt-2" />
            <span className="role">Kundana Mamidi</span>
          </div>
          {/* Card 5 */}
          <div className="card-tilted card-5">
            <span className="label">Ex Officio</span>
            <div className="w-28 h-28 bg-[repeating-linear-gradient(135deg,#f6f6f6_0_10px,#ccc_10px_20px)] rounded border border-gray-400 mb-3 mt-2" />
            <span className="role">Akamksha Ranil</span>
          </div>
        </div>
      </section>


    </div>
  );
}
