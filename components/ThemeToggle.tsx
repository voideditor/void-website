'use client'

import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('cortexide-theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark)
    setIsDark(shouldBeDark)
    
    // Apply theme to document
    if (shouldBeDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    
    // Update localStorage
    localStorage.setItem('cortexide-theme', newTheme ? 'dark' : 'light')
    
    // Apply theme to document
    if (newTheme) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="group p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun className="size-5 text-yellow-500 group-hover:text-yellow-400 transition-colors" />
      ) : (
        <Moon className="size-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors" />
      )}
    </button>
  )
}
