import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import SmoothScrollProvider from "@/provider/smooth-scrolling";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400"],
});

export const metadata: Metadata = {
    title: "Nur Izzati Birthday",
    description: "Happy Birthday Nur Izzati",
    icons: {
        icon: [
            {
                url: "/favicon.ico",
                href: "/favicon.ico",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${poppins.className} bg-[#FFEAD8] text-[#2A1458]`}
            >
                <SmoothScrollProvider>
                    <Navbar />
                    {children}
                </SmoothScrollProvider>
            </body>
        </html>
    );
}
