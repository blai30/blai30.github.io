import { useState } from 'react'
import Link from 'next/link'
import { DarkToggle } from '@/components/shared'
import { useDocumentScrollThrottled } from '@/hooks'

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
      className={`
        ${mounted ? '-translate-y-24' : ''}
        ${docked ? 'shadow-xl backdrop-blur-lg backdrop-filter' : ''}
        fixed z-20 w-full transform-gpu bg-white bg-opacity-60 transition duration-500 ease-out dark:bg-zinc-900 dark:bg-opacity-60 print:hidden`}
    >
      <div className="mx-auto w-auto max-w-screen-md px-4 py-4 md:py-6">
        {/* Navigation links */}
        <nav className="flex items-center justify-between">
          {/* Left */}
          <ul className="items-center space-x-6">
            <li>
              <Link href="/">
                <a className="text-2xl font-bold tracking-wide text-zinc-600 hover:text-rose-600 dark:text-zinc-300 dark:hover:text-rose-500">
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
