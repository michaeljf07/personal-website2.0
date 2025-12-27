import { skillCategories } from "../data/technical-skills";

export default function SkillsSection() {
    return (
        <section id="skills" className="py-16 md:py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="mb-8 md:mb-16 text-center">
                    <p className="text-red-500 text-sm sm:text-sm md:text-md font-medium mb-2 md:mb-4 font-sf-mono">
                        // Tech Stack
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-sf-mono">
                        Technical Skills
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-linear-to-br from-slate-800/50 to-slate-800/30 rounded-lg md:rounded-xl p-4 md:p-6 border border-slate-700/50 hover:border-red-500/50 transition-all duration-300">
                            <h3 className="text-red-500 font-bold mb-4 md:mb-6 uppercase text-xs tracking-widest font-sf-mono">
                                {category.title}
                            </h3>
                            <ul className="space-y-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <li
                                        key={skillIndex}
                                        className="text-gray-100 text-sm md:text-sm py-2 px-2 md:px-3 rounded border border-slate-600/30 hover:border-red-500/50 hover:text-white transition-all duration-200 flex items-center gap-2 active:scale-95">
                                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
