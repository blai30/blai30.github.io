import { useState } from 'react'
import Link from 'next/link'
import DarkToggle from '@/components/shared/DarkToggle'
import useDocumentScrollThrottled from '@/hooks/useDocumentScrollThrottled'

const Header = () => {
  const [mounted, setMounted] = useState(false)
  const [docked, setDocked] = useState(false)

  const MINIMUM_SCROLL = 50
  const TIMEOUT_DELAY = 20

  useDocumentScrollThrottled(({ currentScrollTop, previousScrollTop }: any) => {
    const isScrolledDown = previousScrollTop < currentScrollTop
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL

    setDocked(currentScrollTop > 2)

    setTimeout(() => {
      setMounted(isScrolledDown && isMinimumScrolled)
    }, TIMEOUT_DELAY)
  })

  return (
    <header
      className={`${mounted ? '-translate-y-24' : ''} ${docked ? 'shadow-xl backdrop-filter backdrop-blur-lg' : ''} fixed z-20 w-full transition duration-500 ease-out transform-gpu bg-opacity-60 dark:bg-opacity-60 bg-white dark:bg-zinc-900`}
    >
      <div className="px-4 mx-auto max-w-screen-md w-auto py-4 md:py-6">
        {/* Navigation links */}
        <nav className="flex items-center justify-between">
          {/* Left */}
          <ul className="items-center space-x-6">
            <li>
              <Link href="/">
                <a className="font-bold text-2xl tracking-wide text-zinc-600 dark:text-zinc-300 hover:text-rose-600 dark:hover:text-rose-500">
                  BRIAN LAI
                </a>
              </Link>
            </li>
          </ul>
          {/* Right side */}
          <ul className="inline-flex items-center space-x-2">
            <li>
              <DarkToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
