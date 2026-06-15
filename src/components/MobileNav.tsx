import { Drawer, IconButton } from '@pristine-machine/ui'
import { clsx } from 'clsx/lite'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export type NavLink = {
  label: string
  href: string
  active: boolean
}

type MobileNavProps = {
  links: NavLink[]
}

export default function MobileNav({ links }: MobileNavProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <IconButton variant="ghost" label="Open navigation menu" onClick={() => setOpen(true)}>
        <Menu />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)} side="right">
        <div className="flex items-center justify-between border-b border-mauve-200 px-5 py-4 dark:border-mauve-700">
          <span className="font-mono text-xs font-medium tracking-widest text-mauve-600 uppercase dark:text-mauve-400">
            Navigate
          </span>
          <IconButton variant="ghost" label="Close navigation menu" onClick={() => setOpen(false)}>
            <X />
          </IconButton>
        </div>
        <nav className="flex flex-col p-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={clsx(
                'border-l-2 px-4 py-3 font-sans text-sm transition-colors duration-200 hover:duration-0',
                link.active
                  ? 'border-rose-500 bg-mauve-200/60 font-medium text-mauve-900 dark:border-rose-400 dark:bg-mauve-800 dark:text-mauve-100'
                  : 'border-transparent text-mauve-600 hover:bg-mauve-200/40 hover:text-mauve-900 dark:text-mauve-400 dark:hover:bg-mauve-800/60 dark:hover:text-mauve-100'
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Drawer>
    </>
  )
}
