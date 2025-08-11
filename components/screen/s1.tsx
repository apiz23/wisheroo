"use client";

import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Picture1 from "@/public/images/horizontol/4.jpg";
import Picture2 from "@/public/images/horizontol/1.jpg";
import Picture3 from "@/public/images/3.jpg";
import Picture4 from "@/public/images/horizontol/2.jpg";
import Picture5 from "@/public/images/14.jpg";
import Picture6 from "@/public/images/horizontol/3.jpg";
import Picture7 from "@/public/images/15.jpg";

export default function S1() {
    const container = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);

    const pictures = [
        { src: Picture1, className: "w-[25vw] h-[25vh]" },
        {
            src: Picture2,
            className: "top-[-30vh] left-[5vw] w-[35vw] h-[30vh]",
        },
        {
            src: Picture3,
            className: "top-[-10vh] left-[-25vw] w-[20vw] h-[45vh]",
        },
        { src: Picture4, className: "left-[27.5vw] w-[25vw] h-[25vh]" },
        {
            src: Picture5,
            className: "top-[27.5vh] left-[5vw] w-[20vw] h-[25vh]",
        },
        {
            src: Picture6,
            className: "top-[27.5vh] left-[-22.5vw] w-[30vw] h-[25vh]",
        },
        {
            src: Picture7,
            className: "top-[26.5vh] left-[25vw] w-[15vw] h-[25vh]",
        },
    ];

    return (
        <div ref={container} className="relative h-[300vh]">
            <div className="sticky top-0 h-screen overflow-hidden">
                {pictures.map((pic, index) => (
                    <motion.div
                        key={index}
                        style={{ scale }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <div className={`relative ${pic.className}`}>
                            <Image
                                src={pic.src}
                                alt={`image-${index}`}
                                fill
                                placeholder="blur"
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
