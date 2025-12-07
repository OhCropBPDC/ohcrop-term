"use client";

import { motion } from "framer-motion";
import { Suspense, lazy } from "react";
import CreativeBackground from "../../components/CreativeBackground";
import DecryptedText from "../../components/DecryptedText";

const CouncilMemberCard = lazy(() => import("../../components/CouncilMemberCard"));

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden bg-gradient-to-br from-[#0A0E27] via-[#1A1F3A] to-[#2D3561] min-h-screen relative">
      {/* Creative animated background */}
      <CreativeBackground />
      
      {/* HERO */}
      <section className="w-full relative pt-32 pb-16 overflow-hidden">
        <div className="flex flex-col items-center z-10 relative px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <DecryptedText
              text="ABOUT US"
              className="text-6xl font-black text-white tracking-tight text-center mb-4 mt-6 drop-shadow-2xl cursor-target"
              encryptedClassName="text-6xl font-black text-white/20"
              animateOn="view"
              speed={35}
              sequential
            />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 text-xl text-center font-semibold mb-10 drop-shadow-lg max-w-2xl"
          >
            Discover our mission, meet our team, and learn how we're building a vibrant creative community
          </motion.p>
          
          <div className="flex flex-row gap-8 justify-center w-full mb-10 max-sm:flex-col max-sm:gap-6 max-sm:px-4">
            {["/assets/gallery/event15.jpg", "/assets/gallery/event11.jpg", "/assets/gallery/event18.jpg"].map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt={`Gallery ${i + 1}`}
                loading="lazy"
                className="w-64 h-64 rounded-2xl border-2 border-white/20 shadow-2xl object-cover cursor-target max-sm:w-full max-sm:h-56"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                style={{ willChange: 'transform' }}
              />
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex w-full justify-center max-w-6xl px-6 pb-10 gap-10 max-sm:flex-col max-sm:gap-6"
          >
            <motion.div 
              className="glass-card p-8 rounded-2xl flex-1 cursor-target group border border-white/10"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              style={{ willChange: 'transform' }}
            >
              <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent font-black text-4xl mb-4 block">Our Vision</span>
              <span className="block text-gray-200 text-lg leading-relaxed font-medium">
                To create an inclusive space where creativity flourishes, ideas are shared freely, and innovation knows no bounds
              </span>
            </motion.div>

            <motion.div 
              className="glass-card p-8 rounded-2xl flex-1 cursor-target group border border-white/10"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              style={{ willChange: 'transform' }}
            >
              <span className="bg-gradient-to-r from-[#EC4899] to-[#F97316] bg-clip-text text-transparent font-black text-4xl mb-4 block">Our Mission</span>
              <span className="block text-gray-200 text-lg leading-relaxed font-medium">
                Empowering creators through workshops, events, and collaborative projects that push creative boundaries
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* COUNCIL SECTION */}
      <section className="bg-gradient-to-br from-[#1A1F3A] via-[#2D3561] to-[#1A1F3A] py-24 px-6 md:px-12 flex flex-col items-center relative overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-[500px] h-[500px] bg-[#6366F1]/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ willChange: 'transform' }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#EC4899]/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          style={{ willChange: 'transform' }}
        />
        
        {/* Header */}
        <motion.div 
          className="flex items-center gap-4 mb-6 relative z-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <motion.img 
            src="/assets/ohcrop_b.png" 
            alt="OhCrop Logo" 
            loading="lazy"
            className="w-16 h-16 cursor-target"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="text-white text-5xl font-black leading-tight cursor-target">
            Our Council 2025-26
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl text-center text-gray-300 text-xl font-medium leading-relaxed mb-16 relative z-10"
        >
          Meet the passionate team leading Oh Crop this year. Diverse minds united by creativity and innovation.
        </motion.p>

        <div className="max-w-7xl mx-auto flex flex-col gap-8 px-4 py-8 relative z-10">
          {/* Core Council */}
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="font-black text-5xl text-center text-white mb-6 mt-6 cursor-target">Core Council</h3>
              <div className="w-32 h-1 bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] rounded-full mx-auto mb-12" />
            </motion.div>
            
            <motion.div 
              className="flex justify-center gap-12 flex-wrap max-sm:flex-col max-sm:items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Suspense fallback={<div className="w-48 h-64 bg-white/5 backdrop-blur-sm animate-pulse rounded-2xl" />}>
                <CouncilMemberCard
                  name="Aimy"
                  info="President"
                  videoSrc="/video/aimy.mp4"
                  imageSrc="/council/Aimy.jpg"
                  socialLinks={{
                    instagram: "https://instagram.com/aimy",
                    linkedin: "https://linkedin.com/in/aimy",
                    github: "https://github.com",
                  }}
                />
              </Suspense>
              <Suspense fallback={<div className="w-48 h-64 bg-white/5 backdrop-blur-sm animate-pulse rounded-2xl" />}>
                <CouncilMemberCard
                  name="Divyansh"
                  info="Vice President"
                  videoSrc="/video/divyansh.mp4"
                  imageSrc="/council/Divyansh.jpg"
                  socialLinks={{
                    instagram: "https://instagram.com/aimy",
                    linkedin: "https://linkedin.com/in/aimy",
                    github: "https://github.com",
                  }}
                />
              </Suspense>
              <Suspense fallback={<div className="w-48 h-64 glass-card animate-pulse rounded-2xl" />}>
                <CouncilMemberCard
                  name="Akamksha"
                  info="Ex-Officio"
                  videoSrc="/video/akamksha.mp4"
                  imageSrc="/council/Akamksha.jpeg"
                  socialLinks={{
                    instagram: "https://instagram.com/aimy",
                    linkedin: "https://linkedin.com/in/aimy",
                    github: "https://github.com",
                  }}
                />
              </Suspense>
            </motion.div>

            <motion.div 
              className="flex justify-center gap-12 mt-8 flex-wrap max-sm:flex-col max-sm:items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <CouncilMemberCard
                name="Daqsh"
                info="General Secretary"
                videoSrc="/video/daqsh.mp4"
                imageSrc="/council/Daqsh.jpg"
                socialLinks={{
                  instagram: "https://instagram.com/aimy",
                  linkedin: "https://linkedin.com/in/aimy",
                  github: "https://github.com",
                }}
              />
              <CouncilMemberCard
                name="Kundana"
                info="Treasurer"
                imageSrc="/council/kundana_.JPG"
                socialLinks={{
                  instagram: "https://instagram.com/aimy",
                  linkedin: "https://linkedin.com/in/aimy",
                  github: "https://github.com",
                }}
              />
            </motion.div>
          </div>

          {/* Heads of Teams */}
          <div className="flex flex-col items-center gap-6 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-black text-5xl text-center text-white mb-6 cursor-target">Heads of Teams</h3>
              <div className="w-32 h-1 bg-gradient-to-r from-[#06B6D4] via-[#3B82F6] to-[#6366F1] rounded-full mx-auto mb-12" />
            </motion.div>
            
            <motion.div 
              className="flex justify-center gap-12 flex-wrap max-sm:flex-col max-sm:items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <CouncilMemberCard
                name="Kirtika"
                info="Marketing Head"
                // videoSrc="/video/makerting.mp4"
                imageSrc="/council/Kirtika.JPG"
                socialLinks={{
                  instagram: "https://instagram.com/aimy",
                  linkedin: "https://linkedin.com/in/aimy",
                  github: "https://github.com",
                }}
              />
              <CouncilMemberCard
                name="Crystal"
                info="Events Head"
                // videoSrc="/video/events.mp4"
                imageSrc="/council/Crystal.jpg"
                socialLinks={{
                  instagram: "https://instagram.com/aimy",
                  linkedin: "https://linkedin.com/in/aimy",
                  github: "https://github.com",
                }}
              />
              <CouncilMemberCard
                name="Mahin"
                info="Tech Head"
                // videoSrc="/video/technical.mp4"
                imageSrc="/council/Mahin.JPG"
                socialLinks={{
                  instagram: "https://instagram.com/aimy",
                  linkedin: "https://linkedin.com/in/aimy",
                  github: "https://github.com",
                }}
              />
              <CouncilMemberCard
                name="Palak"
                info="Design Executive"
                color="orange"
                videoSrc="/video/palak.mp4"
                imageSrc="/council/Aimy.jpg"
                objectPosition="center center"
                videoScale={1.7}
                socialLinks={{
                  instagram: "https://instagram.com/ohcrop",
                  linkedin: "https://linkedin.com/company/ohcrop",
                  github: "https://github.com/ohcrop",
                }}
              />
            </motion.div>
          </div>

          {/* Executives Section */}
          <div className="flex flex-col items-center gap-6 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-black text-5xl text-center text-white mb-6 cursor-target">Executives</h3>
              <div className="w-32 h-1 bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#FDBA74] rounded-full mx-auto mb-12" />
            </motion.div>
            
            {/* Row 1: Events Executives */}
            <motion.div 
              className="flex justify-center gap-8 flex-wrap max-sm:flex-col max-sm:items-center mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <CouncilMemberCard
                name="Shrishti"
                info="Events Executive"
                color="blue"
                videoSrc="/video/shrishti.mp4"
                imageSrc="/council/Crystal.jpg"
                objectPosition="center center"
                socialLinks={{
                  instagram: "https://instagram.com/ohcrop",
                  linkedin: "https://linkedin.com/company/ohcrop",
                  github: "https://github.com/ohcrop",
                }}
              />
              <CouncilMemberCard
                name="Nitya"
                info="Events Executive"
                color="orange"
                videoSrc="/video/nitya.mp4"
                imageSrc="/council/Crystal.jpg"
                objectPosition="center center"
                socialLinks={{
                  instagram: "https://instagram.com/ohcrop",
                  linkedin: "https://linkedin.com/company/ohcrop",
                  github: "https://github.com/ohcrop",
                }}
              />
              <CouncilMemberCard
                name="Mili"
                info="Events Executive"
                color="blue"
                videoSrc="/video/mili.mp4"
                imageSrc="/council/Crystal.jpg"
                objectPosition="center center"
                socialLinks={{
                  instagram: "https://instagram.com/ohcrop",
                  linkedin: "https://linkedin.com/company/ohcrop",
                  github: "https://github.com/ohcrop",
                }}
              />
            </motion.div>

            {/* Row 2: Technical Executives */}
            <motion.div 
              className="flex justify-center gap-8 flex-wrap max-sm:flex-col max-sm:items-center mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <CouncilMemberCard
                name="Sivani"
                info="Technical Executive"
                color="orange"
                videoSrc="/video/sivani.mp4"
                imageSrc="/council/Mahin.JPG"
                objectPosition="center center"
                socialLinks={{
                  instagram: "https://instagram.com/ohcrop",
                  linkedin: "https://linkedin.com/company/ohcrop",
                  github: "https://github.com/ohcrop",
                }}
              />
              <CouncilMemberCard
                name="Rohil"
                info="Technical Executive"
                color="blue"
                videoSrc="/video/rohil.mp4"
                imageSrc="/council/Mahin.JPG"
                objectPosition="center center"
                socialLinks={{
                  instagram: "https://instagram.com/ohcrop",
                  linkedin: "https://linkedin.com/company/ohcrop",
                  github: "https://github.com/ohcrop",
                }}
              />
            </motion.div>

            {/* Row 3: Marketing & Design Executives */}
            <motion.div 
              className="flex justify-center gap-8 flex-wrap max-sm:flex-col max-sm:items-center mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <CouncilMemberCard
                name="Vaishnavi"
                info="Marketing Executive"
                color="orange"
                videoSrc="/video/vaishnavi.mp4"
                imageSrc="/council/Kirtika.JPG"
                objectPosition="center center"
                socialLinks={{
                  instagram: "https://instagram.com/ohcrop",
                  linkedin: "https://linkedin.com/company/ohcrop",
                  github: "https://github.com/ohcrop",
                }}
              />
              <CouncilMemberCard
                name="Amrita"
                info="Design Executive"
                color="blue"
                videoSrc="/video/amrita.mp4"
                imageSrc="/council/Aimy.jpg"
                objectPosition="center center"
                socialLinks={{
                  instagram: "https://instagram.com/ohcrop",
                  linkedin: "https://linkedin.com/company/ohcrop",
                  github: "https://github.com/ohcrop",
                }}
              />
              <CouncilMemberCard
                name="Mahima"
                info="Design Executive"
                color="orange"
                videoSrc="/video/mahima.mp4"
                imageSrc="/council/Mahima.jpeg"
                objectPosition="center center"
                socialLinks={{
                  instagram: "https://instagram.com/ohcrop",
                  linkedin: "https://linkedin.com/company/ohcrop",
                  github: "https://github.com/ohcrop",
                }}
              />
            </motion.div>

            {/* Row 4: More Design Executives */}
            <motion.div 
              className="flex justify-center gap-8 flex-wrap max-sm:flex-col max-sm:items-center mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <CouncilMemberCard
                name="Marwa"
                info="Design Executive"
                color="blue"
                videoSrc="/video/marwa.mp4"
                imageSrc="/council/Aimy.jpg"
                objectPosition="center center"
                socialLinks={{
                  instagram: "https://instagram.com/ohcrop",
                  linkedin: "https://linkedin.com/company/ohcrop",
                  github: "https://github.com/ohcrop",
                }}
              />
              <CouncilMemberCard
                name="Hamra"
                info="Design Executive"
                color="orange"
                videoSrc="/video/hamra.mp4"
                imageSrc="/council/Aimy.jpg"
                objectPosition="center center"
                socialLinks={{
                  instagram: "https://instagram.com/ohcrop",
                  linkedin: "https://linkedin.com/company/ohcrop",
                  github: "https://github.com/ohcrop",
                }}
              />
              <CouncilMemberCard
                name="Aminta"
                info="Design Executive"
                color="orange"
                videoSrc="/video/aminta.mp4"
                imageSrc="/council/Aminta.jpg"
                objectPosition="center center"
                socialLinks={{
                  instagram: "https://instagram.com/ohcrop",
                  linkedin: "https://linkedin.com/company/ohcrop",
                  github: "https://github.com/ohcrop",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
