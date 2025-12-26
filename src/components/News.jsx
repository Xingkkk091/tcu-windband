import { motion } from 'framer-motion';
import { Calendar, Trophy, Music } from 'lucide-react';

const News = () => {
    const newsItems = [
        {
            id: 1,
            date: '2025-03-15',
            title: '木管五重奏榮獲全國學生音樂比賽優等',
            category: '比賽捷報',
            icon: <Trophy className="text-yellow-500" size={24} />,
            description: '恭喜本社木管五重奏團隊在113學年度全國學生音樂比賽中表現優異，榮獲大專團體B組優等佳績！',
        },
        {
            id: 2,
            date: '2024-12-25',
            title: '2024 聖誕音樂會《冬夜樂章》圓滿落幕',
            category: '活動回顧',
            icon: <Music className="text-primary-500" size={24} />,
            description: '感謝全校師生熱情參與，與我們共度了一個溫馨的聖誕夜晚。',
        },
        {
            id: 3,
            date: '2024-09-10',
            title: '113學年度第一學期 期初茶會',
            category: '社團公告',
            icon: <Calendar className="text-secondary-500" size={24} />,
            description: '歡迎新血加入！期初茶會將於9/18(三) 19:00 在社辦舉行，備有精美餐點。',
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">最新消息</h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 group"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm text-gray-500 font-mono">{item.date}</span>
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${item.category === '比賽捷報' ? 'bg-yellow-100 text-yellow-800' :
                                        item.category === '活動回顧' ? 'bg-primary-100 text-primary-800' :
                                            'bg-secondary-100 text-secondary-800'
                                    }`}>
                                    {item.category}
                                </span>
                            </div>

                            <div className="mb-4">
                                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 loading-snug group-hover:text-primary-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 line-clamp-3 text-sm">
                                    {item.description}
                                </p>
                            </div>

                            <a href="#" className="inline-flex items-center text-primary-600 font-semibold text-sm hover:text-primary-700">
                                閱讀更多 <span className="ml-1">→</span>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default News;
