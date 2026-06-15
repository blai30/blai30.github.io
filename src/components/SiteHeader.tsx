import { Navbar, focusRing } from '@pristine-machine/ui'
import { clsx } from 'clsx/lite'

import MobileNav from '@/components/MobileNav'
import ThemeToggle from '@/components/ThemeToggle'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
]

type Props = {
  pathname: string
}

function isActive(href: string, pathname: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(href + '/')
}

export default function SiteHeader({ pathname }: Props) {
  const navLinks = links.map((link) => ({ ...link, active: isActive(link.href, pathname) }))

  return (
    <Navbar.Root>
      <a href="/" className={clsx('group flex shrink-0 items-center gap-3', focusRing)}>
        <span
          aria-hidden="true"
          className="grid size-9 place-items-center border border-mauve-300 bg-white font-mono text-sm font-medium text-mauve-900 transition-colors duration-200 group-hover:border-rose-400 group-hover:duration-0 dark:border-mauve-600 dark:bg-mauve-800 dark:text-mauve-100"
        >
          BL
        </span>
        <span className="font-serif text-xl leading-none text-mauve-900 dark:text-mauve-100">
          Brian <span className="text-rose-700 italic dark:text-rose-400">Lai</span>
        </span>
      </a>

      <Navbar.Nav className="hidden sm:flex">
        <Navbar.List>
          {navLinks.map((link) => (
            <Navbar.Item key={link.href}>
              <Navbar.Link href={link.href} active={link.active}>
                {link.label}
              </Navbar.Link>
            </Navbar.Item>
          ))}
        </Navbar.List>
      </Navbar.Nav>

      <div className="ml-auto flex shrink-0 items-center gap-1">
        <ThemeToggle />
        <div className="sm:hidden">
          <MobileNav links={navLinks} />
        </div>
      </div>
    </Navbar.Root>
  )
}
