import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export interface SkillData {
  skillName: string
  logoPath: string
  logoPathDark?: string
  vendorUrl?: string
}

const Skill = (props: SkillData & { id: number }) => {
  const { systemTheme, theme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  const [mounted, setMounted] = useState(false)

  // Delay display until mounted to client, this will ensure initial state.
  useEffect(() => setMounted(true), [])
  if (!mounted) {
    return null
  }

  return (
    <a
      id={`skill-${props.id}-url`}
      href={props.vendorUrl}
      className="block no-underline shadow-md transition-shadow ease-in-out hover:shadow-xl print:shadow-none"
    >
      <div className="bg-zinc-200 p-2 transition ease-in-out hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700">
        <div className="relative flex h-28 flex-col items-center md:h-32">
          <span id={`skill-${props.id}-name`} className="text-center">
            {props.skillName}
          </span>
          <img
            id={`skill-${props.id}-image`}
            src={
              currentTheme === 'dark' && props.logoPathDark
                ? props.logoPathDark
                : props.logoPath
            }
            alt="logo"
            className="my-auto max-h-16 w-16 md:max-h-20 md:w-20 object-fill"
          />
        </div>
      </div>
    </a>
  )
}

export default Skill
