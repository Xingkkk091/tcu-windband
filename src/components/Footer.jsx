import { Music, Facebook, Instagram, Github, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-white py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                                <Music size={16} />
                            </div>
                            <span className="text-xl font-bold tracking-wide">TCU Wind Band</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            慈濟大學管樂社成立於 1999 年，致力於推廣管樂音樂，用熱情譜出青春的樂章。歡迎熱愛音樂的你加入我們的大家庭。
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="https://github.com/Xingkkk091/tcu-windband" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                                <Github size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-primary-500">快速連結</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><a href="#home" className="hover:text-primary-400 transition-colors">首頁</a></li>
                            <li><a href="#about" className="hover:text-primary-400 transition-colors">關於我們</a></li>
                            <li><a href="#gallery" className="hover:text-primary-400 transition-colors">精彩回顧</a></li>
                            <li><a href="#faculty" className="hover:text-primary-400 transition-colors">指導團隊</a></li>
                            <li><a href="#schedule" className="hover:text-primary-400 transition-colors">年度行事曆</a></li>
                        </ul>
                    </div>

                    {/* Contact - Simplified */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-primary-500">聯絡資訊</h3>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-primary-500 mt-0.5 shrink-0" />
                                <span>970 花蓮市中央路三段 701 號<br />慈濟大學學生活動中心</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-primary-500 shrink-0" />
                                <a href="mailto:tcuwindband@example.com" className="hover:text-white">tcuwindband@example.com</a>
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
