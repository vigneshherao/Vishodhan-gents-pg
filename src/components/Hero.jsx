import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-surface-50 overflow-hidden pt-20 pb-10 lg:py-0">
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-primary-200/30 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-secondary-200/30 rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white border border-primary-100 shadow-sm text-primary-600 text-sm font-semibold tracking-wide"
          >
            <span className="flex h-2 w-2 rounded-full bg-accent-500 animate-pulse"></span>
            Now Booking for 2026
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-slate-900 leading-[1.1]">
            Elevate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600">
              Living Standards
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-lg leading-relaxed font-medium mx-auto lg:mx-0">
            Experience the perfect blend of luxury, community, and comfort. Your
            premium PG in Bangalore awaits.
          </p>

          <div className="flex flex-wrap gap-4 mb-12 justify-center lg:justify-start">
            {["Premium Amenities", "0% Brokerage", "Unmatched Vibe"].map(
              (text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-slate-700 font-medium"
                >
                  <CheckCircle size={20} className="text-accent-500" />
                  {text}
                </div>
              ),
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <motion.a
              href="tel:07259008155"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary-600/20"
            >
              Book Now <ArrowRight size={20} />
            </motion.a>

            <motion.a
              href="#amenities"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.8)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-lg transition-all"
            >
              Explore PG
            </motion.a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/10 to-primary-500/10 rounded-[3rem] transform rotate-3 scale-105" />
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipNNjbHg8hFuTOXOvU_zOaZATgn8vyUjesL2i-oB=s1360-w1360-h1020-rw"
            alt="Modern PG Room"
            className="relative rounded-[2.5rem] shadow-2xl border-8 border-white object-cover h-[280px] md:h-[500px] w-full z-10"
          />

          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl border border-primary-50 z-20 hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-2xl text-green-600">
                <CheckCircle size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">
                  Google Rating
                </p>
                <p className="text-xl font-bold text-slate-800">4.9/5.0</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
