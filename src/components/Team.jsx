import { motion } from 'framer-motion';
import { User, Users, Music, ChevronDown } from 'lucide-react';

const Team = () => {
    // 主要幹部 - 照片先空著，之後可以替換
    const executives = [
        {
            role: '社長',
            name: '待更新',
            dept: '待更新',
            photo: null // 之後可以加入照片路徑
        },
        {
            role: '副社長',
            name: '待更新',
            dept: '待更新',
            photo: null
        },
    ];

    const studentConductor = {
        role: '學生指揮',
        name: '待更新',
        dept: '待更新',
        photo: null
    };

    const sectionLeaders = [
        { role: '長笛組長', name: '待更新', photo: null },
        { role: '豎笛組長', name: '待更新', photo: null },
        { role: '薩克斯風組長', name: '待更新', photo: null },
        { role: '銅管組長', name: '待更新', photo: null },
        { role: '打擊組長', name: '待更新', photo: null },
    ];

    const adminTeam = [
        { role: '文書', name: '待更新', photo: null },
        { role: '財務', name: '待更新', photo: null },
        { role: '美宣', name: '待更新', photo: null },
        { role: '器材', name: '待更新', photo: null },
        { role: '資訊', name: '待更新', photo: null },
        { role: '譜務', name: '待更新', photo: null },
    ];

    // 人員卡片組件
    const PersonCard = ({ person, size = 'normal' }) => {
        const sizeClasses = size === 'large'
            ? 'w-24 h-24 md:w-28 md:h-28'
            : size === 'medium'
                ? 'w-20 h-20'
                : 'w-16 h-16';

        return (
            <div className="flex flex-col items-center">
                <div className={`${sizeClasses} bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center text-gray-400 shadow-md overflow-hidden border-2 border-white`}>
                    {person.photo ? (
                        <img src={person.photo} alt={person.name} className="w-full h-full object-cover" />
                    ) : (
                        <User size={size === 'large' ? 40 : size === 'medium' ? 32 : 24} />
                    )}
                </div>
                <div className="mt-2 text-center">
                    <div className={`font-bold ${size === 'large' ? 'text-lg' : 'text-sm'} text-gray-900`}>{person.name}</div>
                    <div className={`${size === 'large' ? 'text-sm' : 'text-xs'} text-primary-600 font-semibold`}>{person.role}</div>
                    {person.dept && <div className="text-xs text-gray-500">{person.dept}</div>}
                </div>
            </div>
        );
    };

    return (
        <section id="team" className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">組織架構</h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-600">慈濟大學管樂社幹部團隊</p>
                </motion.div>

                {/* 組織流程圖 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* 第一層：社長與副社長 */}
                    <div className="flex justify-center gap-8 md:gap-16 mb-4">
                        {executives.map((exec, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-t-4 border-t-primary-500"
                            >
                                <PersonCard person={exec} size="large" />
                            </motion.div>
                        ))}
                    </div>

                    {/* 連接線 */}
                    <div className="flex justify-center mb-4">
                        <div className="w-0.5 h-8 bg-gray-300"></div>
                    </div>

                    {/* 第二層：學生指揮 */}
                    <div className="flex justify-center mb-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all border-t-4 border-t-secondary-500"
                        >
                            <PersonCard person={studentConductor} size="medium" />
                        </motion.div>
                    </div>

                    {/* 連接線分支 */}
                    <div className="flex justify-center mb-4">
                        <div className="flex flex-col items-center">
                            <div className="w-0.5 h-4 bg-gray-300"></div>
                            <div className="w-80 md:w-[600px] h-0.5 bg-gray-300"></div>
                            <div className="flex justify-between w-80 md:w-[600px]">
                                <div className="w-0.5 h-4 bg-gray-300"></div>
                                <div className="w-0.5 h-4 bg-gray-300"></div>
                            </div>
                        </div>
                    </div>

                    {/* 第三層：聲部組長與行政團隊 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* 聲部組長 */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-6 shadow-lg"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-secondary-100 text-secondary-600 rounded-lg">
                                    <Music className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">聲部組長</h3>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                {sectionLeaders.map((leader, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="bg-gray-50 p-3 rounded-xl hover:bg-gray-100 transition-colors"
                                    >
                                        <PersonCard person={leader} size="small" />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* 行政團隊 */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-6 shadow-lg"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-primary-100 text-primary-600 rounded-lg">
                                    <Users className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">行政團隊</h3>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                {adminTeam.map((member, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="bg-gray-50 p-3 rounded-xl hover:bg-gray-100 transition-colors"
                                    >
                                        <PersonCard person={member} size="small" />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* 說明文字 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <p className="text-sm text-gray-500">
                        📷 幹部照片持續更新中...
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Team;
