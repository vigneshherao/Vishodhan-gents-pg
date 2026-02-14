import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Wifi, Coffee, ShieldCheck, Zap, Sparkles, Wind, Cloud, Rocket, Bird } from 'lucide-react';
import { loadContent } from '../utils/content';

const iconMap = {
    Wifi,
    Coffee,
    ShieldCheck,
    Zap,
    Sparkles,
    Wind,
    Cloud,
    Rocket,
    Bird
};

const Amenities = () => {
    const [content, setContent] = useState(null);

    useEffect(() => {
        const fetchContent = async () => {
            const data = await loadContent("amenities.md");
            if (data) {
                setContent(data.attributes);
            }
        };
        fetchContent();
    }, []);

    if (!content) return null;

    return (
        <section id="amenities" className="py-24 bg-white relative overflow-hidden font-sans">
            {/* Cartoon Clouds Background */}
            <motion.div
                animate={{ x: [0, 50, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-10 text-primary-100 opacity-50"
            >
                <Cloud size={100} fill="currentColor" />
            </motion.div>

            {/* Bird Floating Near Cloud */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-32 text-secondary-400 opacity-80 pointer-events-none z-0"
            >
                <Bird size={32} />
            </motion.div>

            <motion.div
                animate={{ x: [0, -50, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-40 right-10 text-secondary-100 opacity-50"
            >
                <Cloud size={80} fill="currentColor" />
            </motion.div>

            {/* Rocket Flying Up */}
            <motion.div
                animate={{
                    y: [600, -600],
                    x: [0, 100],
                    opacity: [0, 1, 1, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 5 }}
                className="absolute bottom-0 left-20 text-accent-400 opacity-80 z-0 rotate-45"
            >
                <Rocket size={48} fill="currentColor" />
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-10 bg-gradient-to-t from-transparent to-orange-400 blur-sm" />
            </motion.div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        className="inline-block bg-accent-100 text-accent-600 px-4 py-1.5 rounded-full font-bold text-sm uppercase tracking-wide mb-4"
                    >
                        {content.section_title}
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
                        {content.main_heading}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {content.amenities_list && content.amenities_list.map((item, index) => {
                        const IconComponent = iconMap[item.icon] || Wifi;
                        const colSpan = item.width === 'full' ? "col-span-1 md:col-span-2" : "col-span-1";

                        // Define vibrant gradient maps based on color theme
                        const gradients = {
                            blue: "from-blue-500 to-cyan-400",
                            orange: "from-orange-500 to-amber-400",
                            emerald: "from-emerald-500 to-teal-400",
                            yellow: "from-yellow-400 to-orange-300",
                            purple: "from-purple-500 to-pink-400",
                            cyan: "from-cyan-500 to-blue-400",
                            red: "from-red-500 to-rose-400",
                            indigo: "from-indigo-500 to-violet-400",
                            green: "from-green-500 to-emerald-400",
                            pink: "from-pink-500 to-rose-400",
                        };

                        const gradientClass = gradients[item.color_theme] || "from-slate-100 to-slate-200";
                        const shadowColor = `shadow-${item.color_theme}-500/30`;

                        return (
                            <motion.div
                                key={index}
                                className={`${colSpan} bg-gradient-to-br ${gradientClass} rounded-[2.5rem] p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-white/20 ${shadowColor}`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, type: "spring", stiffness: 50 }}
                                whileHover={{ scale: 1.03, rotate: 1 }}
                            >
                                <div className="flex flex-col h-full justify-between relative z-10">
                                    <motion.div
                                        className={`w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                                        whileHover={{ y: -5, rotate: -5, scale: 1.1 }}
                                    >
                                        <IconComponent size={32} strokeWidth={2.5} className={`text-${item.color_theme}-600`} />
                                    </motion.div>

                                    <div>
                                        <h3 className={`text-2xl font-bold mb-2 text-white drop-shadow-sm`}>{item.title}</h3>
                                        <p className="text-white/90 font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/5 rounded-full blur-xl -ml-5 -mb-5 pointer-events-none" />

                                <motion.div
                                    className="absolute -bottom-4 -right-4 text-white/10 rotate-12 transform scale-150 pointer-events-none"
                                    whileHover={{ rotate: 0, scale: 1.7 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <IconComponent size={120} />
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Amenities;
