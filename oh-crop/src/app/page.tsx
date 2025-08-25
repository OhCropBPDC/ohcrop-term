import CouncilMemberCard from "../components/CouncilMemberCard";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col font-sans">
      {/* HERO SECTION */}
      <section className="w-full h-[320px] relative flex items-start justify-start">
        {/* Background Color Blocks */}
        <div className="absolute inset-0 flex">
          <div className="w-240 h-full bg-[#EA4B19]" />
          <div className="w-240 h-full bg-[#F6C05C]" />
          <div className="w-240 h-full bg-[#9EB1C0]" />
          <div className="w-240 h-full bg-[#EA4B19]" />
          <div className="w-240 h-full bg-[#F6C05C]" />
          <div className="w-240 h-full bg-[#9EB1C0]" />
        </div>
        {/* Text Content */}
        <div className="relative z-10 px-5 pt-10 max-w-xl mx-auto text-center">
  <h1 className="text-3xl md:text-4xl font-bold text-black leading-snug">
    Welcome to Oh Crop:<br />
    <span className="text-black">Connecting Our<br />Community</span>
  </h1>
  <p className="mt-2 mb-2 text-black font-normal max-w-md mx-auto">
    Discover our events, learn about our mission, and get in touch!
  </p>
  <a href="/events">
    <button className="bg-[#779AB8] text-black px-3 py-1.5 rounded shadow text-sm hover:bg-[#0c141a] border border-[#333333]">
      View our events
    </button>
  </a>
</div>

      </section>

      {/* "What is Oh Crop" SECTION */}
      <section className="w-full bg-[#F6C15B] py-12 flex flex-col items-center px-4 md:px-0">
  <h2 className="text-3xl font-bold mb-4 text-black text-center">
    What is Oh Crop?
  </h2>
  <p className="mb-3 text-base md:text-lg text-black text-center max-w-md leading-relaxed">
    We are a group of like-minded individuals who enjoy designing and appreciating the visual aspects of things.
  </p>
  <p className="mb-6 text-black text-center font-semibold">
    Join us if you are interested as well!
  </p>
  <a href="/membership" className="inline-block">
    <button className="bg-[#EA4B19] hover:bg-[#a23913] text-white px-6 py-3 rounded shadow border border-black transition-colors duration-300">
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
            <img
              src="/assets/gallery/event1.jpg"
              alt="Adobe Premiere Pro Workshop"
              className="mt-5 mb-3 w-[85%] h-24 rounded border border-gray-400 object-cover"
            />
            <div className="w-[85%] flex flex-col mt-2">
              <span className="text-lg font-bold text-[#974638] mb-1">Workshops</span>
              <span className="text-base text-[#542b2d]">we like to conduct workshops<br />on things like Web Dev and</span>
            </div>
          </div>


          {/* Middle card - animated */}
          <div
            className="w-64 h-80 bg-[#f3bc57] border border-black rounded shadow-md flex flex-col items-center lift-animation"
            style={{ boxShadow: '3px 5px 0 #222' }}
          >
            <img
              src="/assets/gallery/event26.jpg"
              alt="Annual PTC event"
              className="mt-5 mb-3 w-[85%] h-24 rounded border border-gray-400 object-cover"
            />
            <div className="w-[85%] flex flex-col mt-2">
              <span className="text-lg font-bold text-[#974638] mb-1">Games</span>
              <span className="text-base text-[#542b2d]">We organise around the campus<br />games that enagage participants</span>
            </div>
          </div>


          {/* Right card */}
          <div
            className="w-64 h-80 bg-[#f3bc57] border border-black rounded shadow-md flex flex-col items-center"
            style={{ boxShadow: '3px 5px 0 #222' }}
          >
            <img
              src="/assets/gallery/event27.png"
              alt="11/9 Orientation"
              className="mt-5 mb-3 w-[85%] h-24 rounded border border-gray-400 object-cover"
            />
            <div className="w-[85%] flex flex-col mt-2">
              <span className="text-lg font-bold text-[#974638] mb-1">Fun Activities</span>
              <span className="text-base text-[#542b2d]">Join us for a year<br />of fun activities</span>
            </div>
          </div>
        </div>
      </section>


      {/* COUNCIL MEMBERS SECTION */}
      <section className="w-full bg-[#F9EDDF] pt-10 pb-14 px-4 md:px-0 relative">
      <h2 className="text-3xl font-bold mb-2 text-black text-center tracking-wide">
        Core Council<br />Members
      </h2>
      <div className="w-16 h-1 bg-[#EA4B19] rounded mx-auto mb-6"></div>
      <p className="mb-10 text-black text-lg md:text-xl text-center max-w-2xl mx-auto leading-relaxed tracking-wide">
        Meet the dedicated members of our Core Council who guide and support our club’s mission, helping us grow stronger and more connected every day.
      </p>
      <div className="w-full flex flex-wrap justify-center gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-2 border-[#e0e0e0] flex flex-col items-center p-5 w-56 transform hover:scale-105 hover:-translate-y-2 duration-200 ease-in-out">
          <span className="uppercase text-xs tracking-wide text-[#EA4B19] font-semibold mb-1">President</span>
          <img
            src="/council/Aimy.jpg"
            alt="Aimy Acksa Shaji"
            className="w-28 h-28 rounded-full border-4 border-[#F6C05C] object-cover shadow-md mb-3"
          />
          <span className="mt-2 text-lg font-bold text-[#212121] text-center">Aimy Acksa Shaji</span>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-2 border-[#e0e0e0] flex flex-col items-center p-5 w-56 transform hover:scale-105 hover:-translate-y-2 duration-200 ease-in-out">
          <span className="uppercase text-xs tracking-wide text-[#EA4B19] font-semibold mb-1">Vice President</span>
          <img
            src="/council/Divyansh.jpg"
            alt="Divyansh Garg"
            className="w-28 h-28 rounded-full border-4 border-[#F6C05C] object-cover shadow-md mb-3"
          />
          <span className="mt-2 text-lg font-bold text-[#212121] text-center">Divyansh Garg</span>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-2 border-[#e0e0e0] flex flex-col items-center p-5 w-56 transform hover:scale-105 hover:-translate-y-2 duration-200 ease-in-out">
          <span className="uppercase text-xs tracking-wide text-[#EA4B19] font-semibold mb-1">General Secretary</span>
          <img
            src="/council/Daqsh.jpg"
            alt="Daqsh Srivastava"
            className="w-28 h-28 rounded-full border-4 border-[#F6C05C] object-cover shadow-md mb-3"
          />
          <span className="mt-2 text-lg font-bold text-[#212121] text-center">Daqsh Srivastava</span>
        </div>
        {/* Card 4 */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-2 border-[#e0e0e0] flex flex-col items-center p-5 w-56 transform hover:scale-105 hover:-translate-y-2 duration-200 ease-in-out">
          <span className="uppercase text-xs tracking-wide text-[#EA4B19] font-semibold mb-1">Treasurer</span>
          <img
            src="/council/kundana_.JPG"
            alt="Kundana Mamidi"
            className="w-28 h-28 rounded-full border-4 border-[#F6C05C] object-cover shadow-md mb-3"
          />
          <span className="mt-2 text-lg font-bold text-[#212121] text-center">Kundana Mamidi</span>
        </div>
        {/* Card 5 */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-2 border-[#e0e0e0] flex flex-col items-center p-5 w-56 transform hover:scale-105 hover:-translate-y-2 duration-200 ease-in-out">
          <span className="uppercase text-xs tracking-wide text-[#EA4B19] font-semibold mb-1">Ex Officio</span>
          <img
            src="/council/Akamksha.jpeg"
            alt="Akamksha Ranil"
            className="w-28 h-28 rounded-full border-4 border-[#F6C05C] object-cover shadow-md mb-3"
          />
          <span className="mt-2 text-lg font-bold text-[#212121] text-center">Akamksha Ranil</span>
        </div>
      </div>
</section>



    </div>
  );
}
