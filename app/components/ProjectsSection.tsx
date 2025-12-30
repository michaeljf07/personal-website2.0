"use client";

import { projects } from "@/app/data/projects";
import { Github } from "lucide-react";
import { useRef, useState } from "react";
import Link from "next/link";

export default function ProjectsSection() {
    const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});
    const [isPlaying, setIsPlaying] = useState<{ [key: number]: boolean }>({});

    function handleVideoPlay(index: number) {
        // Pause all other videos when the user clicks another one
        Object.entries(videoRefs.current).forEach(([key, video]) => {
            const videoIndex = parseInt(key);
            if (videoIndex !== index && video && !video.paused) {
                video.pause();
            }
        });

        // Play the selected video
        const video = videoRefs.current[index];
        if (video) {
            if (video.paused) {
                video.play();
                setIsPlaying((prev) => ({ ...prev, [index]: true }));
            }
        }
    }

    function handleVideoPause(index: number) {
        setIsPlaying((prev) => ({ ...prev, [index]: false }));
    }

    return (
        <section id="projects" className="py-16 md:py-20 px-4 bg-slate-900/50">
            <div className="max-w-6xl mx-auto">
                <div className="mb-10 md:mb-14 text-center">
                    <p className="text-red-500 text-md sm:text-md md:text-lg font-medium mb-2 md:mb-4 font-sf-mono">
                        // Featured Work
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 md:mb-4 font-sf-mono">
                        Featured Projects
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-linear-to-br from-slate-800/50 to-slate-800/30 border border-slate-700/50 rounded-lg md:rounded-xl p-4 md:p-5 hover:border-red-500/50 transition-all duration-200 overflow-hidden flex flex-col">
                            {/* Video Preview */}
                            {project.demoUrl && (
                                <div
                                    className="relative mb-4 md:mb-5 rounded-md overflow-hidden bg-slate-950 group cursor-pointer"
                                    onClick={() => handleVideoPlay(index)}>
                                    <video
                                        ref={(el) => {
                                            if (el) {
                                                videoRefs.current[index] = el;
                                                el.playbackRate = 2;
                                            }
                                        }}
                                        src={project.demoUrl}
                                        poster={project.image}
                                        className="w-full aspect-video object-cover"
                                        onPause={() => handleVideoPause(index)}
                                        preload="metadata"
                                    />
                                    {/* Creates the play symbol overlay when a video is paused */}
                                    {!isPlaying[index] && (
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center pointer-events-none">
                                            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center group-hover:bg-red-600 transition-colors transform group-hover:scale-110">
                                                <svg
                                                    className="w-5 h-5 text-white ml-0.5"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Content */}
                            <div className="relative z-10 flex flex-col gap-3 md:gap-4 flex-1">
                                <div className="group">
                                    <div className="relative inline-block pb-1.5">
                                        <h3 className="text-lg sm:text-xl font-bold text-white transition-colors font-sf-mono">
                                            {project.title}
                                        </h3>
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
                                    </div>

                                    <p className="text-gray-100 mb-3 md:mb-4 leading-relaxed mt-1.5 md:mt-2 text-sm md:text-base">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5 mb-3 md:mb-4">
                                        {project.technologies.map(
                                            (tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-2 py-0.5 bg-red-500/20 text-red-400 text-xs rounded-full hover:bg-red-500/30 transition-colors">
                                                    {tech}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>
                                <div className="flex gap-3 shrink-0 mt-auto">
                                    <Link
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-3 py-1.5 border border-red-500/40 hover:border-red-500/60 hover:bg-red-500/10 text-gray-200 hover:text-white rounded-md transition-all duration-200 text-sm"
                                        aria-label="GitHub">
                                        <Github size={16} />
                                        <span className="font-medium">
                                            View Code
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
