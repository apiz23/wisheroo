"use client";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import { useSpring } from "framer-motion";
import Gallery from "../gallery";
import Description from "../description";
import type { MouseEvent } from "react";

const projects = [
    {
        name: "Test",
        handle: "test",
    },
];

export default function S4() {
    const spring = {
        stiffness: 150,
        damping: 15,
        mass: 0.1,
    };

    const mousePosition = {
        x: useSpring(0, spring),
        y: useSpring(0, spring),
    };

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    const mouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const targetX = clientX - (window.innerWidth / 2) * 0.25;
        const targetY = clientY - (window.innerWidth / 2) * 0.3;
        mousePosition.x.set(targetX);
        mousePosition.y.set(targetY);
    };

    return (
        <main onMouseMove={mouseMove}>
            {projects.map(({ handle }, i) => {
                return (
                    <Gallery
                        mousePosition={mousePosition}
                        handle={handle}
                        key={i}
                    />
                );
            })}
            <Description mousePosition={mousePosition} projects={projects} />
        </main>
    );
}
