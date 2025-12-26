import { useState, useEffect } from 'react';
import { Menu, X, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: '首頁', path: '/' },
        { name: '關於我們', path: '/about' },
        { name: '精彩回顧', path: '/gallery' },
        { name: '指導團隊', path: '/faculty' },
        { name: '樂器介紹', path: '/instruments' },
        { name: '社團幹部', path: '/team' },
        { name: '行事曆', path: '/schedule' },
        { name: '聯絡我們', path: '/contact' },
    ];

    // Check if link is active
    const isActive = (path) => {
        if (path === '/' && location.pathname !== '/') return false;
        return location.pathname.startsWith(path);
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled || location.pathname !== '/'
                ? 'bg-white/90 backdrop-blur-md shadow-md py-2'
                : 'bg-transparent py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className={`p-2 rounded-xl transition-all duration-300 ${scrolled ? 'bg-gradient-to-br from-primary-500 to-secondary-500 text-white' : 'bg-white/20 text-white backdrop-blur-md'}`}>
                            <Music size={24} />
                        </div>
                        <span className={`text-xl font-bold transition-colors duration-300 ${scrolled || location.pathname !== '/' ? 'text-gray-900' : 'text-white'}`}>
                            TCU管樂
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive(link.path)
                                        ? 'text-primary-600 bg-primary-50'
                                        : scrolled || location.pathname !== '/'
                                            ? 'text-gray-700 hover:text-primary-500 hover:bg-gray-50'
                                            : 'text-white/90 hover:text-white hover:bg-white/10'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-md focus:outline-none ${scrolled || location.pathname !== '/' ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                                }`}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 backdrop-blur-md overflow-hidden shadow-xl border-t border-gray-100"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path)
                                        ? 'text-primary-600 bg-primary-50'
                                        : 'text-gray-700 hover:text-primary-500 hover:bg-gray-50'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav >
    );
};

export default Navbar;
