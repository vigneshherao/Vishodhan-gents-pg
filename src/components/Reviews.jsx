import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { loadContent } from '../utils/content';

const Reviews = () => {
    const scrollRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    const [content, setContent] = useState(null);

    useEffect(() => {
        const fetchContent = async () => {
            const data = await loadContent("reviews.md");
            if (data) {
                setContent(data.attributes);
            }
        };
        fetchContent();
    }, []);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer || !content || !content.review_list) return;

        let scrollAmount = 1; // Speed of auto-scroll
        let animationFrameId;

        const scroll = () => {
            if (!isPaused && scrollContainer) {
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                    // Reset to start when reached the halfway point (end of first set)
                    scrollContainer.scrollLeft = 0;
                } else {
                    scrollContainer.scrollLeft += scrollAmount;
                }
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused, content]);

    if (!content) return null;

    const reviewList = content.review_list || [];

    return (
        <section id="reviews" className="py-24 bg-surface-50 overflow-hidden relative">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 mb-12 text-center relative z-10">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    className="inline-block py-1 px-3 rounded-full bg-accent-50 text-accent-600 font-semibold tracking-wider uppercase text-xs mb-4"
                >
                    Testimonials
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-bold text-slate-900 mt-2"
                >
                    Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Residents</span>
                </motion.h2>
            </div>

            <div className="relative w-full">
                {/* Gradient Masks */}
                <div className="absolute inset-y-0 left-0 w-12 md:w-40 bg-gradient-to-r from-surface-50 to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-12 md:w-40 bg-gradient-to-l from-surface-50 to-transparent z-20 pointer-events-none" />

                {/* Scroll Container */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto no-scrollbar gap-5 py-8 px-6 md:px-0 auto-scroll-container"
                    style={{
                        scrollBehavior: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setTimeout(() => setIsPaused(false), 2000)} // Resume after delay on touch
                >
                    {/* Double the array for infinite loop illusion */}
                    {[...reviewList, ...reviewList, ...reviewList].map((review, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 bg-white p-6 md:p-8 rounded-[1.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all 
                            w-[85vw] md:w-[400px] border border-primary-100/50 flex flex-col justify-between group relative select-none"
                        >
                            <div className="absolute top-6 right-6 text-primary-100 group-hover:text-primary-200 transition-colors">
                                <Quote size={40} fill="currentColor" className="opacity-50" />
                            </div>

                            <div>
                                <div className="flex text-yellow-400 mb-4 gap-1">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                                    ))}
                                </div>

                                <p className="text-slate-700 mb-6 text-base md:text-lg leading-relaxed font-medium relative z-10">
                                    "{review.text}"
                                </p>
                            </div>

                            <div className="flex items-center mt-auto border-t border-slate-50 pt-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white mr-3 shadow-lg shadow-primary-500/20">
                                    <span className="font-bold text-lg">{review.name.charAt(0)}</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-base md:text-lg text-slate-900">{review.name}</h4>
                                    <p className="text-primary-600 text-xs md:text-sm font-semibold">Resident</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default Reviews;
