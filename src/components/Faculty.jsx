import { motion } from 'framer-motion';

const Faculty = () => {
    return (
        <section id="faculty" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">指導團隊</h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        優秀的師資陣容，帶領我們在音樂的道路上不斷精進。
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* External Instructor */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="h-80 bg-gray-200 relative overflow-hidden">
                            {/* Placeholder for Liao Yu-Jie */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-300 group-hover:scale-105 transition-transform duration-700">
                                [ 廖昱傑老師指揮照片 ]
                            </div>
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent pt-20">
                                <h3 className="text-2xl font-bold text-white mb-1">廖昱傑 老師</h3>
                                <p className="text-primary-300 font-medium">校外指導 / 指揮</p>
                            </div>
                        </div>
                        <div className="p-8">
                            <div className="mb-4">
                                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">學歷與經歷</h4>
                                <p className="text-gray-800 font-semibold mb-2">東海大學音樂系畢業</p>
                                <p className="text-gray-600 text-sm">
                                    就讀新竹高中時開始學習低音管。曾指導新竹中學、花蓮高中、花崗國中等多所學校管樂團低音管分部，並擔任指揮。
                                </p>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">指揮風格</h4>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    擁有豐富的帶團經驗，致力於提升樂團的合奏能力與音樂表現力，帶領慈濟大學管樂社在比賽中屢獲佳績。
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Internal Instructor */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="h-80 bg-gray-200 relative overflow-hidden">
                            {/* Placeholder for Zeng Wen-Ping */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-300 group-hover:scale-105 transition-transform duration-700">
                                [ 曾文屏老師照片 ]
                            </div>
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent pt-20">
                                <h3 className="text-2xl font-bold text-white mb-1">曾文屏 老師</h3>
                                <p className="text-secondary-300 font-medium">校內指導老師</p>
                            </div>
                        </div>
                        <div className="p-8">
                            <div className="mb-4">
                                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">職務</h4>
                                <p className="text-gray-800 font-semibold">慈濟大學 課外活動指導組</p>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">關於老師</h4>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    雖然沒有音樂背景，但有一顆熱愛管樂及社團夥伴的心。長期協助社團辦理各項相關事務，時常給予我們支持及陪伴，是社團最溫暖的依靠。
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Faculty;
