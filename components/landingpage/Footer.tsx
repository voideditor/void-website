'use client'

import Image from "next/image"
import Link from "next/link"
import { Github, Twitter } from "lucide-react"
import { discordLink } from "../links";
import { useState } from "react";
import { logWaitlist } from "./landingpage_logging";

export function Footer() {

    const [email, setEmail] = useState<string>("")

    return (
        <footer className="border-t border-primary bg-white dark:bg-black dark:text-white">
            <div className="max-w-6xl mx-auto px-4 py-24">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-6 gap-16">
                    {/* Brand and Newsletter - Takes 2 columns */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-primary font-bold text-2xl tracking-tight">void</h3>
                            <p className="text-foreground/60 text-sm leading-relaxed max-w-sm">
                                The open source AI code editor that puts you in control. Built for developers, by developers.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-foreground/80 font-medium">Stay updated</h4>
                            <div className="flex gap-2 max-w-sm">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="flex-1 bg-foreground/5 border border-primary rounded-lg px-4 py-2 text-sm text-foreground/90
                                    placeholder:text-foreground/30 focus:outline-none focus:ring-1 focus:ring-foreground/20
                                    hover:bg-foreground/[0.07] transition-colors"
                                />
                                <button onClick={async () => {
                                    await logWaitlist(email)
                                    setEmail('') // Clear the input after submission
                                }} className="px-4 py-2 bg-foreground text-background rounded-lg text-sm font-medium
                                    hover:bg-foreground/90 transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Links - Takes 3 columns */}
                    <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Product */}
                        <div className="space-y-6">
                            <h4 className="text-white/90 font-medium">Product</h4>
                            <ul className="space-y-3">
                                {[
                                    ['Waitlist', '/waitlist'],
                                    ['Documentation', '/docs'],
                                    ['Contribute', '/contribute'],
                                    ['Roadmap', '/roadmap'],
                                ].map(([title, href]) => (
                                    <li key={title}>
                                        <Link href={href}
                                            className="text-black/60 dark:text-white/60 hover:text-black/90 dark:hover:text-white/90 transition-colors text-sm">
                                            {title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company */}
                        <div className="space-y-6">
                            <h4 className="text-black/90 dark:text-white/90 font-medium">Company</h4>
                            <ul className="space-y-3">
                                {[
                                    ['About', '/about'],
                                    ['Blog', '/blog'],
                                    ['Contact', '/contact'],
                                    ['Privacy', '/privacy'],
                                ].map(([title, href]) => (
                                    <li key={title}>
                                        <Link href={href}
                                            className="text-black/60 dark:text-white/60 hover:text-black/90 dark:hover:text-white/90 transition-colors text-sm">
                                            {title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Community */}
                        <div className="space-y-6">
                            <h4 className="text-white/90 font-medium">Community</h4>
                            <ul className="space-y-3">
                                {[
                                    ['GitHub', 'https://github.com/voideditor/void'],
                                    ['Discord', 'https://discord.gg/void'],
                                    ['Twitter', 'https://twitter.com/void'],
                                ].map(([title, href]) => (
                                    <li key={title}>
                                        <Link href={href}
                                            className="text-white/60 hover:text-white/90 transition-colors text-sm">
                                            {title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Social Links - Takes 1 column */}
                    <div className="lg:col-span-1 space-y-6">
                        <h4 className="text-foreground/90 font-medium">Connect</h4>
                        <div className="flex gap-4">
                            <Link href="https://github.com/voideditor/void"
                                className="text-foreground/60 hover:text-foreground/90 transition-colors p-2 hover:bg-foreground/5 rounded-lg">
                                <Github className="w-5 h-5" />
                            </Link>
                            <Link href="https://twitter.com/void"
                                className="text-foreground/60 hover:text-foreground/90 transition-colors p-2 hover:bg-foreground/5 rounded-lg">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href={discordLink}
                                className="text-foreground/60 hover:text-foreground/90 transition-colors p-2 hover:bg-foreground/5 rounded-lg">
                                DC
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-primary flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-foreground/40 text-sm">
                        © {new Date().getFullYear()} Void. All rights reserved.
                    </p>
                    <div className="flex items-center gap-3">
                        <span className="text-foreground/40 text-sm">Backed by</span>
                        <Image
                            src="/yc.svg"
                            alt="Y Combinator"
                            width={40}
                            height={40}
                            className="opacity-40 hover:opacity-60 transition-opacity"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}
