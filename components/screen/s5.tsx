import React from "react";

export default function S5() {
    return (
        <div
            className="relative h-screen"
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <div className="relative h-[200vh] -top-[100vh]">
                <div className="h-screen sticky top-0">
                    <Content />
                </div>
            </div>
        </div>
    );
}

function Content() {
    return (
        <div className="bg-[#4E4E5A] h-screen w-full flex items-center justify-center">
            <h1 className="text-[14vw] leading-[0.8] text-center font-bold">
                The End
            </h1>
        </div>
    );
}
