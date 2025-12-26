import { motion } from 'framer-motion';
import { Award, Music, History } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-12 md:py-20 bg-white relative overflow-hidden">
            {/* Decoration elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-secondary-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">關於我們</h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <History className="text-primary-500" />
                            社團歷史
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                            慈濟大學管樂社的前身為<span className="font-semibold text-primary-600">慈濟技術學院管樂社</span>，成立於 2014 年。
                            秉持著對音樂的熱愛，我們在校園中播撒音樂的種子。
                        </p>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            2024 年，隨著學校體制的改變，我們正式與慈濟大學合併，成為了全新的「慈濟大學管樂社」。
                            雖然名稱改變，但我們「透過不同聲音的結合，在旋律的道路上相會」的初衷從未改變。
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-1 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
                    >
                        <div className="bg-white rounded-[20px] p-8 h-full">
                            <div className="mb-6 flex items-center justify-center p-6 bg-gray-50 rounded-full w-24 h-24 mx-auto">
                                <Music size={48} className="text-primary-500" />
                            </div>
                            <h4 className="text-xl font-bold text-center mb-4">社團徽章的意義</h4>
                            <ul className="space-y-4 text-gray-600">
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 mt-2 bg-primary-500 rounded-full flex-shrink-0"></span>
                                    <span><strong>三位一體：</strong>圖騰將銅管、木管及打擊樂器連成一線，象徵樂團缺一不可的團結精神。</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 mt-2 bg-primary-500 rounded-full flex-shrink-0"></span>
                                    <span><strong>橘色樂譜：</strong>主色調橘色代表著樂譜，象徵溫暖與活力。</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 mt-2 bg-primary-500 rounded-full flex-shrink-0"></span>
                                    <span><strong>飛揚音符：</strong>躍動的音符代表我們對音樂永遠的熱愛與追求。</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white border border-gray-100 rounded-3xl shadow-lg p-8 md:p-12"
                >
                    <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-2">
                        <Award className="text-yellow-500" />
                        榮譽榜 Milestones
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-primary-50 transition-colors">
                            <div className="text-4xl font-bold text-primary-500 mb-2">特優</div>
                            <div className="text-sm text-gray-500 mb-2">校內社團評鑑</div>
                            <div className="font-semibold text-gray-800">2018 / 2020 / 2024</div>
                        </div>
                        <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-primary-50 transition-colors">
                            <div className="text-4xl font-bold text-secondary-500 mb-2">優等</div>
                            <div className="text-sm text-gray-500 mb-2">全國學生音樂比賽</div>
                            <div className="font-semibold text-gray-800">2019 / 2020</div>
                        </div>
                        <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-primary-50 transition-colors">
                            <div className="text-4xl font-bold text-primary-500 mb-2">New!</div>
                            <div className="text-sm text-gray-500 mb-2">木管五重奏</div>
                            <div className="font-semibold text-gray-800">2025 全國優等</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
