import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1465847899078-b413929f7120?q=80&w=2070&auto=format&fit=crop"
                    alt="Orchestra Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-primary-500/20 border border-primary-500/50 text-primary-200 text-sm md:text-base font-medium mb-6 backdrop-blur-sm">
                        Tzu Chi University Wind Band
                    </span>
                    <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
                        慈濟大學<span className="text-primary-500">管樂社</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-200 mb-10 font-light max-w-2xl mx-auto">
                        用管樂器吹出快樂的旋律，在旋律的道路上相會。
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="#about"
                            className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-primary-500/30 flex items-center gap-2"
                        >
                            加入我們
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-full font-semibold backdrop-blur-sm transition-all flex items-center gap-2"
                        >
                            觀看演出
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mx-auto animate-bounce"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
