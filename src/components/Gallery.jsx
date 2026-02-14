import React from 'react';
import { motion } from 'framer-motion';
import { Expand, ArrowUpRight } from 'lucide-react';

const galleryImages = [
    {
        src: "https://lh3.googleusercontent.com/p/AF1QipNNjbHg8hFuTOXOvU_zOaZATgn8vyUjesL2i-oB=s1360-w1360-h1020-rw",
        title: "Spacious Room",
        desc: "Comfortable living",
        span: "md:col-span-2 md:row-span-2",
        delay: 0
    },
    {
        src: "https://lh3.googleusercontent.com/p/AF1QipO1C-odJl00r0Tu-x3kWVPxkUmgUBop30BWsnCK=s1360-w1360-h1020-rw",
        title: "Well Furnished",
        desc: "Everything you need",
        span: "md:col-span-1 md:row-span-1",
        delay: 0.1
    },
    {
        src: "https://lh3.googleusercontent.com/p/AF1QipMAkP9qQ5MnduITkn6PxTDcdYSkZx2Exdp21nuH=s1360-w1360-h1020-rw",
        title: "Modern Interiors",
        desc: "Stylish & Clean",
        span: "md:col-span-1 md:row-span-2",
        delay: 0.2
    },
    {
        src: "https://lh3.googleusercontent.com/p/AF1QipM9z9q7Gw73OPxEJqlWxH45uX4TZ3TKq8R7foUm=s1360-w1360-h1020-rw",
        title: "Study Area",
        desc: "Focus & Grow",
        span: "md:col-span-1 md:row-span-1",
        delay: 0.3
    },
    {
        src: "https://lh3.googleusercontent.com/p/AF1QipP5nODkLeUqnS53vtCWRHTfAyxp0PismkhIyLIB=s1360-w1360-h1020-rw",
        title: "Cozy Corners",
        desc: "Relax after work",
        span: "md:col-span-1 md:row-span-1",
        delay: 0.4
    },
    {
        src: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzdc3vVHw5KRxh8q3cB89_6SR1mGanUkMWjJBvZPdR8JXzeQ64FWvKVzU2X2MxsjxywZ4V_vLRUusf8vWq4WMmAyw1235tPSKh7IfwjBXvQH5AI9J76HbDEc9lUPm86cCnVcODpy-sox0eQ=s1360-w1360-h1020-rw",
        title: "Amenities",
        desc: "Daily conveniences",
        span: "md:col-span-1 md:row-span-1",
        delay: 0.5
    },
    {
        src: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwubEXRIH3xXRhdhaLINq1fP5nGU0c3-OX5ud35ThZP6-7iCKjKm2e5PsGV7MDXUzjvXOO2YCf4O4Qwye4ujrZMUNc8Ti2ODn0S-6x_QbJMsNvGtZrrMaRe72kKuDnSDfVRV6CDBHRiotWt=s1360-w1360-h1020-rw",
        title: "Common Area",
        desc: "Community vibes",
        span: "md:col-span-2 md:row-span-1",
        delay: 0.6
    }
];

const Gallery = () => {
    return (
        <section id="gallery" className="py-24 bg-surface-50 relative overflow-hidden font-sans">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-block bg-white border border-primary-100 px-4 py-1.5 rounded-full text-sm font-bold text-primary-600 mb-4 shadow-sm"
                    >
                        📸 Take a Sneak Peek
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
                        Inside <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">Vishodhan</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
                    {galleryImages.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.5, delay: item.delay }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className={`${item.span} relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-md border-4 border-white`}
                        >
                            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 z-10" />

                            <img
                                src={item.src}
                                alt={item.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                            />

                            <div className="absolute inset-x-0 bottom-0 p-6 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <h3 className="text-white font-bold text-2xl mb-1">{item.title}</h3>
                                        <p className="text-white/80 font-medium">{item.desc}</p>
                                    </div>
                                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                                        <ArrowUpRight size={24} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
