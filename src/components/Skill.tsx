import { useTheme } from 'next-themes'
import { useEffect, useState } from "react";

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
      className="block no-underline transition-shadow ease-in-out shadow-md hover:shadow-xl"
    >
      <div className="p-2 transition ease-in-out bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 dark:text-pink-400 dark:hover:text-pink-300">
        <div className="flex flex-col h-28 md:h-32 items-center">
          <span id={`skill-${props.id}-name`} className="text-center">
            {props.skillName}
          </span>
          <img
            id={`skill-${props.id}-image`}
            src={currentTheme === 'dark' && props.logoPathDark ? props.logoPathDark : props.logoPath}
            alt="logo"
            className="my-auto w-16 md:w-20 max-h-16 md:max-h-20"
            width={128}
            height={128}
          />
        </div>
      </div>
    </a>
  )
}

export default Skill
