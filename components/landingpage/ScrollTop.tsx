'use client'

import { useEffect, useState } from 'react'

export default function ScrollTop() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setShow(window.scrollY > 300)
        }
        onScroll()
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    if (!show) return null

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className='fixed bottom-6 right-6 z-40 h-10 w-10 rounded-full bg-black text-white shadow-lg transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black/20 dark:bg-white dark:text-black'
            aria-label='Scroll to top'
        >
            ↑
        </button>
    )
}
