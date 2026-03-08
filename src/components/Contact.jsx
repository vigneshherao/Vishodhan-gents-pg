import React, { useEffect, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Home,
  Heart,
  Smile,
} from "lucide-react";
import { motion } from "framer-motion";
import { loadContent } from "../utils/content";

const WhatsAppIcon = ({ size = 22, ...props }) => (
  <svg
    {...props}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

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
                    <div className="flex flex-col gap-6">
                      <div>
                        <span className="text-white/60 text-xs font-bold uppercase block mb-1">Address 1</span>
                        <span>{content.address_line1}</span>
                      </div>
                      <div>
                        <span className="text-white/60 text-xs font-bold uppercase block mb-1">Address 2</span>
                        <span className="text-sm">{content.address_line2}</span>
                        <span className="opacity-80 text-sm block mt-1">{content.secondary_address_line1}, {content.secondary_address_line2}</span>
                      </div>
                    </div>
                  ),
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  text: (
                    <div className="flex flex-col gap-1">
                      <a href={`tel:${content.phone}`} className="hover:text-accent-300 transition-colors">
                        {content.phone}
                      </a>
                      <a
                        href={`https://wa.me/91${content.phone.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-green-400 font-bold flex items-center gap-2 hover:text-green-300 transition-colors mt-1"
                      >
                        <WhatsAppIcon size={18} /> Chat on WhatsApp
                      </a>
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
                {
                  Icon: WhatsAppIcon,
                  href: `https://wa.me/91${content.phone.replace(/\D/g, '')}`,
                },
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
