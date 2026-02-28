import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Image, Star, Coffee, Phone } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', icon: Home, href: '#' },
        { name: 'Amenities', icon: Coffee, href: '#amenities' },
        { name: 'Gallery', icon: Image, href: '#gallery' },
        { name: 'Reviews', icon: Star, href: '#reviews' },
        { name: 'Contact', icon: Phone, href: '#contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/70 backdrop-blur-lg shadow-lg border-b border-white/20' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-primary-900' : 'text-white'}`}
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Vishodhan Gents Pg</span>
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative group flex items-center space-x-1 font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white/90 hover:text-white'
                                }`}
                        >
                            <span>{link.name}</span>
                            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full`} />
                        </motion.a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/90 backdrop-blur-xl border-t border-gray-200 overflow-hidden"
                    >
                        <div className="flex flex-col p-4 space-y-2">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center space-x-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 p-3 rounded-xl transition-all"
                                >
                                    <link.icon size={20} className="text-accent-500" />
                                    <span className="font-medium">{link.name}</span>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
