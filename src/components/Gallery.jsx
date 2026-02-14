import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Expand, ArrowUpRight } from 'lucide-react';
import { loadContent } from '../utils/content';

const Gallery = () => {
    const [content, setContent] = useState(null);

    useEffect(() => {
        const fetchContent = async () => {
            const data = await loadContent("gallery.md");
            if (data) {
                setContent(data.attributes);
            }
        };
        fetchContent();
    }, []);

    if (!content) return null;

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
                    {content.images && content.images.map((item, index) => {
                        let spanClass = "md:col-span-1 md:row-span-1";
                        if (item.size === 'large') spanClass = "md:col-span-2 md:row-span-2";
                        if (item.size === 'medium') spanClass = "md:col-span-2 md:row-span-1";

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                                className={`${spanClass} relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-md border-4 border-white`}
                            >
                                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 z-10" />

                                <img
                                    src={item.image}
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
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
