import { Navbar } from '@pristine-machine/ui'
import ThemeToggle from '@/components/ThemeToggle'
import MobileNav from '@/components/MobileNav'

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
  return (
    <Navbar.Root>
      <a
        href="/"
        className="group flex shrink-0 items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/30 dark:focus-visible:ring-rose-400/25"
      >
        <span
          aria-hidden="true"
          className="grid size-9 place-items-center border border-mauve-300 bg-white font-mono text-sm font-medium text-mauve-900 transition-colors duration-200 group-hover:border-rose-400 group-hover:duration-0 dark:border-mauve-600 dark:bg-mauve-800 dark:text-mauve-100"
        >
          BL
        </span>
        <span className="font-serif text-xl leading-none text-mauve-900 dark:text-mauve-100">
          Brian <span className="italic text-rose-700 dark:text-rose-400">Lai</span>
        </span>
      </a>

      <Navbar.Nav className="hidden sm:flex">
        <Navbar.List>
          {links.map((link) => (
            <Navbar.Item key={link.href}>
              <Navbar.Link href={link.href} active={isActive(link.href, pathname)}>
                {link.label}
              </Navbar.Link>
            </Navbar.Item>
          ))}
        </Navbar.List>
      </Navbar.Nav>

      <div className="ml-auto flex shrink-0 items-center gap-1">
        <ThemeToggle />
        <div className="sm:hidden">
          <MobileNav links={links} current={pathname} />
        </div>
      </div>
    </Navbar.Root>
  )
}
