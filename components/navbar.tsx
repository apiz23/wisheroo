import Image from "next/image";
import React from "react";
import cake from "@/public/images/cake.png";

export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 w-full z-50 flex justify-center items-center py-4 px-2">
            <Image
                src={cake}
                alt="cake"
                width={72}
                height={72}
                className="h-14 w-14"
                priority
            />
        </div>
    );
}
