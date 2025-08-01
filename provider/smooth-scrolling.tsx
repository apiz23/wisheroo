"use client";

import { ReactNode, useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProviderProps {
    children: ReactNode;
}

export default function SmoothScrollProvider({
    children,
}: SmoothScrollProviderProps) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        const lenis = new Lenis();

        lenis.on("scroll", ScrollTrigger.update);

        const rafCallback = (time: number) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(rafCallback);
        gsap.ticker.lagSmoothing(0);

        return () => {
            clearTimeout(timeout);
            gsap.ticker.remove(rafCallback);
            lenis.destroy();
        };
    }, []);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-lg">Loading...</p>
            </div>
        );
    }

    return <>{children}</>;
}
