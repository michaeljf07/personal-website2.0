"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
    activeSection: string;
    onScrollToSection: (id: string) => void;
}

export default function Navigation({
    activeSection,
    onScrollToSection,
}: NavigationProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <nav className="fixed top-0 w-full bg-slate-950/95 backdrop-blur border-b border-slate-800 z-50">
            <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-2 md:py-4">
                <div className="flex justify-between items-center min-h-12">
                    {/* Logo */}
                    <div className="sm:text-sm md:text-lg font-bold text-red-500 font-sf-mono truncate">
                        &lt;Michael Ferreira /&gt;
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex gap-6 lg:gap-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    onScrollToSection(item.id);
                                    setMenuOpen(false);
                                }}
                                className={`transition-colors text-xs lg:text-sm font-medium font-sf-mono py-2 px-3 rounded hover:bg-slate-800/50 ${
                                    activeSection === item.id
                                        ? "text-red-500"
                                        : "text-gray-100 hover:text-red-300"
                                }`}>
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-100 hover:text-red-500 active:scale-95 p-1 min-h-12 min-w-12 flex items-center justify-center"
                        onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {menuOpen && (
                    <div className="md:hidden mt-2 flex flex-col gap-2 pb-4">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    onScrollToSection(item.id);
                                    setMenuOpen(false);
                                }}
                                className={`text-left transition-colors font-medium font-sf-mono py-2 px-2 rounded active:scale-95 active:bg-red-500/10 min-h-11 flex items-center ${
                                    activeSection === item.id
                                        ? "text-red-500"
                                        : "text-gray-100 hover:text-red-300"
                                }`}>
                                {item.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}
