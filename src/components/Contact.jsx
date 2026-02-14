import React, { useEffect, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Home,
  Heart,
  Smile,
} from "lucide-react";
import { motion } from "framer-motion";
import { loadContent } from "../utils/content";

const Contact = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      const data = await loadContent("contact.md");
      if (data) {
        setContent(data.attributes);
      }
    };
    fetchContent();
  }, []);

  if (!content) return null;

  return (
    <footer
      id="contact"
      className="relative pt-24 pb-12 overflow-hidden font-sans text-white"
    >
      {/* Vibrant Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-secondary-600 z-0" />

      {/* Animated Background Bubbles */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Contact Info & Happy Vibe */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
                  <Smile size={24} className="text-white animate-bounce" />
                </span>
                <span className="text-primary-100 font-bold tracking-wide uppercase text-sm">
                  your satisfaction is our priority!
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                Let's Find Your <br />
                <span className="text-accent-300">Happy Space</span>
              </h2>

              <p className="text-white/90 mb-10 text-xl font-medium max-w-md leading-relaxed">
                Ready to move in? Or just want a tour? <br />
                We are always open for a chat!
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  title: "Our Locations",
                  text: (
                    <div className="flex flex-col gap-2">
                      <span>{content.address_line1}, {content.address_line2}</span>
                      <span className="opacity-80 text-sm border-t border-white/20 pt-1">{content.secondary_address_line1}, {content.secondary_address_line2}</span>
                    </div>
                  ),
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  text: (
                    <div className="flex flex-col gap-1">
                      <span>{content.phone}</span>
                      <span className="opacity-80 text-lg">{content.phone2}</span>
                    </div>
                  )
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  text: content.email,
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-5 group cursor-pointer"
                >
                  <div className="p-3.5 bg-white rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm font-semibold mb-0.5">
                      {item.title}
                    </p>
                    <h4 className="font-bold text-xl text-white tracking-wide">
                      {item.text}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Socials */}
            <div className="mt-12 flex space-x-4">
              {[
                {
                  Icon: Instagram,
                  href: "https://www.instagram.com/vishodhangentspg2025?igsh=MXB2anA5dnN3ODRydg%3D%3D",
                },
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
              ].map(({ Icon, href }, idx) => (
                <motion.a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/10 p-4 rounded-2xl hover:bg-white hover:text-primary-600 transition-all border border-white/10 backdrop-blur-md shadow-lg"
                >
                  <Icon size={22} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Fun Map & Cartoon Animation */}
          <div className="relative">
            {/* Animated "Happy Home" Vector Scene */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="absolute -top-16 right-10 z-20 hidden md:block"
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="bg-white p-5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] flex items-center gap-3 border-4 border-accent-300"
              >
                <div className="bg-red-100 p-3 rounded-full">
                  <Heart size={28} className="text-red-500 fill-current" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase">
                    Community
                  </p>
                  <p className="text-primary-800 font-bold text-lg">
                    100% Loved
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.4 }}
              className="bg-white p-3 rounded-[2.5rem] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
            >
              <div className="h-[350px] w-full bg-slate-100 rounded-[2rem] overflow-hidden relative isolate">
                <iframe
                  src={content.map_url}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="w-full h-full"
                ></iframe>

                {/* Center "Home" Pin Animation */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="bg-accent-500 text-white p-3 rounded-full shadow-xl border-4 border-white">
                      <Home size={28} fill="currentColor" />
                    </div>
                  </motion.div>
                  <div className="w-4 h-2 bg-black/20 rounded-full mx-auto mt-2 blur-[2px]" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm font-medium">
          <p>
            &copy; {new Date().getFullYear()} Vishodhan PG. All rights reserved.
            Made with{" "}
            <Heart size={14} className="inline text-accent-300 fill-current" />{" "}
            in Bangalore.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
