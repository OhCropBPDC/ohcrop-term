"use client";

import { motion } from "framer-motion";
import CouncilMemberCard from "../../components/CouncilMemberCard";
import DecryptedText from "../../components/DecryptedText";

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
    <section className="w-full relative bg-gradient-to-br from-[#7b97ad] via-[#6a8599] to-[#5a7585] pt-0 pb-0 overflow-hidden">
      {/* Animated striped background */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-[340px] flex z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="w-1/5 h-full"
            style={{ backgroundColor: i % 2 === 0 ? "#ea4b19" : i === 1 ? "#efca72" : "#7b97ad" }}
            initial={{ y: -340 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "backOut" }}
          />
        ))}
      </motion.div>
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-10 right-10 w-64 h-64 rounded-full bg-[#F6C05C]/20 blur-3xl z-0"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="flex flex-col items-center z-10 relative pt-16 pb-2 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <DecryptedText
            text="ABOUT US"
            className="text-5xl font-black text-white tracking-tight text-center mb-2 mt-3 drop-shadow-2xl cursor-target"
            encryptedClassName="text-5xl font-black text-white/40"
            animateOn="view"
            speed={40}
            sequential
          />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white text-xl text-center font-semibold mb-8 drop-shadow-lg"
        >
        Discover our events, learn about our<br />mission, and get in touch!
        </motion.p>
        
        <div className="flex flex-row gap-12 justify-center w-full mb-10">
          {["/assets/gallery/event15.jpg", "/assets/gallery/event11.jpg", "/assets/gallery/event18.jpg"].map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`Gallery ${i + 1}`}
              className="w-56 h-56 rounded-2xl border-4 border-white/30 shadow-2xl object-cover cursor-target"
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5, rotateZ: 2 }}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex w-full justify-center max-w-5xl px-6 pb-7 flex-row gap-8"
        >
        <motion.div 
          className="flex flex-col justify-start items-start w-[340px] cursor-target group"
          whileHover={{ x: 10 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-[#EA4B19] font-black text-4xl mb-3 drop-shadow-lg group-hover:text-white transition-colors duration-300">We do this</span>
          <span className="block text-white text-xl leading-tight mb-2 text-left font-medium drop-shadow-md">
            Here we can type something<br />
            to tell more about the vision<br />
            of out group or something<br />
            like that
          </span>
        </motion.div>
        <motion.div 
          className="flex flex-col justify-start items-start w-[340px] cursor-target group"
          whileHover={{ x: 10 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-[#EA4B19] font-black text-4xl mb-3 drop-shadow-lg invisible">We do this</span>
          <span className="block text-white text-xl leading-tight mb-2 text-left font-medium drop-shadow-md">
            continue writing more<br />here
          </span>
        </motion.div>
        </motion.div>
      </div>
    </section>

      {/* CARDS */}
      <section className="bg-gradient-to-br from-[#F9EDDF] to-[#f5e3cc] py-20 px-6 md:px-12 flex flex-col items-center relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-[#EA4B19]/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-[#F6C05C]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          y: [0, -40, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Header */}
      <motion.div 
        className="flex items-end gap-4 mb-6 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.img 
          src="/assets/ohcrop_b.png" 
          alt="OhCrop Logo" 
          className="w-16 h-16 cursor-target"
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.6 }}
        />
        <div className="text-black text-4xl md:text-5xl font-black leading-tight cursor-target">
          Our Council 2025-26
        </div>
      </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl text-center text-gray-800 text-xl md:text-2xl font-semibold leading-relaxed mb-12 relative z-10"
        >
          Meet the core team leading Oh Crop this year. Passionate, diverse, and ready to connect our community through vision and action.
        </motion.p>


        <div className="max-w-7xl mx-auto flex flex-col gap-6 px-4 py-8 relative z-10">
          {/* Core Council */}
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-black text-4xl text-center text-black mb-8 mt-6 cursor-target">Core Council</h3>
              <div className="w-32 h-2 bg-[#EA4B19] rounded-full mx-auto mb-12 animate-pulse-glow" />
            </motion.div>
            
            <motion.div 
              className="flex justify-center gap-12 mb-[-2.5rem] z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
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
              </motion.div>

            <motion.div 
              className="flex justify-center gap-12 mt-18 z-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
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
            </motion.div>
            </div>

          {/* Managers */}
          <div className="flex flex-col items-center gap-3 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-black text-4xl text-center text-black mb-4 cursor-target">Heads of Teams</h3>
              <div className="w-32 h-2 bg-[#F6C05C] rounded-full mx-auto mb-12" />
            </motion.div>
            
            <motion.div 
              className="flex justify-center gap-12 mb-[-2.5rem] z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
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
            </motion.div>
            
            <motion.div 
              className="flex justify-center gap-12 mt-18 z-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
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
            </motion.div>
          </div>
          {/* Executives */}
          <div className="flex flex-col items-center gap-3 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-black text-4xl text-center text-black mb-4 mt-6 cursor-target">Executives</h3>
              <div className="w-32 h-2 bg-[#EA4B19] rounded-full mx-auto mb-12" />
            </motion.div>
            
            <motion.div 
              className="flex justify-center gap-12 mb-[-2.5rem] z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
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
            </motion.div>

            <motion.div 
              className="flex justify-center gap-12 mt-18 z-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
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
            </motion.div>
            
            <motion.div 
              className="flex justify-center gap-12 mt-12 z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
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
            </motion.div>

            <motion.div 
              className="flex justify-center gap-12 mt-18 z-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
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
            </motion.div>
            
            <motion.div 
              className="flex justify-center gap-12 mt-18 z-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
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
            </motion.div>
          </div>
          {/* Committee Members */}
          <div className="flex flex-col items-center gap-3 mt-12">
           <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-black text-4xl text-center text-black mb-4 mt-6 cursor-target">Committee Members</h3>
              <div className="w-32 h-2 bg-[#F6C05C] rounded-full mx-auto mb-12" />
            </motion.div>
            
            <motion.div 
              className="flex justify-center gap-12 mb-[-2.5rem] z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
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
            </motion.div>

            
          </div>
          {/* Faculty */}
          <div className="flex flex-col items-center gap-3 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-black text-4xl text-center text-black mb-4 cursor-target">Faculty in charge</h3>
              <div className="w-32 h-2 bg-[#EA4B19] rounded-full mx-auto mb-8" />
            </motion.div>
            
            <motion.div 
              className="flex justify-center gap-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
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
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
