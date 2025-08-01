import S1 from "@/components/screen/s1";
import S2 from "@/components/screen/s2";
import S3 from "@/components/screen/s3";
import S4 from "@/components/screen/s4";
import S5 from "@/components/screen/s5";

export default function Home() {
    return (
        <>
            <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-pink-200 to-[#FFEAD8] p-4 relative">
                {/* Animated confetti background */}
                <div className="absolute inset-0 overflow-hidden opacity-30">
                    {[...Array(30)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-pink-500 rounded-full animate-float"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                transform: `scale(${
                                    Math.random() * 0.5 + 0.5
                                })`,
                            }}
                        />
                    ))}
                </div>

                <div className="relative max-w-4xl w-full">
                    {/* Main content */}
                    <h1 className="relative scroll-m-20 text-center text-6xl md:text-8xl lg:text-[10vh] font-extrabold tracking-tight text-balance bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 capitalize mb-6">
                        Happy Birthday!
                    </h1>

                    {/* Subtitle */}
                    <p className="relative text-center text-xl md:text-2xl text-pink-700 font-medium mb-8">
                        Wishing you an amazing day filled with joy!
                    </p>

                    {/* Decorative elements */}
                    <div className="relative flex justify-center gap-8 mt-8">
                        <div className="w-16 h-16 rounded-full bg-pink-200 flex items-center justify-center animate-bounce">
                            <span className="text-3xl">🎁</span>
                        </div>
                        <div
                            className="w-16 h-16 rounded-full bg-purple-200 flex items-center justify-center animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                        >
                            <span className="text-3xl">🎂</span>
                        </div>
                        <div
                            className="w-16 h-16 rounded-full bg-pink-200 flex items-center justify-center animate-bounce"
                            style={{ animationDelay: "0.4s" }}
                        >
                            <span className="text-3xl">🎈</span>
                        </div>
                    </div>
                </div>

                {/* Scroll down indicator */}
                <div className="absolute bottom-30 left-1/2 transform animate-bounce-slow">
                    <div className="flex flex-col items-center">
                        <p className="text-pink-600 font-medium mb-2">
                            Scroll down
                        </p>
                        <svg
                            className="w-6 h-6 text-pink-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <S1 />
            <S2 />
            <S3 />
            <S4 />
            <S5 />
        </>
    );
}
