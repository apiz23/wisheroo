"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Pic1 from "@/public/images/10.jpg";
import Pic2 from "@/public/images/4.jpg";
import Pic3 from "@/public/images/16.jpg";
import Pic4 from "@/public/images/8.jpg";

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
            {/* Intro */}
            <div className="flex flex-col justify-center items-center h-screen bg-yellow-400">
                <h1 className="text-3xl font-bold">
                    Testing horizontal scrolling w/ alternating sections
                </h1>
                <h2 className="text-xl mt-4">First Container</h2>
            </div>

            {/* Horizontal Scroll */}
            <div className="container flex h-screen w-[400vw]">
                {/* Panel 1 - Image Left */}
                <div className="panel flex-shrink-0 w-screen h-screen bg-black">
                    <div className="grid grid-cols-7 gap-4 w-full h-full">
                        <div className="col-span-3 relative h-full p-4">
                            <Image
                                src={Pic1}
                                alt="Picture 1"
                                className="object-cover w-full h-full rounded-3xl"
                                placeholder="blur"
                            />
                        </div>
                        <div className="col-span-4 flex justify-center items-center text-white text-4xl font-bold">
                            Panel One – Image Left
                        </div>
                    </div>
                </div>

                {/* Panel 2 - Image Right */}
                <div className="panel flex-shrink-0 w-screen h-screen bg-black">
                    <div className="grid grid-cols-7 gap-4 w-full h-full">
                        <div className="col-span-4 flex justify-center items-center text-white text-4xl font-bold">
                            Panel Two – Image Right
                        </div>
                        <div className="col-span-3 relative h-full p-4">
                            <Image
                                src={Pic2}
                                alt="Picture 2"
                                className="object-cover w-full h-full rounded-3xl"
                                placeholder="blur"
                            />
                        </div>
                    </div>
                </div>

                {/* Panel 3 - Image Left */}
                <div className="panel flex-shrink-0 w-screen h-screen bg-black">
                    <div className="grid grid-cols-7 gap-4 w-full h-full">
                        <div className="col-span-3 relative h-full p-4">
                            <Image
                                src={Pic3}
                                alt="Picture 3"
                                className="object-cover w-full h-full rounded-3xl"
                                placeholder="blur"
                            />
                        </div>
                        <div className="col-span-4 flex justify-center items-center text-white text-4xl font-bold">
                            Panel Three – Image Left
                        </div>
                    </div>
                </div>

                {/* Panel 4 - Image Right */}
                <div className="panel flex-shrink-0 w-screen h-screen bg-black">
                    <div className="grid grid-cols-7 gap-4 w-full h-full">
                        <div className="col-span-4 flex justify-center items-center text-white text-4xl font-bold">
                            Panel Four – Image Right
                        </div>
                        <div className="col-span-3 relative h-full p-4">
                            <Image
                                src={Pic4}
                                alt="Picture 4"
                                className="object-cover w-full h-full rounded-3xl"
                                placeholder="blur"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Outro */}
            <div className="flex justify-center items-center h-screen bg-yellow-400 text-2xl font-bold">
                Last Container
            </div>
        </div>
    );
}
