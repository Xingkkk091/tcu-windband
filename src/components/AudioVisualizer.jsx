import { useState, useEffect, useRef } from 'react';
import { Play, Pause, Music } from 'lucide-react';

const AudioVisualizer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const analyserRef = useRef(null);
    const sourceRef = useRef(null);
    const containerRef = useRef(null);

    // 範例音樂連結
    const audioUrl = "https://cdn.pixabay.com/download/audio/2022/03/24/audio_03d65b7410.mp3?filename=orchestral-logo-opening-2-11634.mp3";

    // 處理視窗大小改變，調整 Canvas 解析度
    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current && canvasRef.current) {
                const { width } = containerRef.current.getBoundingClientRect();
                canvasRef.current.width = width;
                canvasRef.current.height = width * 0.4; // 保持 5:2 比例
                // 限制最大高度，避免在大螢幕太高
                if (canvasRef.current.height > 300) canvasRef.current.height = 300;
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // 初始化大小

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            if (audioRef.current) {
                audioRef.current.pause();
            }
        };
    }, []);

    const initAudio = () => {
        if (!audioRef.current || sourceRef.current) return;

        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const audioCtx = new AudioContext();

        const source = audioCtx.createMediaElementSource(audioRef.current);
        const analyser = audioCtx.createAnalyser();

        analyser.fftSize = 256;
        source.connect(analyser);
        analyser.connect(audioCtx.destination);

        analyserRef.current = analyser;
        sourceRef.current = source;
    };

    const draw = () => {
        if (!canvasRef.current || !analyserRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const bufferLength = analyserRef.current.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        analyserRef.current.getByteFrequencyData(dataArray);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 繪製背景
        ctx.fillStyle = 'rgb(17, 24, 39)'; // bg-gray-900
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // 計算條形寬度 - 稍微調整係數以填滿畫面
        const barWidth = (canvas.width / bufferLength) * 2.5;
        let barHeight;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
            // 根據 Canvas 高度比例調整條形高度
            const scaleFactor = canvas.height / 255;
            barHeight = dataArray[i] * scaleFactor * 0.8; // 0.8 避免頂天

            const gradient = ctx.createLinearGradient(0, canvas.height - barHeight, 0, canvas.height);
            gradient.addColorStop(0, '#f59e0b'); // amber-500
            gradient.addColorStop(1, '#dc2626'); // red-600

            ctx.fillStyle = gradient;
            ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

            x += barWidth + 1;
        }

        animationRef.current = requestAnimationFrame(draw);
    };

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            cancelAnimationFrame(animationRef.current);
        } else {
            initAudio();
            const ctx = sourceRef.current?.context;
            if (ctx && ctx.state === 'suspended') {
                ctx.resume();
            }

            audioRef.current.play();
            draw();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <section className="py-12 md:py-20 bg-gray-900 text-white overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 flex items-center justify-center gap-3">
                        <Music className="text-primary-500" size={28} />
                        聆聽我們的聲音
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base">戴上耳機，感受管樂的震撼</p>
                </div>

                <div
                    ref={containerRef}
                    className="relative bg-gray-800 rounded-2xl p-4 md:p-6 shadow-2xl border border-gray-700 mx-auto w-full max-w-2xl"
                >
                    <canvas
                        ref={canvasRef}
                        className="w-full rounded-xl bg-gray-900 mb-6 block"
                    />

                    <audio
                        ref={audioRef}
                        src={audioUrl}
                        crossOrigin="anonymous"
                        onEnded={() => setIsPlaying(false)}
                        className="hidden"
                    />

                    <button
                        onClick={togglePlay}
                        className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-bold text-base md:text-lg transition-all transform hover:scale-105 shadow-lg shadow-primary-500/20"
                    >
                        {isPlaying ? (
                            <>
                                <Pause fill="currentColor" size={20} /> 暫停播放
                            </>
                        ) : (
                            <>
                                <Play fill="currentColor" size={20} /> 播放樂曲
                            </>
                        )}
                    </button>

                    <p className="mt-4 text-xs text-gray-500">
                        * 音樂來源：Pixabay Free Music
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AudioVisualizer;
