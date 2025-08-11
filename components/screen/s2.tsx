"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Pic1 from "@/public/images/10.jpg";
import Pic2 from "@/public/images/4.jpg";
import Pic3 from "@/public/images/18.jpg";
import Pic4 from "@/public/images/19.jpg";

export default function S2() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const sections = gsap.utils.toArray<HTMLElement>(".panel");
        const container = document.querySelector(".container");

        if (!container || sections.length === 0) return;

        const ctx = gsap.context(() => {
            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (sections.length - 1),
                    end: () =>
                        "+=" + (container.scrollWidth - window.innerWidth),
                    markers: false,
                },
            });

            // Add subtle animations to each panel content
            sections.forEach((panel, i) => {
                gsap.from(panel.querySelectorAll(".panel-content > *"), {
                    opacity: 0,
                    y: 50,
                    duration: 0.8,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: panel,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                });
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="w-full overflow-hidden bg-gradient-to-b from-amber-50 to-amber-100">
            {/* Intro Section */}
            <div className="flex flex-col justify-center items-center h-screen px-4 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-50/50"></div>
                </div>

                <div className="relative z-10 text-center max-w-4xl px-6 py-12 rounded-3xl backdrop-blur-sm bg-white/70 shadow-lg border border-amber-100/50">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-500">
                        Happy Birthday!
                    </h1>
                    <p className="text-xl md:text-2xl text-amber-900/80 mb-10 font-medium">
                        Scroll to relive our beautiful moments together
                    </p>

                    <div className="flex justify-center">
                        <div className="animate-float flex flex-col items-center">
                            <svg
                                className="w-12 h-12 text-amber-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                                />
                            </svg>
                            <div className="w-1 h-8 bg-amber-400/30 mt-2 rounded-full"></div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-amber-800/50 text-sm">
                    Swipe or scroll horizontally
                </div>
            </div>

            {/* Horizontal Scroll Section */}
            <div className="container flex h-screen w-[400vw] relative">
                {/* Floating decorations */}
                <div className="absolute top-20 left-1/4 text-6xl opacity-10 animate-float">
                    🎈
                </div>
                <div className="absolute bottom-40 right-1/4 text-6xl opacity-10 animate-float-delay">
                    🎁
                </div>

                {/* Panel 1 */}
                <div className="panel flex-shrink-0 w-screen h-screen flex items-center justify-center p-4 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full h-full max-w-6xl items-center">
                        <div className="relative h-[80vh] w-full rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white/30 transform hover:scale-[1.01] transition-transform duration-500">
                            <Image
                                src={Pic1}
                                alt="Picture 1"
                                fill
                                className="object-cover"
                                placeholder="blur"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                        <div className="panel-content flex flex-col justify-center items-center p-8 bg-white/80 rounded-[4rem] shadow-lg border border-amber-100/50">
                            <div className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-amber-600 to-rose-500 text-transparent bg-clip-text leading-tight">
                                Your smile is brighter <br />
                                than the morning sun
                            </div>
                            <p className="text-xl md:text-2xl text-amber-900/80 text-center font-medium mb-8">
                                Warming every heart that meets you
                            </p>
                            <div className="text-8xl mt-4 animate-wiggle">
                                🌅
                            </div>
                        </div>
                    </div>
                </div>

                {/* Panel 2 */}
                <div className="panel flex-shrink-0 w-screen h-screen flex items-center justify-center p-4 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full h-full max-w-6xl items-center">
                        <div className="panel-content flex flex-col justify-center items-center p-8 bg-white/80 rounded-[4rem] shadow-lg border border-amber-100/50 order-last lg:order-first">
                            <div className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-amber-600 to-rose-500 text-transparent bg-clip-text leading-tight">
                                Your beauty is timeless
                            </div>
                            <p className="text-xl md:text-2xl text-amber-900/80 text-center font-medium mb-8">
                                Like the stars that shine forever
                            </p>
                            <div className="text-8xl mt-4 animate-pulse">
                                ✨
                            </div>
                        </div>
                        <div className="relative h-[80vh] w-full rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white/30 transform hover:scale-[1.01] transition-transform duration-500">
                            <Image
                                src={Pic2}
                                alt="Picture 2"
                                fill
                                className="object-cover"
                                placeholder="blur"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
                        </div>
                    </div>
                </div>

                {/* Panel 3 */}
                <div className="panel flex-shrink-0 w-screen h-screen flex items-center justify-center p-4 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full h-full max-w-6xl items-center">
                        <div className="relative h-[80vh] w-full rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white/30 transform hover:scale-[1.01] transition-transform duration-500">
                            <Image
                                src={Pic3}
                                alt="Picture 3"
                                fill
                                className="object-cover"
                                placeholder="blur"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>
                        <div className="panel-content flex flex-col justify-center items-center p-8 bg-white/80 rounded-[4rem] shadow-lg border border-amber-100/50">
                            <div className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-amber-600 to-rose-500 text-transparent bg-clip-text leading-tight">
                                Every glance of yours <br />
                                feels like poetry
                            </div>
                            <p className="text-xl md:text-2xl text-amber-900/80 text-center font-medium mb-8">
                                Soft, graceful, and unforgettable
                            </p>
                            <div className="text-8xl mt-4 animate-wiggle">
                                🥀
                            </div>
                        </div>
                    </div>
                </div>

                {/* Panel 4 */}
                <div className="panel flex-shrink-0 w-screen h-screen flex items-center justify-center p-4 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full h-full max-w-6xl items-center">
                        <div className="panel-content flex flex-col justify-center items-center p-8 bg-white/80 rounded-[4rem] shadow-lg border border-amber-100/50 order-last lg:order-first">
                            <div className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-amber-600 to-rose-500 text-transparent bg-clip-text leading-tight">
                                You are a masterpiece <br />
                                of elegance
                            </div>
                            <p className="text-xl md:text-2xl text-amber-900/80 text-center font-medium mb-8">
                                Painted with colors of kindness and love
                            </p>
                            <div className="text-8xl mt-4 animate-pulse">
                                🎨
                            </div>
                        </div>
                        <div className="relative h-[80vh] w-full rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white/30 transform hover:scale-[1.01] transition-transform duration-500">
                            <Image
                                src={Pic4}
                                alt="Picture 4"
                                fill
                                className="object-cover"
                                placeholder="blur"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Outro Section */}
            <div className="flex flex-col justify-center items-center h-screen relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-50/50"></div>

                <div className="relative z-10 text-center max-w-2xl px-8 py-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-500">
                        Wishing You An Amazing Day!
                    </h2>
                    <p className="text-xl md:text-2xl text-amber-900/80 mb-10 font-medium">
                        May your birthday be as wonderful as you are
                    </p>
                    <div className="text-8xl animate-float">🎂</div>

                    <div className="mt-16 text-amber-800/70 text-sm">
                        Created with love for someone special
                    </div>
                </div>
            </div>
        </div>
    );
}
