import React from "react";
import { DraggableCardBody, DraggableCardContainer } from "../draggable-card";
import Image from "next/image";

// import local images
import Pic1 from "@/public/images/20.jpg";
import Pic2 from "@/public/images/12.jpg";
import Pic3 from "@/public/images/3.jpg";
import Pic4 from "@/public/images/4.jpg";
import Pic5 from "@/public/images/15.jpg";
import Pic6 from "@/public/images/21.jpg";
import Pic7 from "@/public/images/17.jpg";

export default function S3() {
    const items = [
        {
            title: "Her Bright Smile ✨",
            image: Pic1,
            className: "absolute top-32 left-[20%] rotate-[-5deg]",
        },
        {
            title: "Kind & Caring 💖",
            image: Pic2,
            className: "absolute top-50 left-[25%] rotate-[-7deg]",
        },
        {
            title: "Strong & Independent 🌸",
            image: Pic3,
            className: "absolute top-38 left-[40%] rotate-[8deg]",
        },
        {
            title: "Beautiful Inside & Out 🌹",
            image: Pic4,
            className: "absolute top-55 left-[55%] rotate-[10deg]",
        },
        {
            title: "Her Gentle Heart 💕",
            image: Pic5,
            className: "absolute top-30 right-[35%] rotate-[2deg]",
        },
        {
            title: "Full of Joy & Laughter 🎶",
            image: Pic6,
            className: "absolute top-46 left-[45%] rotate-[-7deg]",
        },
        {
            title: "Her Endless Grace 🌷",
            image: Pic7,
            className: "absolute top-20 left-[30%] rotate-[4deg]",
        },
    ];

    return (
        <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
            <p className="absolute top-1/2 mx-auto max-w-2xl -translate-y-3/4 text-center text-2xl font-black text-yellow-500 md:text-4xl dark:text-yellow-200">
                A birthday is not the end of another year, but the start of a
                new one filled with beauty, love, and hope.
            </p>

            {items.map((item) => (
                <DraggableCardBody className={item.className} key={item.title}>
                    <Image
                        src={item.image}
                        alt={item.title}
                        width={300}
                        height={400}
                        className="pointer-events-none relative z-10 object-cover rounded-lg"
                    />
                    <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
                        {item.title}
                    </h3>
                </DraggableCardBody>
            ))}
        </DraggableCardContainer>
    );
}
