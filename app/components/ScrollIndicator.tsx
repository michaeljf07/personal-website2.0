"use client";

import { ChevronDown } from "lucide-react";

interface ScrollIndicatorProps {
    onScrollToSection: (id: string) => void;
}

export default function ScrollIndicator({
    onScrollToSection,
}: ScrollIndicatorProps) {
    return (
        <div className="absolute bottom-20 flex flex-col items-center gap-2 text-gray-100">
            <p className="text-xs md:text-sm">Scroll to explore</p>
            <button
                onClick={() => onScrollToSection("about")}
                className="animate-bounce">
                <ChevronDown size={24} />
            </button>
        </div>
    );
}
