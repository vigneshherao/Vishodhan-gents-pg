import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Image, Star, Coffee, Phone, PhoneCall } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Active Section tracking
            const sections = ['home', 'amenities', 'gallery', 'reviews', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section === 'home' ? 'home' : section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', icon: Home, href: '#home', id: 'home' },
        { name: 'Amenities', icon: Coffee, href: '#amenities', id: 'amenities' },
        { name: 'Gallery', icon: Image, href: '#gallery', id: 'gallery' },
        { name: 'Reviews', icon: Star, href: '#reviews', id: 'reviews' },
        { name: 'Contact', icon: Phone, href: '#contact', id: 'contact' },
    ];

    return (
        <header className="fixed w-full z-[100] top-0 left-0 flex justify-center py-4 pointer-events-none">
            <nav
                className={`flex items-center justify-between w-[95%] max-w-7xl px-4 md:px-8 py-3 rounded-[2rem] transition-all duration-500 pointer-events-auto ${scrolled
                    ? 'bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/40 mt-0 scale-100'
                    : 'bg-transparent border-transparent mt-2'
                    }`}
            >
                {/* Logo Section */}
                <motion.a
                    href="#"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 group relative"
                >
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform flex-shrink-0">
                        <span className="text-white font-black text-xl">V</span>
                    </div>
                    <span className={`text-lg sm:text-xl font-bold tracking-tight text-slate-900`}>
                        Vishodhan <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">PG</span>
                    </span>
                </motion.a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center bg-slate-100/50 backdrop-blur-sm rounded-full p-1 border border-white/20">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.id;
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`relative px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${isActive ? 'text-white' : 'text-slate-600 hover:text-primary-600'}`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-bg"
                                        className="absolute inset-0 bg-primary-600 rounded-full shadow-lg shadow-primary-600/30"
                                        initial={false}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{link.name}</span>
                            </a>
                        );
                    })}
                </div>

                {/* Right Action Button */}
                <div className="flex items-center gap-4">
                    <motion.a
                        href="tel:7259008155"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden lg:flex items-center gap-2 bg-gradient-brand text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary-600/20 bg-primary-600 hover:shadow-primary-600/40 transition-all"
                    >
                        <PhoneCall size={16} />
                        Get Help
                    </motion.a>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`md:hidden p-2.5 rounded-xl transition-all ${scrolled ? 'bg-slate-100 text-slate-900' : 'bg-white/20 backdrop-blur-md border border-white/30 text-slate-900'}`}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[-1] pointer-events-auto"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-[80%] max-w-[300px] bg-white shadow-2xl z-[110] flex flex-col p-8 pointer-events-auto"
                        >
                            <div className="flex justify-between items-center mb-12">
                                <span className="text-2xl font-bold tracking-tight text-slate-900">
                                    Vishodhan <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">PG</span>
                                </span>
                                <button onClick={() => setIsOpen(false)} className="p-2 bg-slate-100 rounded-full text-slate-600">
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="flex flex-col gap-4">
                                {navLinks.map((link, idx) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        onClick={() => setIsOpen(false)}
                                        className={`flex items-center gap-4 p-4 rounded-2xl font-bold transition-all ${activeSection === link.id ? 'bg-primary-50 text-primary-600' : 'text-slate-600 hover:bg-slate-50'}`}
                                    >
                                        <link.icon size={22} />
                                        <span>{link.name}</span>
                                    </motion.a>
                                ))}
                            </div>

                            <div className="mt-auto">
                                <a href="tel:7259008155" className="w-full flex items-center justify-center gap-3 bg-primary-600 text-white p-4 rounded-2xl font-bold shadow-xl shadow-primary-600/20 transition-all active:scale-95">
                                    <Phone size={20} />
                                    Get Help
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
