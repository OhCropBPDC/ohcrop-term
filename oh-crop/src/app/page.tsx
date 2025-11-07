"use client";

import { motion } from "framer-motion";
import DecryptedText from "../components/DecryptedText";
import { GridScan } from "../components/GridScan";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col font-sans overflow-x-hidden">
      {/* HERO SECTION WITH GRIDSCAN */}
      <section className="w-full min-h-screen relative flex items-center justify-center overflow-hidden">
        {/* GridScan Background */}
        <div className="absolute inset-0 z-0">
          <GridScan
            lineThickness={1.5}
            linesColor="#392e4e"
            scanColor="#EA4B19"
            scanOpacity={0.6}
            gridScale={0.1}
            lineJitter={0.2}
            scanDirection="pingpong"
            scanDuration={2.5}
            scanDelay={1}
            bloomIntensity={0.4}
            chromaticAberration={0.004}
            noiseIntensity={0.02}
          />
        </div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F6E0B5]/60 via-[#F6C05C]/40 to-[#EA4B19]/30 z-[1]" />
        
        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#EA4B19]/20 blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#F6C05C]/20 blur-3xl"
          animate={{
            y: [0, -40, 0],
            x: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Text Content */}
        <div className="relative z-10 px-8 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <DecryptedText
              text="Welcome to Oh Crop"
              className="text-6xl md:text-8xl font-black text-black leading-tight mb-6 drop-shadow-lg"
              encryptedClassName="text-6xl md:text-8xl font-black text-black/40"
              animateOn="view"
              speed={30}
              sequential
              maxIterations={15}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#EA4B19] mb-4 cursor-target">
              Connecting Our Community
            </h2>
            <p className="text-xl md:text-2xl text-black/80 font-medium max-w-3xl mx-auto leading-relaxed">
              Discover our events, learn about our mission, and get in touch!
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "backOut" }}
          >
            <a href="/eventss">
              <button className="cursor-target group relative bg-[#EA4B19] text-white px-12 py-5 rounded-2xl shadow-2xl text-xl font-bold overflow-hidden transition-all duration-300 hover:shadow-3xl hover:scale-105 border-2 border-black/10">
                <span className="relative z-10">View our events</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#d43d0f] to-[#EA4B19] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-6 h-10 border-2 border-black/30 rounded-full flex justify-center">
              <motion.div
                className="w-2 h-2 bg-black/50 rounded-full mt-2"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </section>      {/* "What is Oh Crop" SECTION */}
      <section className="w-full bg-gradient-to-br from-[#F6C15B] via-[#f5b842] to-[#f5a82b] py-32 flex flex-col items-center px-4 md:px-0 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-[#EA4B19]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#9EB1C0]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-black text-center cursor-target">
              What is Oh Crop?
            </h2>
            <div className="w-32 h-2 bg-[#EA4B19] rounded-full mx-auto mb-12 animate-pulse-glow" />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 text-2xl md:text-3xl text-black/90 text-center max-w-4xl mx-auto leading-relaxed font-semibold"
          >
            We are a group of like-minded individuals who enjoy designing and appreciating the visual aspects of things.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12 text-black text-center font-bold text-2xl"
          >
            Join us if you are interested as well!
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center"
          >
            <a href="/membership" className="inline-block cursor-target group">
              <button className="relative bg-[#EA4B19] hover:bg-[#d43d0f] text-white px-14 py-6 rounded-2xl shadow-2xl border-2 border-black/10 transition-all duration-300 font-black text-2xl transform hover:scale-105 hover:rotate-1 overflow-hidden">
                <span className="relative z-10">Join us</span>
                <motion.div
                  className="absolute inset-0 bg-black"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ zIndex: 0 }}
                />
              </button>
            </a>
          </motion.div>
        </div>
      </section>
      {/* "What we have been up to" SECTION */}
      <section className="bg-gradient-to-br from-[#7b97ad] via-[#6a8599] to-[#5a7585] py-32 flex flex-col items-center relative overflow-hidden">
        {/* Animated background */}
        <motion.div
          className="absolute top-10 left-10 w-96 h-96 bg-[#F6C05C]/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-[#EA4B19]/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6 text-white text-center drop-shadow-2xl cursor-target">
              What we have been up to
            </h2>
            <div className="w-32 h-2 bg-[#F6C05C] rounded-full mx-auto mb-20" />
          </motion.div>
          
          <div className="flex gap-12 justify-center flex-wrap px-4 max-w-7xl mx-auto">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="cursor-target group w-80 h-[450px] bg-gradient-to-br from-[#f3bc57] to-[#f5a82b] border-2 border-black/20 rounded-3xl shadow-2xl flex flex-col items-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src="/assets/gallery/event1.jpg"
                alt="Adobe Premiere Pro Workshop"
                className="mt-8 mb-6 w-[85%] h-40 rounded-2xl border-2 border-black/10 object-cover shadow-xl group-hover:scale-105 transition-transform duration-300 relative z-10"
              />
              <div className="w-[85%] flex flex-col mt-2 relative z-10">
                <span className="text-3xl font-black text-[#974638] mb-3">Workshops</span>
                <span className="text-lg text-[#542b2d] leading-relaxed font-medium">
                  we like to conduct workshops<br />on things like Web Dev and
                </span>
              </div>
              <motion.div
                className="absolute bottom-0 left-0 w-full h-2 bg-[#EA4B19]"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Card 2 - Center with float animation */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="cursor-target group w-80 h-[450px] bg-gradient-to-br from-[#f3bc57] to-[#f5a82b] border-2 border-black/20 rounded-3xl shadow-2xl flex flex-col items-center relative overflow-hidden animate-float"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src="/assets/gallery/event26.jpg"
                alt="Annual PTC event"
                className="mt-8 mb-6 w-[85%] h-40 rounded-2xl border-2 border-black/10 object-cover shadow-xl group-hover:scale-105 transition-transform duration-300 relative z-10"
              />
              <div className="w-[85%] flex flex-col mt-2 relative z-10">
                <span className="text-3xl font-black text-[#974638] mb-3">Games</span>
                <span className="text-lg text-[#542b2d] leading-relaxed font-medium">
                  We organise around the campus<br />games that engage participants
                </span>
              </div>
              <motion.div
                className="absolute bottom-0 left-0 w-full h-2 bg-[#EA4B19]"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="cursor-target group w-80 h-[450px] bg-gradient-to-br from-[#f3bc57] to-[#f5a82b] border-2 border-black/20 rounded-3xl shadow-2xl flex flex-col items-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src="/assets/gallery/event27.png"
                alt="11/9 Orientation"
                className="mt-8 mb-6 w-[85%] h-40 rounded-2xl border-2 border-black/10 object-cover shadow-xl group-hover:scale-105 transition-transform duration-300 relative z-10"
              />
              <div className="w-[85%] flex flex-col mt-2 relative z-10">
                <span className="text-3xl font-black text-[#974638] mb-3">Fun Activities</span>
                <span className="text-lg text-[#542b2d] leading-relaxed font-medium">
                  Join us for a year<br />of fun activities
                </span>
              </div>
              <motion.div
                className="absolute bottom-0 left-0 w-full h-2 bg-[#EA4B19]"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </section>


      {/* COUNCIL MEMBERS SECTION */}
      <section className="w-full bg-gradient-to-br from-[#F9EDDF] to-[#f5e3cc] py-32 px-4 md:px-0 relative overflow-hidden">
        {/* Decorative animated elements */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-[#EA4B19]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-[#F6C05C]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6 text-black text-center tracking-tight cursor-target">
              Core Council Members
            </h2>
            <div className="w-32 h-2 bg-[#EA4B19] rounded-full mx-auto mb-12 animate-pulse-glow" />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20 text-black/80 text-xl md:text-2xl text-center max-w-4xl mx-auto leading-relaxed font-medium"
          >
            Meet the dedicated members of our Core Council who guide and support our club's mission, helping us grow stronger and more connected every day.
          </motion.p>
          
          <div className="w-full flex flex-wrap justify-center gap-12">
            {[
              { name: "Aimy Acksa Shaji", role: "President", img: "/council/Aimy.jpg", delay: 0.1 },
              { name: "Divyansh Garg", role: "Vice President", img: "/council/Divyansh.jpg", delay: 0.2 },
              { name: "Daqsh Srivastava", role: "General Secretary", img: "/council/Daqsh.jpg", delay: 0.3 },
              { name: "Kundana Mamidi", role: "Treasurer", img: "/council/kundana_.JPG", delay: 0.4 },
              { name: "Akamksha Ranil", role: "Ex Officio", img: "/council/Akamksha.jpeg", delay: 0.5 }
            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: member.delay }}
                whileHover={{ y: -15, rotateY: 5, scale: 1.05 }}
                className="cursor-target group bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-[#e0e0e0] flex flex-col items-center p-8 w-72 relative overflow-hidden"
                style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#EA4B19]/0 to-[#EA4B19]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="uppercase text-xs tracking-widest text-[#EA4B19] font-bold mb-4 bg-[#EA4B19]/10 px-4 py-2 rounded-full relative z-10 group-hover:bg-[#EA4B19] group-hover:text-white transition-all duration-300">
                  {member.role}
                </span>
                <motion.img
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  src={member.img}
                  alt={member.name}
                  className="w-36 h-36 rounded-full border-4 border-[#F6C05C] object-cover shadow-xl mb-5 group-hover:border-[#EA4B19] transition-all duration-300 relative z-10"
                />
                <span className="mt-2 text-2xl font-bold text-[#212121] text-center relative z-10">
                  {member.name}
                </span>
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#EA4B19] to-[#F6C05C]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
