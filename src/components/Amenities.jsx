import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Coffee, ShieldCheck, Zap, Sparkles, Wind, Cloud, Rocket, Bird } from 'lucide-react';

const amenities = [
    {
        icon: Wifi,
        title: "Super Fast Wifi",
        desc: "Stream 4K without buffering",
        color: "bg-blue-100",
        iconColor: "text-blue-600",
        colSpan: "col-span-1 md:col-span-2"
    },
    {
        icon: Coffee,
        title: "Yummy Food",
        desc: "Homestyle meals 3x a day",
        color: "bg-orange-100",
        iconColor: "text-orange-600",
        colSpan: "col-span-1"
    },
    {
        icon: ShieldCheck,
        title: "Safe & Secure",
        desc: "24/7 CCTV & Biometrics",
        color: "bg-emerald-100",
        iconColor: "text-emerald-600",
        colSpan: "col-span-1"
    },
    {
        icon: Zap,
        title: "Power Backup",
        desc: "No dark moments here",
        color: "bg-yellow-100",
        iconColor: "text-yellow-600",
        colSpan: "col-span-1 md:col-span-2"
    },
    {
        icon: Sparkles,
        title: "Daily Cleaning",
        desc: "Sparkling clean rooms everyday",
        color: "bg-purple-100",
        iconColor: "text-purple-600",
        colSpan: "col-span-1"
    },
    {
        icon: Wind,
        title: "Hot Water",
        desc: "Hot water available",
        color: "bg-cyan-100",
        iconColor: "text-cyan-600",
        colSpan: "col-span-1"
    },
];

const Amenities = () => {
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
                        Everything You Need
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
                        Life Made <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-secondary-500">Super Easy!</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {amenities.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`${item.colSpan} ${item.color} rounded-[2.5rem] p-8 relative overflow-hidden group hover:shadow-xl transition-shadow duration-300 border-4 border-white shadow-sm`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 50 }}
                            whileHover={{ scale: 1.02, rotate: 1 }}
                        >
                            <div className="flex flex-col h-full justify-between relative z-10">
                                <motion.div
                                    className={`w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md ${item.iconColor}`}
                                    whileHover={{ y: -5, rotate: -5 }}
                                >
                                    <item.icon size={32} strokeWidth={2.5} />
                                </motion.div>

                                <div>
                                    <h3 className={`text-2xl font-bold mb-2 text-slate-800`}>{item.title}</h3>
                                    <p className="text-slate-600 font-medium">{item.desc}</p>
                                </div>
                            </div>

                            {/* Decorative Circle */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Amenities;
