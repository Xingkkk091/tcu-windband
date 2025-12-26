import { useState, useEffect, useRef } from 'react';
import { Play, Pause, Music } from 'lucide-react';

const AudioVisualizer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const analyserRef = useRef(null);
    const sourceRef = useRef(null);

    // 範例音樂連結 (可用於展示的無版權管樂或古典樂)
    // 這裡使用一首免費的古典樂作為範例
    const audioUrl = "https://cdn.pixabay.com/download/audio/2022/03/24/audio_03d65b7410.mp3?filename=orchestral-logo-opening-2-11634.mp3";

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

        ctx.fillStyle = 'rgb(17, 24, 39)'; // bg-gray-900
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const barWidth = (canvas.width / bufferLength) * 2.5;
        let barHeight;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i] / 2;

            // 漸層顏色：從金黃色 (amber-500) 到 紅色 (red-600)
            const gradient = ctx.createLinearGradient(0, canvas.height - barHeight, 0, canvas.height);
            gradient.addColorStop(0, '#f59e0b');
            gradient.addColorStop(1, '#dc2626');

            ctx.fillStyle = gradient;

            // 讓條形圖底部對齊，並有些微圓角效果
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
            // 用戶互動後才能初始化 AudioContext
            initAudio();

            // 確保 Context 是 running 狀態
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
        <section className="py-20 bg-gray-900 text-white overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                        <Music className="text-primary-500" size={32} />
                        聆聽我們的聲音
                    </h2>
                    <p className="text-gray-400">戴上耳機，感受管樂的震撼</p>
                </div>

                <div className="relative bg-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-700">
                    <canvas
                        ref={canvasRef}
                        width={600}
                        height={200}
                        className="w-full h-48 md:h-64 rounded-xl bg-gray-900 mb-6"
                    />

                    <audio
                        ref={audioRef}
                        src={audioUrl}
                        crossOrigin="anonymous"
                        onEnded={() => setIsPlaying(false)}
                    />

                    <button
                        onClick={togglePlay}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-primary-500/20"
                    >
                        {isPlaying ? (
                            <>
                                <Pause fill="currentColor" /> 暫停播放
                            </>
                        ) : (
                            <>
                                <Play fill="currentColor" /> 播放樂曲
                            </>
                        )}
                    </button>

                    <p className="mt-4 text-xs text-gray-500">
                        * 音樂來源：Pixabay Free Music (Orchestral Logo Opening)
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AudioVisualizer;
