import { useState } from 'react'
import { Switch } from '@headlessui/react'

const DarkToggle = () => {
  const [enabled, setEnabled] = useState(false)

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`
        ${enabled ? 'bg-purple-700' : 'bg-yellow-400'} relative inline-flex items-center h-6 transition-colors ease-in-out duration-200 rounded-full w-11 focus:outline-none
      `}
    >
      <span className="sr-only">Enable dark mode</span>
      <span
        aria-hidden="true"
        className={`
          ${enabled ? 'translate-x-6' : 'translate-x-1'} pointer-events-none inline-block w-4 h-4 transform ring-0 transition-transform ease-in-out duration-200 bg-white rounded-full
        `}
      />
    </Switch>
  )
}

export default DarkToggle
