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
        <div className="w-56 h-56 rounded bg-[repeating-linear-gradient(135deg,#eee_0_16px,#d5d5d5_16px_32px)] border border-neutral-400" />
        <div className="w-56 h-56 rounded bg-[repeating-linear-gradient(135deg,#eee_0_16px,#d5d5d5_16px_32px)] border border-neutral-400" />
        <div className="w-56 h-56 rounded bg-[repeating-linear-gradient(135deg,#eee_0_16px,#d5d5d5_16px_32px)] border border-neutral-400" />
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
      <section className="bg-[#F9EDDF] py-10">
        <div className="flex flex-col items-center mb-10">
          <div className="flex flex-row items-end gap-3 mb-2">
            <span className="relative font-black text-[54px] leading-none">C</span>
            <span className="text-black text-2xl font-bold ml-1 text-left">
              Oh crop council<br />2024-25
            </span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col gap-6 px-4 py-8">
          {/* Core Council */}
          <div className="flex flex-col items-center">
            <div className="font-bold text-3xl text-center text-black mb-1 mt-4">Core Council</div>
            <div className="flex justify-center gap-12 mb-[-2.5rem] z-10">
                <CouncilMemberCard color="orange" name="Name" info="info" />
                <CouncilMemberCard color="blue" name="Name" info="info" />
                <CouncilMemberCard color="orange" name="Name" info="info" />
            </div>

            <div className="flex justify-center gap-12 mt-18 z-0">
                <div className="w-[192px]" />
                <CouncilMemberCard color="blue" name="Name" info="info" />
                <CouncilMemberCard color="orange" name="Name" info="info" />
                <div className="w-[192px]" />
            </div>
            </div>

          {/* Managers */}
          <div className="flex flex-col items-center gap-3 mt-8">
            <div className="font-bold text-3xl text-center text-black mb-1">Managers</div>
            <div className="flex justify-center gap-12 mb-[-2.5rem] z-10">
                <CouncilMemberCard color="orange" name="Name" info="info" />
                <CouncilMemberCard color="blue" name="Name" info="info" />
                <CouncilMemberCard color="orange" name="Name" info="info" />
            </div>
            <div className="flex justify-center gap-12 mt-18 z-0">
                <div className="w-[192px]" /> 
                <CouncilMemberCard color="blue" name="Name" info="info" />
                <div className="w-[192px]" />
            </div>
          </div>
          {/* Executives */}
          <div className="flex flex-col items-center gap-3 mt-8">
            <div className="font-bold text-3xl text-center text-black mb-1 mt-4">Executives</div>
            <div className="flex justify-center gap-12 mb-[-2.5rem] z-10">
                <CouncilMemberCard color="orange" name="Name" info="info" />
                <CouncilMemberCard color="blue" name="Name" info="info" />
                <CouncilMemberCard color="orange" name="Name" info="info" />
            </div>

            <div className="flex justify-center gap-12 mt-18 z-0">
                <div className="w-[192px]" />
                <CouncilMemberCard color="blue" name="Name" info="info" />
                <CouncilMemberCard color="orange" name="Name" info="info" />
                <div className="w-[192px]" />
            </div>
            <div className="flex justify-center gap-12 mt-12 z-10">
                <CouncilMemberCard color="orange" name="Name" info="info" />
                <CouncilMemberCard color="blue" name="Name" info="info" />
                <CouncilMemberCard color="orange" name="Name" info="info" />
            </div>

            <div className="flex justify-center gap-12 mt-18 z-0">
                <div className="w-[192px]" />
                <CouncilMemberCard color="blue" name="Name" info="info" />
                <CouncilMemberCard color="orange" name="Name" info="info" />
                <div className="w-[192px]" />
            </div>
            <div className="flex justify-center gap-12 mt-18 z-0">
                <div className="w-[192px]" /> 
                <CouncilMemberCard color="blue" name="Name" info="info" />
                <div className="w-[192px]" />
            </div>
          </div>
          {/* Committee Members */}
          <div className="flex flex-col items-center gap-3 mt-8">
           <div className="font-bold text-3xl text-center text-black mb-1 mt-4">Committee Members</div>
            <div className="flex justify-center gap-12 mb-[-2.5rem] z-10">
                <CouncilMemberCard color="blue" name="Name" info="info" />
                <CouncilMemberCard color="orange" name="Name" info="info" />
                <CouncilMemberCard color="blue" name="Name" info="info" />
            </div>

            <div className="flex justify-center gap-12 mt-18 z-0">
                <div className="w-[192px]" />
                <CouncilMemberCard color="orange" name="Name" info="info" />
                <CouncilMemberCard color="blue" name="Name" info="info" />
                <div className="w-[192px]" />
            </div>
          </div>
          {/* Faculty */}
          <div className="flex flex-col items-center gap-3 mt-8">
            <div className="font-bold text-3xl text-center text-black mb-1">Faculty in charge</div>
            <div className="flex justify-center gap-8">
              <CouncilMemberCard color="blue" name="Name" info="info" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
