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
                                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">專業領域</h4>
                                <p className="text-gray-800 font-semibold">低音管 (Bassoon) 演奏與教學</p>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">經歷</h4>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    畢業於東海大學音樂系。擁有豐富的管樂團指導經驗，曾指導新竹中學、花蓮高中等多所學校管樂社，致力於提升學生音樂素養與演奏技巧。
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
                                <p className="text-gray-800 font-semibold">課外活動指導組 組員</p>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">貢獻</h4>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    長期陪伴與支持社團發展，協助處理社團行政事務與資源協調，是社團最強大的後盾，讓同學們能無後顧之憂地投入音樂練習。
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
