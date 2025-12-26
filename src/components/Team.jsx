import { motion } from 'framer-motion';
import { User, Users, Music } from 'lucide-react';

const Team = () => {
    const mainLeaders = [
        { role: '社長', name: '王小明', dept: '醫學系' },
        { role: '副社長', name: '李阿美', dept: '護理系' },
        { role: '學生指揮', name: '陳大文', dept: '傳播系' },
    ];

    const sectionLeaders = [
        '長笛組長', '雙簧管組長', '豎笛組長', '薩克斯風組長', '銅管組長', '打擊組長'
    ];

    const adminTeam = [
        '文書', '財務', '美宣', '器材', '資訊', '譜務'
    ];

    return (
        <section id="team" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">社團幹部</h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
                </motion.div>

                {/* Main Leaders */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {mainLeaders.map((leader, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white border rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow border-t-4 border-t-primary-500"
                        >
                            <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-400">
                                <User size={40} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
                            <div className="text-primary-600 font-semibold mb-1">{leader.role}</div>
                            <div className="text-sm text-gray-500">{leader.dept}</div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Section Leaders */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 rounded-2xl p-8"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-secondary-100 text-secondary-600 rounded-lg">
                                <Music className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">聲部組長</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {sectionLeaders.map((role, idx) => (
                                <div key={idx} className="bg-white p-3 rounded-lg shadow-sm text-center text-gray-700 font-medium">
                                    {role}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Admin Team */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 rounded-2xl p-8"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-primary-100 text-primary-600 rounded-lg">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">行政團隊</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {adminTeam.map((role, idx) => (
                                <div key={idx} className="bg-white p-3 rounded-lg shadow-sm text-center text-gray-700 font-medium">
                                    {role}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Team;
