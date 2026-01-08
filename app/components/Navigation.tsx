import Link from "next/link";
import MobileMenu from "./MobileMenu";

export const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

export default function Navigation() {
    return (
        <nav className="fixed top-0 w-full bg-slate-950/95 backdrop-blur border-b border-slate-800 z-50">
            <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-2 md:py-4">
                <div className="flex justify-between items-center min-h-12">
                    <div className="text-lg font-bold text-red-500 font-sf-mono truncate">
                        &lt;Michael Ferreira /&gt;
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex gap-6 lg:gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.id}
                                href={`#${item.id}`}
                                className="transition-colors text-xs lg:text-sm font-medium font-sf-mono py-2 px-3 rounded hover:bg-slate-800/50 text-gray-100 hover:text-red-300">
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Hamburger Icon and Mobile Menu */}
                    <MobileMenu />
                </div>
            </div>
        </nav>
    );
}
