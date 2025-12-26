import { motion } from 'framer-motion';
import { Clock, Calendar as CalendarIcon, MapPin } from 'lucide-react';

const Schedule = () => {
    const events = [
        { month: '9月', event: '期初茶會 / 迎新', type: 'activity' },
        { month: '10月', event: '期中進補', type: 'activity' },
        { month: '12月', event: '聖誕音樂會 / 成果發表', type: 'concert' },
        { month: '1月', event: '寒訓', type: 'training' },
        { month: '3月', event: '全國學生音樂比賽', type: 'concert' },
        { month: '5月', event: '送舊', type: 'activity' },
        { month: '7月', event: '暑訓', type: 'training' },
    ];

    return (
        <section id="schedule" className="py-12 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">行事曆與團練</h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Regular Practice Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl shadow-lg p-8 border-l-8 border-primary-500 h-full flex flex-col justify-center"
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <Clock className="text-primary-500" />
                            固定團練時間
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary-100 text-primary-700 font-bold px-3 py-1 rounded-md text-sm">
                                    每週二
                                </div>
                                <div>
                                    <div className="text-xl font-bold text-gray-900">17:30 - 19:30</div>
                                    <div className="text-gray-500">分部練習 & 合奏</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-gray-100 text-gray-600 font-bold px-3 py-1 rounded-md text-sm">
                                    地點
                                </div>
                                <div className="text-gray-700 flex items-center gap-1">
                                    <MapPin size={16} /> 社團辦公室 / 演藝廳
                                </div>
                            </div>
                        </div>
                        <p className="mt-8 text-sm text-gray-500 leading-relaxed border-t pt-4">
                            * 遇期中、期末考週暫停練習。比賽前夕可能會加練，請依幹部公告為準。
                        </p>
                    </motion.div>

                    {/* Annual Events Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8"
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
                            <CalendarIcon className="text-secondary-500" />
                            年度重要活動
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {events.map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`p-4 rounded-xl border transition-all hover:scale-105 ${item.type === 'concert' ? 'bg-amber-50 border-amber-200' :
                                        item.type === 'training' ? 'bg-blue-50 border-blue-200' :
                                            'bg-green-50 border-green-200'
                                        }`}
                                >
                                    <div className={`text-sm font-bold mb-1 ${item.type === 'concert' ? 'text-amber-600' :
                                        item.type === 'training' ? 'text-blue-600' :
                                            'text-green-600'
                                        }`}>
                                        {item.month}
                                    </div>
                                    <div className="font-semibold text-gray-800">{item.event}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Schedule;
