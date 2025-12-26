"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export default function ScrollToTop() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-40 p-4 bg-[#003366] text-white rounded-full shadow-2xl transition-all duration-300 hover:bg-[#3b82f6] hover:-translate-y-1 ${showScrollTop ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"
                }`}
        >
            <ArrowRight className="-rotate-90" size={24} />
        </button>
    );
}
