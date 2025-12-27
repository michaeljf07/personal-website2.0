"use client";

export default function ContactSection() {
    return (
        <section id="contact" className="py-16 md:py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <div className="mb-6 md:mb-12">
                    <p className="text-red-500 text-xs sm:text-sm md:text-md font-medium mb-2 md:mb-4 font-sf-mono">
                        // Get In Touch
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 md:mb-4 font-sf-mono">
                        Let's Connect
                    </h2>
                    <p className="text-gray-300 text-xs sm:text-base px-2">
                        I'm always open to discussing new projects, exciting
                        opportunities, or just chatting about tech.
                    </p>
                </div>

                <div className="mb-6 md:mb-12">
                    <a
                        href="mailto:michaeljf.2007@gmail.com"
                        className="text-lg sm:text-2xl md:text-3xl font-bold text-white hover:text-red-500 transition-colors break-all font-sf-mono active:scale-95 inline-block px-2">
                        michaeljf.2007@gmail.com
                    </a>
                </div>

                {/* Footer */}
                <div className="mt-12 md:mt-20 pt-8 md:pt-12 border-t border-slate-800 text-gray-500 text-xs md:text-sm">
                    <p>© 2025, Michael Ferreira</p>
                </div>
            </div>
        </section>
    );
}
