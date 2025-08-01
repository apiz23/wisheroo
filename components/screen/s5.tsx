"use client";
import React from "react";
import { motion } from "framer-motion";

export default function S5() {
    return (
        <div className="relative h-screen overflow-hidden">
            {/* Sticky Section */}
            <div className="relative h-[200vh] -top-[100vh]">
                <div className="h-screen sticky top-0">
                    {/* Main Content */}
                    <div className="bg-gradient-to-b from-[#FFEAD8] to-pink-700 h-screen w-full flex flex-col items-center justify-center p-8 text-center">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "backOut" }}
                            className="max-w-4xl"
                        >
                            <h1 className="text-[10vw] md:text-[8vw] font-extrabold text-white leading-[0.9] mb-6">
                                Happy Birthday!
                            </h1>

                            <p className="text-xl md:text-3xl text-pink-100 font-medium mb-8">
                                Wishing you endless joy and wonderful memories
                            </p>

                            <div className="flex justify-center gap-4">
                                <motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        rotate: [0, 10, -10, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatDelay: 1,
                                    }}
                                    className="text-6xl"
                                >
                                    🎂
                                </motion.div>
                                <motion.div
                                    animate={{
                                        scale: [1, 1.3, 1],
                                        rotate: [0, -15, 15, 0],
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        repeatDelay: 1.5,
                                    }}
                                    className="text-6xl"
                                >
                                    🎁
                                </motion.div>
                                <motion.div
                                    animate={{
                                        scale: [1, 1.4, 1],
                                        rotate: [0, 20, -20, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        repeatDelay: 2,
                                    }}
                                    className="text-6xl"
                                >
                                    🥂
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="absolute bottom-8 left-0 right-0 text-center"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <p className="text-pink-200 text-sm md:text-base">
                                Made with ❤️ for your special day
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Floating Emojis */}
            {[...Array(30)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute text-2xl md:text-3xl"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        rotate: Math.random() * 360,
                    }}
                    animate={{
                        y: [0, -1000],
                        x: [0, (Math.random() - 0.5) * 200],
                        opacity: [1, 0],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 5,
                        repeat: Infinity,
                        delay: Math.random() * 3,
                        ease: "linear",
                    }}
                >
                    {
                        ["🎉", "🎊", "🎈", "🎁", "✨", "🥳"][
                            Math.floor(Math.random() * 6)
                        ]
                    }
                </motion.div>
            ))}
        </div>
    );
}
