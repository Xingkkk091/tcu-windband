import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const instruments = [
    {
        category: '木管樂器 Woodwind',
        description: '音色圓潤、技巧靈活',
        color: 'from-amber-400 to-orange-500',
        items: [
            { name: '長笛', en: 'Flute', desc: '清亮優美，樂團中的花腔女高音' },
            { name: '短笛', en: 'Piccolo', desc: '尖銳響亮，音域最高的木管樂器' },
            { name: '豎笛', en: 'Clarinet', desc: '音域寬廣，管樂團中的小提琴' },
            { name: '薩克斯風', en: 'Saxophone', desc: '橫跨爵士與古典，極具表現力' },
        ]
    },
    {
        category: '銅管樂器 Brass',
        description: '音色莊嚴、富麗堂皇',
        color: 'from-yellow-400 to-yellow-600',
        items: [
            { name: '小號', en: 'Trumpet', desc: '嘹亮輝煌，銅管樂器的領導者' },
            { name: '法國號', en: 'French Horn', desc: '溫潤融合，連接木管與銅管的橋樑' },
            { name: '長號', en: 'Trombone', desc: '滑管獨特，擁有莊嚴的人聲特質' },
            { name: '上低音號', en: 'Euphonium', desc: '音色溫柔寬厚，具歌唱性的銅管' },
            { name: '低音號', en: 'Tuba', desc: '樂團基石，提供厚實的低音支撐' },
        ]
    },
    {
        category: '打擊樂器 Percussion',
        description: '節奏的靈魂',
        color: 'from-red-500 to-rose-600',
        items: [
            { name: '定音鼓', en: 'Timpani', desc: '可調音高，管弦樂團中最重要的打擊樂器' },
            { name: '大鼓/小鼓', en: 'Bass/Snare Drum', desc: '控制節奏與力度的核心' },
            { name: '鍵盤打擊', en: 'Mallets', desc: '木琴、鐵琴，增添旋律色彩' },
            { name: '爵士鼓', en: 'Drum Set', desc: '現代管樂曲風的節奏引擎' },
        ]
    }
];

const Instruments = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="instruments" className="py-12 md:py-20 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">樂器介紹</h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-400">探索構成我們美妙旋律的各個聲部。</p>
                </motion.div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {instruments.map((inst, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${activeTab === index
                                ? `bg-gradient-to-r ${inst.color} text-white shadow-lg scale-105`
                                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                                }`}
                        >
                            {inst.category.split(' ')[0]}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="relative min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            <div className="md:col-span-full text-center mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2">{instruments[activeTab].category}</h3>
                                <p className="text-primary-400 italic">"{instruments[activeTab].description}"</p>
                            </div>

                            {instruments[activeTab].items.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl hover:bg-gray-700/50 transition-colors group"
                                >
                                    <div className="flex justify-between items-end mb-4">
                                        <h4 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">{item.name}</h4>
                                        <span className="text-sm font-mono text-gray-500">{item.en}</span>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Instruments;
