"use client";

import Image from "next/image";
import { motion, MotionValue } from "framer-motion";

interface Props {
    mousePosition: { x: MotionValue<number>; y: MotionValue<number> };
    handle: string;
}

export default function Gallery({ mousePosition, handle }: Props) {
    const { x, y } = mousePosition;

    return (
        <div className="relative h-[120vh] [clip-path:polygon(0_0,0_100%,100%_100%,100%_0)]">
            {/* Background Image */}
            <div className="relative h-full w-full">
                <Image
                    src={`/images/${handle}/background.jpg`}
                    alt="image"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Floating vignette image */}
            <motion.div
                className="fixed top-0 h-[30vw] w-[25vw] overflow-hidden rounded-[1.5vw]"
                style={{ x, y }}
            >
                <Image
                    src={`/images/${handle}/1.jpg`}
                    alt="image"
                    fill
                    className="object-cover"
                />
            </motion.div>
        </div>
    );
}
