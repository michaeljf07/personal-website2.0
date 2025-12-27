"use client";

import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function Portfolio() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        function handleScroll() {
            const sections = ["home", "about", "skills", "projects", "contact"];
            const current = sections.find((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function scrollToSection(id: string) {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className="min-h-screen bg-slate-950 text-gray-100 pt-16">
            <Navigation
                activeSection={activeSection}
                onScrollToSection={scrollToSection}
            />
            <HeroSection onScrollToSection={scrollToSection} />

            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </div>
    );
}
