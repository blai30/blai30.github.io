import { Switch } from '@headlessui/react'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const DarkToggle = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  const [mounted, setMounted] = useState(false)

  // Delay display until mounted to client, this will ensure initial state.
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <Switch
      id="dark-toggle"
      checked={currentTheme === 'light'}
      onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className={`${
        currentTheme === 'dark' ? 'bg-gray-200' : 'bg-gray-700'
      } relative inline-flex items-center h-6 transition ease-in-out duration-200 rounded-full w-11 focus:outline-none`}
    >
      <span className="sr-only">Enable dark mode</span>
      <span
        aria-hidden="true"
        className={`${
          currentTheme === 'dark'
            ? 'translate-x-6 bg-gray-700'
            : 'translate-x-1 bg-gray-200'
        } pointer-events-none inline-block w-4 h-4 transform ring-0 transition ease-in-out duration-200 bg-white rounded-full`}
      />
    </Switch>
  )
}

export default DarkToggle
