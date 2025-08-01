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
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="w-full overflow-hidden">
            {/* Intro Section */}
            <div className="flex flex-col justify-center items-center h-screen bg-[#FFEAD8] px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 text-amber-800">
                    Happy Birthday!
                </h1>
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl max-w-2xl">
                    <h2 className="text-2xl md:text-3xl text-center text-gray-800 font-medium">
                        Scroll horizontally to see special moments and messages
                    </h2>
                    <div className="flex justify-center mt-8 animate-bounce">
                        <svg
                            className="w-10 h-10 text-amber-600"
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
                    </div>
                </div>
            </div>

            {/* Horizontal Scroll Section */}
            <div className="container flex h-screen w-[400vw]">
                {/* Panel 1 */}
                <div className="panel flex-shrink-0 w-screen h-screen flex items-center justify-center p-8 md:p-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full h-full max-w-6xl">
                        <div className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-2xl">
                            <Image
                                src={Pic1}
                                alt="Picture 1"
                                fill
                                className="object-cover"
                                placeholder="blur"
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center p-6 backdrop-blur-sm rounded-[3rem] shadow-xl">
                            <div className="text-3xl md:text-5xl font-bold text-center text-amber-800 mb-6">
                                Your smile is brighter than the morning sun
                            </div>
                            <p className="text-xl md:text-2xl text-gray-700 text-center">
                                Warming every heart that meets you
                            </p>
                            <div className="text-6xl mt-8">🌅</div>
                        </div>
                    </div>
                </div>

                {/* Panel 2 */}
                <div className="panel flex-shrink-0 w-screen h-screen flex items-center justify-center p-8 md:p-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full h-full max-w-6xl">
                        <div className="flex flex-col justify-center items-center p-6 backdrop-blur-sm rounded-[3rem] shadow-xl order-last lg:order-first">
                            <div className="text-3xl md:text-5xl font-bold text-center text-amber-800 mb-6">
                                Your beauty is timeless
                            </div>
                            <p className="text-xl md:text-2xl text-gray-700 text-center">
                                Like the stars that shine forever
                            </p>
                            <div className="text-6xl mt-8">✨</div>
                        </div>
                        <div className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-2xl">
                            <Image
                                src={Pic2}
                                alt="Picture 2"
                                fill
                                className="object-cover"
                                placeholder="blur"
                            />
                        </div>
                    </div>
                </div>

                {/* Panel 3 */}
                <div className="panel flex-shrink-0 w-screen h-screen flex items-center justify-center p-8 md:p-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full h-full max-w-6xl">
                        <div className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-2xl">
                            <Image
                                src={Pic3}
                                alt="Picture 3"
                                fill
                                className="object-cover"
                                placeholder="blur"
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center p-6 backdrop-blur-sm rounded-[3rem] shadow-xl">
                            <div className="text-3xl md:text-5xl font-bold text-center text-amber-800 mb-6">
                                Every glance of yours feels like poetry
                            </div>
                            <p className="text-xl md:text-2xl text-gray-700 text-center">
                                Soft, graceful, and unforgettable
                            </p>
                            <div className="text-6xl mt-8">🥀</div>
                        </div>
                    </div>
                </div>

                {/* Panel 4 */}
                <div className="panel flex-shrink-0 w-screen h-screen flex items-center justify-center p-8 md:p-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full h-full max-w-6xl">
                        <div className="flex flex-col justify-center items-center p-6 backdrop-blur-sm rounded-[3rem] shadow-xl order-last lg:order-first">
                            <div className="text-3xl md:text-5xl font-bold text-center text-amber-800 mb-6">
                                You are a masterpiece of elegance
                            </div>
                            <p className="text-xl md:text-2xl text-gray-700 text-center">
                                Painted with colors of kindness and love
                            </p>
                            <div className="text-6xl mt-8">🎨</div>
                        </div>
                        <div className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-2xl">
                            <Image
                                src={Pic4}
                                alt="Picture 4"
                                fill
                                className="object-cover"
                                placeholder="blur"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Outro Section */}
            <div className="flex flex-col justify-center items-center h-screen bg-[#FFEAD8] px-4">
                <div className="bg-white/80 backdrop-blur-sm p-12 rounded-3xl shadow-xl max-w-2xl text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-amber-800 mb-6">
                        Wishing You An Amazing Day!
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-700 mb-8">
                        May your birthday be as wonderful as you are
                    </p>
                    <div className="text-6xl animate-pulse">🎂</div>
                </div>
            </div>
        </div>
    );
}
