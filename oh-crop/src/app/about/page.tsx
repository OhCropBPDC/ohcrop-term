import CouncilMemberCard from "../../components/CouncilMemberCard";

export default function AboutPage() {
  return (
    <div>
      {/* HERO */}
    <section className="w-full relative bg-[#7b97ad] pt-0 pb-0 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[340px] flex z-0">
        <div className="w-1/5 h-full bg-[#ea4b19]" />
        <div className="w-1/5 h-full bg-[#efca72]" />
        <div className="w-1/5 h-full bg-[#7b97ad]" />
        <div className="w-1/5 h-full bg-[#ea4b19]" />
        <div className="w-1/5 h-full bg-[#efca72]" />
      </div>
      <div className="flex flex-col items-center z-10 relative pt-16 pb-2 w-full">
        <h2 className="text-4xl font-bold text-black tracking-tight text-center mb-1 mt-3">
        ABOUT US
        </h2>
        <p className="text-black text-lg text-center font-normal mb-8">
        Discover our events, learn about our<br />mission, and get in touch!
        </p>
        <div className="flex flex-row gap-12 justify-center w-full mb-10">
        <img
              src="/assets/gallery/event15.jpg"
              alt="Aimy Acksa Shaji"
              className="w-56 h-56 rounded border border-neutral-400"
            />
        <img
              src="/assets/gallery/event11.jpg"
              alt="Aimy Acksa Shaji"
              className="w-56 h-56 rounded border border-neutral-400"
            />
        <img
              src="/assets/gallery/event18.jpg"
              alt="Aimy Acksa Shaji"
              className="w-56 h-56 rounded border border-neutral-400"
            />
        </div>
        <div className="flex w-full justify-center max-w-5xl px-6 pb-7 flex-row gap-8">
        <div className="flex flex-col justify-start items-start w-[340px]">
          <span className="text-red-600 font-bold text-3xl mb-2">We do this</span>
          <span className="block text-black text-xl leading-tight mb-2 text-left">
            Here we can type something<br />
            to tell more about the vision<br />
            of out group or something<br />
            like that
          </span>
        </div>
        <div className="flex flex-col justify-start items-start w-[340px]">
          <span className="text-red-600 font-bold text-3xl mb-2 invisible">We do this</span>
          <span className="block text-black text-xl leading-tight mb-2 text-left">
            continue writing more<br />here
          </span>
        </div>
        </div>
      </div>
    </section>

      {/* CARDS */}
      <section className="bg-[#F9EDDF] py-16 px-6 md:px-12 flex flex-col items-center">
      {/* Header */}
      <div className="flex items-end gap-4 mb-6">
        <img src="/assets/ohcrop_b.png" alt="OhCrop Logo" className="w-12 h-12" />
        <div className="text-black text-3xl md:text-4xl font-extrabold leading-tight">
          Our Council 2025-26
        </div>
      </div>

        <p className="max-w-3xl text-center text-gray-700 text-lg md:text-xl font-medium leading-relaxed mb-10">
          Meet the core team leading Oh Crop this year. Passionate, diverse, and ready to connect our community through vision and action.
        </p>


        <div className="max-w-7xl mx-auto flex flex-col gap-6 px-4 py-8">
          {/* Core Council */}
          <div className="flex flex-col items-center">
            <div className="font-bold text-3xl text-center text-black mb-1 mt-4">Core Council</div>
            <div className="flex justify-center gap-12 mb-[-2.5rem] z-10">
                <CouncilMemberCard
                  color="orange"
                  name="Aimy"
                  info="President"
                  imageSrc="/council/Aimy.jpg"
                  socialLinks={{
                    instagram: "https://instagram.com/aimy",
                    linkedin: "https://linkedin.com/in/aimy",
                    github: "https://github.com",
                  }}
                />
                <CouncilMemberCard
                  color="blue"
                  name="Divyansh"
                  info="Vice President"
                  imageSrc="/council/Divyansh.jpg"
                  socialLinks={{
                    instagram: "https://instagram.com/aimy",
                    linkedin: "https://linkedin.com/in/aimy",
                    github: "https://github.com",
                  }}
                />
                <CouncilMemberCard
                  color="orange"
                  name="Akamksha"
                  info="Ex-Officio"
                  imageSrc="/council/Akamksha.jpeg"
                  socialLinks={{
                    instagram: "https://instagram.com/aimy",
                    linkedin: "https://linkedin.com/in/aimy",
                    github: "https://github.com",
                  }}
                />
              </div>

            <div className="flex justify-center gap-12 mt-18 z-0">
                <div className="w-[192px]" />
                <CouncilMemberCard
                  color="blue"
                  name="Daqsh"
                  info="General Secretary"
                  imageSrc="/council/Daqsh.jpg"
                  socialLinks={{
                    instagram: "https://instagram.com/aimy",
                    linkedin: "https://linkedin.com/in/aimy",
                    github: "https://github.com",
                  }}
                />
                <CouncilMemberCard
                  color="orange"
                  name="Kundana"
                  info="Treasurer"
                  imageSrc="/council/kundana_.JPG"
                  socialLinks={{
                    instagram: "https://instagram.com/aimy",
                    linkedin: "https://linkedin.com/in/aimy",
                    github: "https://github.com",
                  }}
                />
                <div className="w-[192px]" />
            </div>
            </div>

          {/* Managers */}
          <div className="flex flex-col items-center gap-3 mt-8">
            <div className="font-bold text-3xl text-center text-black mb-1">Heads of Teams</div>
            <div className="flex justify-center gap-12 mb-[-2.5rem] z-10">
                <CouncilMemberCard
                  color="blue"
                  name="Kirtika"
                  info="Marketing Head"
                  imageSrc="/council/Kirtika.JPG"
                  socialLinks={{
                    instagram: "https://instagram.com/aimy",
                    linkedin: "https://linkedin.com/in/aimy",
                    github: "https://github.com",
                  }}
                />
                <CouncilMemberCard
                  color="orange"
                  name="Crystal"
                  info="Events Head"
                  imageSrc="/council/Crystal.jpg"
                  socialLinks={{
                    instagram: "https://instagram.com/aimy",
                    linkedin: "https://linkedin.com/in/aimy",
                    github: "https://github.com",
                  }}
                />
                <CouncilMemberCard
                  color="blue"
                  name="Palak"
                  info="Design Head"
                  imageSrc="/council/Palak.jpg"
                  socialLinks={{
                    instagram: "https://instagram.com/aimy",
                    linkedin: "https://linkedin.com/in/aimy",
                    github: "https://github.com",
                  }}
                />
            </div>
            <div className="flex justify-center gap-12 mt-18 z-0">
                <div className="w-[192px]" /> 
                <CouncilMemberCard
                  color="orange"
                  name="Mahin"
                  info="Technical Head"
                  imageSrc="/council/Mahin.jpg"
                  socialLinks={{
                    instagram: "https://instagram.com/aimy",
                    linkedin: "https://linkedin.com/in/aimy",
                    github: "https://github.com",
                  }}
                />
                <div className="w-[192px]" />
            </div>
          </div>
          {/* Executives */}
          <div className="flex flex-col items-center gap-3 mt-8">
            <div className="font-bold text-3xl text-center text-black mb-1 mt-4">Executives</div>
            <div className="flex justify-center gap-12 mb-[-2.5rem] z-10">
                <CouncilMemberCard
                  color="blue"
                  name="Shrishti"
                  info="Events Executive"
                  imageSrc="/council/Shristi.jpg"
                  socialLinks={{
                    instagram: "https://instagram.com/aimy",
                    linkedin: "https://linkedin.com/in/aimy",
                    github: "https://github.com",
                  }}
                />
                <CouncilMemberCard
                  color="orange"
                  name="Nitya"
                  info="Events Executive"
                  imageSrc="/council/Nitya.jpg"
                  socialLinks={{
                    instagram: "https://instagram.com/aimy",
                    linkedin: "https://linkedin.com/in/aimy",
                    github: "https://github.com",
                  }}
                />
                <CouncilMemberCard
                  color="blue"
                  name="Mili"
                  info="Events Executive"
                  imageSrc="/council/Mili.jpg"
                  socialLinks={{
                    instagram: "https://instagram.com/aimy",
                    linkedin: "https://linkedin.com/in/aimy",
                    github: "https://github.com",
                  }}
                />
            </div>

            <div className="flex justify-center gap-12 mt-18 z-0">
                <div className="w-[192px]" />
                <CouncilMemberCard
                  color="orange"
                  name="Sivani"
                  info="Technical Executive"
                  imageSrc="/council/sivani.JPG"
                  socialLinks={{
                    instagram: "https://instagram.com/aimy",
                    linkedin: "https://linkedin.com/in/aimy",
                    github: "https://github.com",
                  }}
                />
                <CouncilMemberCard
                  color="blue"
                  name="Rohil"
                  info="Technical Executive"
                  imageSrc="/council/Rohil.jpg"
                  socialLinks={{
                    instagram: "https://instagram.com/aimy",
                    linkedin: "https://linkedin.com/in/aimy",
                    github: "https://github.com",
                  }}
                />
                <div className="w-[192px]" />
            </div>
            <div className="flex justify-center gap-12 mt-12 z-10">
                <CouncilMemberCard
                  color="orange"
                  name="Vaishnavi"
                  info="Marketing Executive"
                  imageSrc="/council/Vaishnavi .JPG"
                  socialLinks={{
                    instagram: "https://instagram.com/aimy",
                    linkedin: "https://linkedin.com/in/aimy",
                    github: "https://github.com",
                  }}
                />
                <CouncilMemberCard
                  color="blue"
                  name="Amrita"
                  info="Design Executive"
                  imageSrc="/council/Amrita.png"
                  socialLinks={{
                    instagram: "https://instagram.com/aimy",
                    linkedin: "https://linkedin.com/in/aimy",
                    github: "https://github.com",
                  }}
                />
                <CouncilMemberCard
                  color="orange"
                  name="Mahima"
                  info="Design Executive"
                  imageSrc="/council/Mahima.jpeg"
                  socialLinks={{
                    instagram: "https://instagram.com/aimy",
                    linkedin: "https://linkedin.com/in/aimy",
                    github: "https://github.com",
                  }}
                />
            </div>

            <div className="flex justify-center gap-12 mt-18 z-0">
                <div className="w-[192px]" />
                <CouncilMemberCard
                  color="blue"
                  name="Marwa"
                  info="Design Executive"
                  imageSrc="/council/Marwa J.jpg"
                  socialLinks={{
                    instagram: "https://instagram.com/aimy",
                    linkedin: "https://linkedin.com/in/aimy",
                    github: "https://github.com",
                  }}
                />
                <CouncilMemberCard
                  color="orange"
                  name="Hamra"
                  info="Design Executive"
                  imageSrc="/council/Hamra.jpg"
                  socialLinks={{
                    instagram: "https://instagram.com/aimy",
                    linkedin: "https://linkedin.com/in/aimy",
                    github: "https://github.com",
                  }}
                />
                <div className="w-[192px]" />
            </div>
            <div className="flex justify-center gap-12 mt-18 z-0">
                <div className="w-[192px]" /> 
                <CouncilMemberCard
                  color="orange"
                  name="Aminta"
                  info="Content Creator"
                  imageSrc="/council/Aminta_9273.jpg"
                  socialLinks={{
                    instagram: "https://instagram.com/aimy",
                    linkedin: "https://linkedin.com/in/aimy",
                    github: "https://github.com",
                  }}
                />
                <div className="w-[192px]" />
            </div>
          </div>
          {/* Committee Members */}
          <div className="flex flex-col items-center gap-3 mt-8">
           <div className="font-bold text-3xl text-center text-black mb-1 mt-4">Committee Members</div>
            <div className="flex justify-center gap-12 mb-[-2.5rem] z-10">
                <CouncilMemberCard
                  color="blue"
                  name="Shalini"
                  info="Committee Member"
                  imageSrc="/council/Akamksha.jpeg"
                  socialLinks={{
                    instagram: "https://instagram.com/aimy",
                    linkedin: "https://linkedin.com/in/aimy",
                    github: "https://github.com",
                  }}
                />
                <CouncilMemberCard
                  color="orange"
                  name="Vridhi"
                  info="Committee Member"
                  imageSrc="/council/Akamksha.jpeg"
                  socialLinks={{
                    instagram: "https://instagram.com/aimy",
                    linkedin: "https://linkedin.com/in/aimy",
                    github: "https://github.com",
                  }}
                />
                <CouncilMemberCard
                  color="blue"
                  name="Narda"
                  info="committee Member"
                  imageSrc="/council/Akamksha.jpeg"
                  socialLinks={{
                    instagram: "https://instagram.com/aimy",
                    linkedin: "https://linkedin.com/in/aimy",
                    github: "https://github.com",
                  }}
                />
            </div>

            
          </div>
          {/* Faculty */}
          <div className="flex flex-col items-center gap-3 mt-8">
            <div className="font-bold text-3xl text-center text-black mb-1">Faculty in charge</div>
            <div className="flex justify-center gap-8">
              <CouncilMemberCard
                  color="orange"
                  name="Dr. Pranav "
                  info="Faculty In-Charge"
                  imageSrc="/council/Mr. Pranav.jpg"
                  socialLinks={{
                    instagram: "https://instagram.com/aimy",
                    linkedin: "https://linkedin.com/in/aimy",
                    github: "https://github.com",
                  }}
                />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
