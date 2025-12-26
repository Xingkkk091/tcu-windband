import { Facebook, Instagram, Mail, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="bg-gray-900 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">聯絡我們</h2>
                        <p className="text-gray-400 mb-8 text-lg">
                            對管樂社有興趣嗎？歡迎私訊粉專或直接到社辦找我們！
                            不管是初學者還是有經驗的夥伴，我們都誠摯歡迎。
                        </p>

                        <div className="space-y-6">
                            <a
                                href="#"
                                className="flex items-center gap-4 text-gray-300 hover:text-white group transition-colors"
                            >
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                                    <Facebook />
                                </div>
                                <span className="text-lg">Facebook 粉絲專頁</span>
                            </a>

                            <a
                                href="#"
                                className="flex items-center gap-4 text-gray-300 hover:text-white group transition-colors"
                            >
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-pink-600 transition-colors">
                                    <Instagram />
                                </div>
                                <span className="text-lg">Instagram 官方帳號</span>
                            </a>

                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                    <MapPin />
                                </div>
                                <div>
                                    <div className="text-lg font-semibold">社辦地點</div>
                                    <div className="text-gray-400">慈濟大學 校本部 / 人社院區 學生活動中心</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form / Map Placeholder */}
                    <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                        <h3 className="text-xl font-bold mb-6">留言給我們</h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">姓名 Name</label>
                                <input type="text" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="您的稱呼" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                                <input type="email" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">訊息 Message</label>
                                <textarea rows="4" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="想詢問什麼呢？"></textarea>
                            </div>
                            <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 rounded-lg transition-colors">
                                送出訊息
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} 慈濟大學管樂社 TCU Wind Band. All Rights Reserved.</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
