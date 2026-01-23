import { skillCategories } from "../data/technical-skills";

export default function SkillsSection() {
    return (
        <section id="skills" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="mb-10 text-center">
                    <p className="text-red-500 text-md sm:text-md md:text-lg font-medium mb-2 md:mb-4 font-sf-mono">
                        // Tech Stack
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-sf-mono">
                        Technical Skills
                    </h2>
                </div>

                <div className="space-y-6">
                    {skillCategories.map((category, index) => (
                        <div key={index}>
                            <div className="flex items-center mb-4">
                                <h3 className="text-red-500 font-bold uppercase text-sm font-sf-mono">
                                    &gt; {category.title}
                                </h3>
                            </div>

                            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 gap-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="group relative">
                                        <div className="relative px-3 py-2.5 rounded-lg border border-slate-600/30 group-hover:border-red-500/50 bg-slate-800/20 group-hover:bg-slate-800/40 transition-all duration-300 text-center">
                                            <span className="text-gray-100 group-hover:text-white text-sm font-medium transition-colors duration-300">
                                                {skill}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
