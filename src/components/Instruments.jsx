import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const instruments = [
    {
        category: '木管樂器 Woodwind',
        description: '笛類樂器，透過空氣在管中震動發聲，音色圓潤',
        color: 'from-amber-400 to-orange-500',
        items: [
            { name: '長笛', en: 'Flute', desc: '音色清亮明快，中高音區穿透力強，技巧靈活，猶如樂團中的花腔女高音。' },
            { name: '短笛', en: 'Piccolo', desc: '長度為長笛一半，音域極高，穿透力強，常在進行曲中帶動活潑氣氛。' },
            { name: '豎笛', en: 'Clarinet', desc: '音樂表現力極強，音域寬廣，音色溫暖，在管樂團中扮演小提琴般的重要角色。' },
            { name: '薩克斯風', en: 'Saxophone', desc: '家族龐大，音色介於木管與銅管之間，接近人聲，橫跨爵士與古典，極具感染力。' },
        ]
    },
    {
        category: '銅管樂器 Brass',
        description: '音色莊嚴，富麗堂皇，能表現澎湃氣勢',
        color: 'from-yellow-400 to-yellow-600',
        items: [
            { name: '小號', en: 'Trumpet', desc: '音色明亮、穿透力強，常用於表現勝利與凱旋，是銅管樂器的領導者。' },
            { name: '法國號', en: 'French Horn', desc: '音色溫暖多變，管身呈螺旋狀，是連接木管與銅管聲部的完美橋樑。' },
            { name: '長號', en: 'Trombone', desc: '利用伸縮滑管改變音高，音色莊嚴且富有人聲特質，能演奏獨特的滑音。' },
            { name: '上低音號', en: 'Euphonium', desc: '音色溫柔寬厚，具有極佳的歌唱性，在管樂團中常擔任獨奏角色。' },
            { name: '低音號', en: 'Tuba', desc: '體積最大、音域最低，提供樂團厚實穩定的低音支撐，是樂團的基石。' },
        ]
    },
    {
        category: '打擊樂器 Percussion',
        description: '節奏的靈魂，種類繁多，增添音樂色彩',
        color: 'from-red-500 to-rose-600',
        items: [
            { name: '定音鼓', en: 'Timpani', desc: '可調音高，音色渾厚莊嚴，是管弦樂團中最重要的節奏與氣氛營造者。' },
            { name: '大鼓/小鼓', en: 'Bass/Snare Drum', desc: '大鼓提供低音震撼，小鼓穿透力強，共同構成樂團節奏的核心。' },
            { name: '鍵盤打擊', en: 'Mallets', desc: '包括木琴 (Xylophone) 與鐵琴 (Glockenspiel) 等，音色清脆明亮，增添旋律色彩。' },
            { name: '綜合打擊', en: 'Auxiliary', desc: '包含鈴鼓、三角鐵等各式樂器，為音樂增添豐富的節奏律動與點綴。' },
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
