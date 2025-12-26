import { Music, Facebook, Instagram, Github, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    // Helper Components
    const SocialLink = ({ href, icon, label }) => (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-all duration-300"
        >
            {icon}
        </a>
    );

    const FooterLink = ({ to, label }) => (
        <li>
            <Link
                to={to}
                className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 group"
            >
                <div className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-primary-500 transition-colors"></div>
                {label}
            </Link>
        </li>
    );

    return (
        <footer className="bg-gray-950 text-white py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand and About */}
                    <div className="md:col-span-2">
                        <Link to="/" className="flex items-center gap-2 mb-6 group">
                            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                <Music size={24} />
                            </div>
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">
                                TCU管樂
                            </span>
                        </Link>
                        <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                            慈濟大學管樂社的前身為慈濟技術學院管樂社，成立於 2014 年。
                            從最初沒有任何樂器，到現在發展茁壯。雖然名稱改變，但我們「透過不同聲音的結合，在旋律的道路上相會」的初衷從未改變。
                        </p>
                        <div className="flex gap-4">
                            <SocialLink href="#" icon={<Facebook size={20} />} label="Facebook" />
                            <SocialLink href="#" icon={<Instagram size={20} />} label="Instagram" />
                            <SocialLink href="https://github.com/xingkkk091/tcu-windband" icon={<Github size={20} />} label="GitHub" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                            <span className="w-1 h-6 bg-primary-500 rounded-full"></span>
                            快速連結
                        </h3>
                        <ul className="space-y-3">
                            <FooterLink to="/" label="首頁" />
                            <FooterLink to="/about" label="關於我們" />
                            <FooterLink to="/gallery" label="精彩回顧" />
                            <FooterLink to="/faculty" label="指導團隊" />
                            <FooterLink to="/instruments" label="樂器介紹" />
                            <FooterLink to="/team" label="社團幹部" />
                            <FooterLink to="/schedule" label="年度行事曆" />
                            <FooterLink to="/contact" label="聯絡我們" />
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                            <span className="w-1 h-6 bg-secondary-500 rounded-full"></span>
                            聯絡資訊 (建國校區)
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="text-primary-500 shrink-0 mt-1" size={18} />
                                <span>970 花蓮市建國路二段 880 號<br />慈濟大學學生活動中心</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="text-primary-500 shrink-0" size={18} />
                                <a href="mailto:tcuwindband@example.com" className="hover:text-primary-400 transition-colors">
                                    tcuwindband@example.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 text-center text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; {new Date().getFullYear()} Tzu Chi University Wind Band. All Rights Reserved.</p>
                    <p>Designed with ❤️ by Antigravity</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
