import { Skill, SkillData } from '@/components'

const Skills = () => {
  const skills: SkillData[][] = [
    [
      {
        skillName: 'C#',
        logoPath: '/logos/csharp-original.svg',
        vendorUrl: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
      },
      {
        skillName: 'Java',
        logoPath: '/logos/java-icon.svg',
        vendorUrl: 'https://www.java.com/',
      },
      {
        skillName: 'TypeScript',
        logoPath: '/logos/typescript-original.svg',
        vendorUrl: 'https://www.typescriptlang.org/',
      },
      {
        skillName: 'JavaScript',
        logoPath: '/logos/javascript-original.svg',
        vendorUrl: 'https://www.javascript.com/',
      },
      {
        skillName: 'Python',
        logoPath: '/logos/python-icon.svg',
        vendorUrl: 'https://www.python.org/',
      },
      {
        skillName: 'C++',
        logoPath: '/logos/cplusplus-original.svg',
        vendorUrl: 'https://www.cplusplus.com/',
      },
    ],
    [
      {
        skillName: '.NET',
        logoPath: '/logos/dotnet.svg',
        vendorUrl: 'https://dotnet.microsoft.com/',
      },
      {
        skillName: 'Angular',
        logoPath: '/logos/angular.svg',
        vendorUrl: 'https://www.angular.io/',
      },
      {
        skillName: 'React',
        logoPath: '/logos/react-original.svg',
        vendorUrl: 'https://reactjs.org/',
      },
      {
        skillName: 'NodeJS',
        logoPath: '/logos/nodejs-original.svg',
        vendorUrl: 'https://nodejs.org/',
      },
      {
        skillName: 'Blazor',
        logoPath: '/logos/Blazor.png',
        vendorUrl: 'https://blazor.net/',
      },
      {
        skillName: 'MySQL',
        logoPath: '/logos/mysql.png',
        vendorUrl: 'https://www.mysql.com/',
      },
    ],
    [
      {
        skillName: 'Unity',
        logoPath: '/logos/unity-white.png',
        logoPathDark: '/logos/unity-black.png',
        vendorUrl: 'https://unity.com/',
      },
      {
        skillName: 'Tailwind CSS',
        logoPath: '/logos/tailwindcss.svg',
        vendorUrl: 'https://tailwindcss.com/',
      },
      {
        skillName: 'Bootstrap',
        logoPath: '/logos/bootstrap-logo.svg',
        vendorUrl: 'https://getbootstrap.com/',
      },
      {
        skillName: 'Docker',
        logoPath: '/logos/docker.png',
        vendorUrl: 'https://www.docker.com/',
      },
      {
        skillName: 'Amazon Web Services',
        logoPath: '/logos/aws.svg',
        logoPathDark: '/logos/aws-dark.svg',
        vendorUrl: 'https://www.docker.com/',
      },
      {
        skillName: 'Google Cloud Platform',
        logoPath: '/logos/google-cloud.svg',
        vendorUrl: 'https://www.docker.com/',
      },
      {
        skillName: 'Figma',
        logoPath: '/logos/figma.svg',
        vendorUrl: 'https://www.figma.com/',
      },
      {
        skillName: 'Sketch',
        logoPath: '/logos/sketch.png',
        vendorUrl: 'https://www.sketch.com/',
      },
    ],
  ]

  return (
    <div className="prose prose-zinc prose-rose mx-auto hover:prose-a:text-rose-700 dark:prose-invert dark:prose-a:text-rose-400 hover:dark:prose-a:text-rose-300 print:dark:prose-zinc print:dark:prose-a:text-rose-600 print:dark:hover:prose-a:text-rose-700 md:prose-lg">
      <h2>Skills</h2>
      <p>
        I enjoy learning and using new tools and technologies every day. Below
        is a collection of what I am most familiar with when building projects.
      </p>
      <h3>Programming Languages</h3>
      <div className="grid grid-cols-2 gap-4 print:grid-cols-3 sm:grid-cols-3">
        {skills[0].map((skill, index) => (
          <Skill
            key={index}
            id={index}
            skillName={skill.skillName}
            logoPath={skill.logoPath}
            logoPathDark={skill.logoPathDark}
            vendorUrl={skill.vendorUrl}
          />
        ))}
      </div>
      <h3>Technologies</h3>
      <div className="grid grid-cols-2 gap-4 print:grid-cols-3 sm:grid-cols-3">
        {skills[1].map((skill, index) => (
          <Skill
            key={index}
            id={index + 100}
            skillName={skill.skillName}
            logoPath={skill.logoPath}
            logoPathDark={skill.logoPathDark}
            vendorUrl={skill.vendorUrl}
          />
        ))}
      </div>
      <h3>Tooling</h3>
      <div className="grid grid-cols-2 gap-4 print:grid-cols-3 sm:grid-cols-3">
        {skills[2].map((skill, index) => (
          <Skill
            key={index}
            id={index + 200}
            skillName={skill.skillName}
            logoPath={skill.logoPath}
            logoPathDark={skill.logoPathDark}
            vendorUrl={skill.vendorUrl}
          />
        ))}
      </div>
      <p className="text-sm font-light text-zinc-600 dark:text-zinc-400">
        * I am not affiliated with the logos featured, all logos are registered
        trademarks of their respective owners.
      </p>
    </div>
  )
}

export default Skills
