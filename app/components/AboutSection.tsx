export default function AboutSection() {
    const skills = [
        {
            title: "Organization",
            description: "Structured approach to tasks",
        },
        {
            title: "Discipline",
            description: "Consistent and focused execution",
        },
        {
            title: "Learning",
            description: "Quick to adapt and grow",
        },
        {
            title: "Adaptability",
            description: "Thrives in changing environments",
        },
        {
            title: "Teamwork",
            description: "Collaborative and supportive",
        },
        {
            title: "Problem Solving",
            description: "Analytical thinking",
        },
    ];

    return (
        <section id="about" className="py-20 px-4 bg-slate-900/50">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 text-center">
                    <p className="text-red-500 text-md sm:text-md md:text-lg font-medium mb-2 md:mb-4 font-sf-mono">
                        // About Me
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-sf-mono">
                        Who I Am
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <div className="space-y-6 md:space-y-8">
                        <div className="space-y-4 md:space-y-6 px-2 md:px-0">
                            <p className="text-gray-100 text-base sm:text-lg md:text-lg leading-relaxed">
                                I'm a builder at heart who loves bringing ideas
                                to life. Whether I'm coding a new project,
                                learning a new technology, or collaborating on a
                                team, I'm always driven by curiosity and a
                                desire to create impact.
                            </p>
                            <p className="text-gray-100 text-base sm:text-lg md:text-lg leading-relaxed">
                                I'm passionate about building innovative
                                solutions at the intersection of technology and
                                business, and I'm excited to apply my skills in
                                software development and business strategy to
                                meaningful projects.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="bg-linear-to-br from-slate-700/40 to-slate-800/40 border border-slate-600/50 rounded-lg md:rounded-xl p-4 md:p-4 hover:border-red-500/60 hover:from-red-500/10 hover:to-slate-800/50 transition-all duration-300 group">
                                    <div className="flex flex-col h-full">
                                        <div className="relative inline-block pb-1 md:pb-2">
                                            <h3 className="text-white font-semibold text-sm sm:text-base md:text-md font-sf-mono">
                                                {skill.title}
                                            </h3>
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
                                        </div>
                                        <p className="text-gray-400 text-xs md:text-sm mt-1 md:mt-2 leading-relaxed">
                                            {skill.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row flex-wrap gap-2 md:gap-3 justify-center">
                            <a
                                href="https://www.cs.waterloo.ca"
                                className="w-full sm:w-auto text-center px-6 py-2 rounded-full border-gray-600/75 border text-gray-200 hover:text-red-500 transition-colors text-xs md:text-sm active:scale-95 relative pulse-glow">
                                CS @ University of Waterloo
                            </a>
                            <a
                                href="https://www.wlu.ca/academics/faculties/lazaridis-school-of-business-and-economics/index.html"
                                className="w-full sm:w-auto text-center px-6 py-2 rounded-full border-gray-600/75 border text-gray-200 hover:text-red-500 transition-colors text-xs md:text-sm active:scale-95 relative pulse-glow">
                                BBA @ Wilfrid Laurier University
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center justify-center md:ml-10 lg:ml-16">
                        <img
                            src="/headshots/headshot1.jpg"
                            alt="Headshot"
                            className="w-full h-auto object-cover rounded-xl border-red-600 border max-w-sm my-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
