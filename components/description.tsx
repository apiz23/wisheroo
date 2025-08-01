"use client";

import { motion, MotionValue } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface Project {
    name: string;
    handle: string;
}

interface DescriptionProps {
    mousePosition: { x: MotionValue<number>; y: MotionValue<number> };
    projects: Project[];
}

export default function Description({
    mousePosition,
    projects,
}: DescriptionProps) {
    const [index, setIndex] = useState(0);
    const { x, y } = mousePosition;

    return (
        <div className="relative h-[120vh] [clip-path:polygon(0_0,0_100%,100%_100%,100%_0)]">
            <div className="absolute flex h-full w-full flex-col items-center justify-center z-10">
                {projects.map(({ name }, i) => (
                    <p
                        key={`p-${i}`}
                        onMouseOver={() => setIndex(i)}
                        className="m-0 cursor-default text-[7vw] uppercase"
                    >
                        {name}
                    </p>
                ))}
            </div>

            <motion.div
                className="fixed top-0 h-[30vw] w-[25vw] overflow-hidden rounded-[1.5vw]"
                style={{ x, y }}
            >
                <Image
                    src={`/images/${projects[index].handle}/about.jpg`}
                    alt="image"
                    fill
                    className="object-cover"
                />
            </motion.div>
        </div>
    );
}
