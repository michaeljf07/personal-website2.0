"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { navItems } from "./Navigation";

export default function MobileMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        function handleResize() {
            setMenuOpen(false);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Close menu when clicking outside the menu box
    function handleOverlayClick(
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) {
        if (e.target === e.currentTarget) {
            setMenuOpen(false);
        }
    }

    return (
        <>
            {/* Hamburger Icon for Mobile */}
            {!menuOpen && (
                <button
                    className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                    aria-label="Open menu"
                    onClick={() => setMenuOpen(true)}>
                    <Menu size={24} className="text-gray-100" />
                </button>
            )}

            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm flex items-start justify-center md:hidden animate-fade-in"
                    onClick={handleOverlayClick}>
                    {/* Close button in top-right corner */}
                    <button
                        className="absolute top-4 right-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                        aria-label="Close menu"
                        onClick={() => setMenuOpen(false)}>
                        <X size={24} className="text-gray-100" />
                    </button>

                    <nav className="flex flex-col gap-6 bg-slate-950/95 rounded-lg p-8 shadow-lg w-[90vw] max-w-xs">
                        {navItems.map((item) => (
                            <Link
                                key={item.id}
                                href={`#${item.id}`}
                                className="transition-colors text-lg font-medium font-sf-mono py-2 px-4 rounded hover:bg-slate-800/50 text-gray-100 hover:text-red-300 text-center"
                                onClick={() => setMenuOpen(false)}>
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </>
    );
}
