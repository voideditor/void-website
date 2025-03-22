'use client';

import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "../theme-toggle";
import { useTheme } from "../theme-provider";
import { contributeLink, waitlistLink } from "../links";

export default function Navbar() {

    const { theme } = useTheme();

    return (
        <div className="flex justify-center items-center relative z-50">
            <nav className="bg-neutral-200/70 dark:bg-gray-950/70 backdrop-blur-lg w-11/12 h-16 rounded-2xl fixed top-6 
                border border-gray-200/20 dark:border-white/5 
                shadow-lg shadow-gray-200/20 dark:shadow-black/20">
                <div className="flex items-center justify-between h-full px-8">
                    {/* Logo section */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 
                                dark:from-indigo-400/30 dark:to-purple-400/20 blur-xl rounded-full
                                group-hover:blur-2xl group-hover:from-indigo-500/30 group-hover:to-purple-500/30 
                                dark:group-hover:from-indigo-400/40 dark:group-hover:to-purple-400/30
                                transition-all duration-500 ease-out">
                            </div>
                            <Image
                                width={64}
                                height={64}
                                src={theme === 'light' ? '/void/slice_of_void.png' : '/void/slice_of_void_light.png'}
                                alt="Void logo"
                                className="w-11 h-11 relative z-[1] transition-all duration-500 ease-out
                                group-hover:scale-110 group-hover:rotate-[12deg] group-hover:brightness-110"
                            />
                        </div>
                        <h4 className="text-gray-900 dark:text-white font-bold text-xl tracking-tight">Void</h4>
                    </Link>

                    {/* Center section */}
                    <div className="flex-1 flex justify-center gap-2">
                        <Link href={waitlistLink} className="text-gray-700 dark:text-gray-200 font-medium px-5 py-2 
                            rounded-xl hover:bg-gray-100/70 dark:hover:bg-white/10 
                            transition-all duration-300 hover:text-gray-900 dark:hover:text-white">
                            Waitlist
                        </Link>
                        <Link href={contributeLink} className="text-gray-700 dark:text-gray-200 font-medium px-5 py-2 
                            rounded-xl hover:bg-gray-100/70 dark:hover:bg-white/10 
                            transition-all duration-300 hover:text-gray-900 dark:hover:text-white">
                            Contribute
                        </Link>
                    </div>

                    {/* Right navigation */}
                    <ul className="flex items-center gap-8">
                        <li>
                            <ThemeToggle />
                        </li>
                        <li>
                            <a href="#contact" className="text-gray-700 dark:text-gray-200 font-medium 
                                hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}