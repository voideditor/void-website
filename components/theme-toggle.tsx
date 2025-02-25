'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from './theme-provider'

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            className="rounded-md p-2 hover:bg-white/5 transition-colors"
        >
            {theme === 'light' ? (
                <Moon className="h-5 w-5 text-gray-800" />
            ) : (
                <Sun className="h-5 w-5 text-white/80" />
            )}
        </button>
    )
}