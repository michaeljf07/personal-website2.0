import { projects } from "@/app/data/projects";
import { Github } from "lucide-react";

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-16 md:py-20 px-4 bg-slate-900/50">
            <div className="max-w-6xl mx-auto">
                <div className="mb-8 md:mb-16 text-center">
                    <p className="text-red-500 text-sm sm:text-sm md:text-md font-medium mb-2 md:mb-4 font-sf-mono">
                        // Featured Work
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 md:mb-4 font-sf-mono">
                        Featured Projects
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base px-2">
                        A selection of projects I've worked on. Each one taught
                        me something new.
                    </p>
                </div>

                <div className="space-y-6 md:space-y-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-linear-to-br from-slate-800/50 to-slate-800/30 border border-slate-700/50 rounded-lg md:rounded-xl p-5 md:p-8 hover:border-red-500/50 transition-all duration-200 overflow-hidden">
                            {/* Content */}
                            <div className="relative z-10 flex flex-col gap-4 md:gap-6">
                                <div className="group flex-1">
                                    <div className="relative inline-block pb-2">
                                        <h3 className="text-xl sm:text-2xl font-bold text-white transition-colors font-sf-mono">
                                            {project.title}
                                        </h3>
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
                                    </div>

                                    <p className="text-gray-100 mb-4 md:mb-6 leading-relaxed mt-2 md:mt-3 text-base sm:text-base md:text-base">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map(
                                            (tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-2 md:px-3 py-1 bg-red-500/20 text-red-400 text-xs rounded-full hover:bg-red-500/30 transition-colors">
                                                    {tech}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>
                                <div className="flex gap-4 shrink-0">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 border border-red-500/40 hover:border-red-500/60 hover:bg-red-500/10 text-gray-200 hover:text-white rounded-md transition-all duration-200"
                                        aria-label="GitHub">
                                        <Github size={18} />
                                        <span className="text-sm font-medium">
                                            View Code
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
