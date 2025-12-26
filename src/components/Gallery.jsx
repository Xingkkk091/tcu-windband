import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

const Gallery = () => {
    const photos = [
        {
            url: "https://images.unsplash.com/photo-1543050095-2dfb944203da?q=80&w=1470&auto=format&fit=crop",
            caption: "年度成果發表會",
            size: "large"
        },
        {
            url: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=1632&auto=format&fit=crop",
            caption: "社團迎新",
            size: "small"
        },
        {
            url: "https://images.unsplash.com/photo-1514119910350-593671759ce9?q=80&w=1506&auto=format&fit=crop",
            caption: "校內演出",
            size: "small"
        },
        {
            url: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?q=80&w=1470&auto=format&fit=crop",
            caption: "寒暑假集訓",
            size: "medium"
        },
        {
            url: "https://images.unsplash.com/photo-1572886756616-95f70b22a07c?q=80&w=1470&auto=format&fit=crop",
            caption: "管樂節交流",
            size: "medium"
        },
        {
            url: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1374&auto=format&fit=crop",
            caption: "社課練習",
            size: "small"
        }
    ];

    return (
        <section id="gallery" className="py-20 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Camera className="w-6 h-6 text-primary-500" />
                        <span className="text-primary-500 font-bold tracking-wider uppercase">Gallery</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">精彩回顧</h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-400">紀錄每一個感動的瞬間，譜出我們的青春樂章</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4">
                    {photos.map((photo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative group overflow-hidden rounded-xl cursor-pointer ${photo.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                                    photo.size === 'medium' ? 'md:col-span-2' : ''
                                }`}
                        >
                            <img
                                src={photo.url}
                                alt={photo.caption}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-white font-bold text-lg">{photo.caption}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:bg-white/10 rounded-full transition-colors">
                        <span>看更多活動照片</span>
                        <Camera size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
