'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnthropicIcon, GeminiIcon, OllamaIcon, OpenAIIcon } from '../ui/icons';
import { ArrowRight } from 'lucide-react';
import { contributeLink, waitlistLink } from '../links';
import { SparkleOverlay } from '../ui/sparke';
import { useTheme } from '../theme-provider';

export default function LandingPage() {

    const tp = useTheme()

    return (
        <div className="min-h-screen bg-white dark:bg-black">
            <div className="min-h-screen flex flex-col relative overflow-hidden">
                {/* Grid background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff14_1px,transparent_1px),linear-gradient(to_bottom,#ffffff14_1px,transparent_1px)] bg-[size:4rem_4rem]">
                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="relative flex flex-col items-center justify-center min-h-screen max-w-6xl mx-auto px-4 pt-24">
                    {/* Tags */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
                        {['Open Source', 'VSCode Fork', 'AI-Powered'].map((tag) => (
                            <span key={tag}
                                className="px-4 py-1.5 rounded-full border border-gray-400/20 dark:border-white/10 text-gray-600 dark:text-white/30 text-sm
                   hover:border-gray-500/50 hover:text-gray-700 dark:hover:border-white/20 dark:hover:text-white/40 transition-all duration-300
                  backdrop-blur-sm">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Title and content sections */}
                    <div className="space-y-12 text-center max-w-4xl">
                        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter animate-fade-in">
                            <span className="text-gray-900 dark:text-white relative inline-block">
                                voideditor
                            </span>
                            <span className="text-gray-400 dark:text-white/40">.</span>
                            <span className="bg-gradient-to-r from-gray-800 to-gray-500 dark:from-white/80 dark:to-white/40 text-transparent bg-clip-text">
                                com
                            </span>
                        </h1>

                        <div className="space-y-6 animate-fade-in-up">
                            <p className="text-black/90 dark:text-white text-2xl md:text-4xl max-w-2xl mx-auto font-medium
                  leading-relaxed">
                                Your code. Your models. Your data.
                            </p>
                            <p className="text-black/50 dark:text-white text-xl md:text-2xl max-w-2xl mx-auto font-light">
                                The open source AI code editor that puts you in control.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up">
                            <Link
                                href={waitlistLink}
                                className="group px-8 py-4 rounded-md bg-black text-white dark:bg-white/80  dark:text-black font-medium text-lg
                  hover:bg-black/90 dark:hover:bg-white/80 transition-all duration-300 relative overflow-hidden">
                                <span className="relative z-10 flex justify-center items-center gap-2">Join Waitlist <ArrowRight /></span>
                                {tp.theme === 'light' ? <SparkleOverlay number={35} seed={42} /> : null}
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/50 to-white/0
                    translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                            </Link>
                            <Link
                                href={contributeLink}
                                className="group px-8 py-4 rounded-md bg-transparent dark:text-white font-medium text-lg
                  dark:hover:bg-white/5 transition-all duration-300
                  border border-black/20 hover:border-black/100 dark:border-white/20 dark:hover:border-white/30">
                                Contribute
                            </Link>
                        </div>

                        <div className="flex items-center justify-center gap-3 mt-16 animate-fade-in">
                            <span className="text-black dark:text-white/70 text-sm font-medium">
                                Backed by
                            </span>
                            <div className="relative group">
                                <div className="absolute inset-0 bg-black/20 dark:bg-white/5 blur-xl group-hover:bg-white/10 
                    transition-all duration-300 rounded-full" />
                                <Image
                                    src="/yc.svg"
                                    alt="Y Combinator"
                                    width={100}
                                    height={100}
                                    className="opacity-50 group-hover:opacity-60 transition-opacity relative z-10"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
                    <p className="text-black dark:text-white/60 text-sm font-light tracking-wider">Scroll to explore</p>
                    <div className="w-px h-12 bg-gradient-to-b from-black/60 dark:from-white/60 to-transparent animate-pulse" />
                </div>
            </div>

            <div className="flex flex-col gap-40 py-40 max-w-6xl mx-auto px-4">
                <section className="space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-black dark:text-white/90 text-5xl font-bold tracking-tight">Built for the future</h2>
                        <p className="text-black/50 dark:text-white/50 text-xl max-w-2xl mx-auto">Experience the next generation of AI-powered development</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {[
                            {
                                title: "Fast Apply",
                                description: "Apply changes instantly, even on large files",
                                image: "/demos/docstring.png"
                            },
                            {
                                title: "Contextual Awareness",
                                description: "AI that understands your entire codebase",
                                image: "/demos/techstack.png"
                            }
                        ].map((feature) => (
                            <div
                                key={feature.title}
                                className="group rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] overflow-hidden
                  hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-all duration-500"
                            >
                                <div className="aspect-[16/10] w-full bg-black/50">
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        width={800}
                                        height={500}
                                        className="object-cover w-full h-full opacity-90 group-hover:opacity-100 
                      group-hover:scale-105 transition-all duration-500"
                                    />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-black/90 dark:text-white/90 text-2xl font-medium mb-3">{feature.title}</h3>
                                    <p className="text-black/60 dark:text-white/60 text-lg leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Workflow Section */}
                <section className="space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-black/90 dark:text-white/90 text-5xl font-bold tracking-tight">Lightning-fast workflows</h2>
                        <p className="text-black/50 dark:text-white/50 text-xl max-w-2xl mx-auto">Familiar VS Code experience, supercharged with AI</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-1 space-y-6 p-8 rounded-xl border border-black/10 dark:border-white/10 bg-black[0.02] dark:bg-white/[0.02]">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <kbd className="px-3 py-1.5 rounded-md bg-black/10 dark:bg-white/10 text-black/70 dark:text-white/70 text-sm font-mono">Tab</kbd>
                                    <span className="text-black/60 dark:text-white/80">Apply autocomplete</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-2">
                                        <kbd className="px-3 py-1.5 rounded-md bg-black/10 dark:bg-white/10 text-black/70 dark:text-white/70 text-sm font-mono">⌘</kbd>
                                        <kbd className="px-3 py-1.5 rounded-md bg-black/10 dark:bg-white/10 text-black/70 dark:text-white/70 text-sm font-mono">K</kbd>
                                    </div>
                                    <span className="text-black/90 dark:text-white/80">Edit selection inline</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-2">
                                        <kbd className="px-3 py-1.5 rounded-md bg-black/10 dark:bg-white/10 text-black/70 dark:text-white/70 text-sm font-mono">⌘</kbd>
                                        <kbd className="px-3 py-1.5 rounded-md bg-black/10 dark:bg-white/10 text-black/70 dark:text-white/70 text-sm font-mono">L</kbd>
                                    </div>
                                    <span className="text-black/80 dark:text-white/80">Ask questions</span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                {
                                    title: "Intelligent Search",
                                    description: "Find exactly what you need with AI-powered search"
                                },
                                {
                                    title: "Fine-Tuned Generation",
                                    description: "Generate high-quality code with specialized models"
                                },
                                {
                                    title: "Customizable Prompts",
                                    description: "View and edit the underlying prompts to customize AI behavior"
                                },
                                {
                                    title: "VS Code Compatible",
                                    description: "Use all your favorite themes, extensions, and settings"
                                }
                            ].map((feature) => (
                                <div key={feature.title}
                                    className="p-6 rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]
                    hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-all duration-300">
                                    <h3 className="text-black/90 dark:text-white/90 text-xl font-medium mb-3">{feature.title}</h3>
                                    <p className="text-black/90 dark:text-white/60 leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Model Integration Section */}
                <section className="space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-black/90 dark:text-white/90 text-5xl font-bold tracking-tight">Any LLM, Anywhere</h2>
                        <p className="text-black/50 dark:text-white/50 text-xl max-w-2xl mx-auto">Your models, your choice</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-all duration-300">
                            <h3 className="text-black/90 dark:text-white/90 text-2xl font-medium mb-4">Host Locally</h3>
                            <p className="text-black/60 dark:text-white/60 text-lg leading-relaxed mb-8">
                                Never run out of API credits again. Use Ollama to host quality models locally with complete privacy.
                            </p>
                            <OllamaIcon className="w-8 h-8 text-black/60 dark:text-white/60 hover:text-black/80 dark:hover:text-white/80 transition-colors" />
                        </div>
                        <div className="p-8 rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-all duration-300">
                            <h3 className="text-black/90 dark:text-white/90 text-2xl font-medium mb-4">Cloud Models</h3>
                            <p className="text-black/60 dark:text-white/60 text-lg leading-relaxed mb-8">
                                Connect directly to Claude, GPT, or Gemini. No middleman between you and your preferred AI models.
                            </p>
                            <div className="flex gap-6">
                                <AnthropicIcon className="w-8 h-8 text-black/60 dark:text-white/60 hover:text-black/80 dark:hover:text-white/80 transition-colors" />
                                <OpenAIIcon className="w-8 h-8 text-black/60 dark:text-white/60  hover:text-black/80 dark:hover:text-white/80 transition-colors" />
                                <GeminiIcon className="w-8 h-8 text-black/60 dark:text-white/60  hover:text-black/80 dark:hover:text-white/80 transition-colors" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Download Section */}
                <section className="space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-black/90 dark:text-white/90 text-5xl font-bold tracking-tight">Ready to dive in?</h2>
                        <p className="text-black/50 dark:text-white/50 text-xl max-w-2xl mx-auto">Experience the future of coding today</p>
                    </div>

                    <div className="flex justify-center">
                        <Link
                            href="/download-beta"
                            className="group px-12 py-6 rounded-xl bg-black text-white dark:bg-white/80 dark:text-black font-medium text-xl
                            hover:bg-black/90 dark:hover:bg-white/90 transition-all duration-300 relative overflow-hidden">
                            <span className="relative z-10 flex justify-center items-center gap-3">
                                Download Void Beta
                                {tp.theme === 'light' ? <SparkleOverlay number={35} seed={42} /> : null}
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                    </div>
                </section>

            </div>
        </div>
    );
}