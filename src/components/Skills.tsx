import Skill, { SkillData } from "@/components/Skill";

const Skills = () => {
  const skills: SkillData[][] = [
    [
      {
        skillName: 'C#',
        svgPath: '/logos/csharp-original.svg',
        vendorUrl: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
      },
      {
        skillName: 'Java',
        svgPath: '/logos/java-icon.svg',
        vendorUrl: 'https://www.java.com/',
      },
      {
        skillName: 'TypeScript',
        svgPath: '/logos/typescript-original.svg',
        vendorUrl: 'https://www.typescriptlang.org/',
      },
      {
        skillName: 'JavaScript',
        svgPath: '/logos/javascript-original.svg',
        vendorUrl: 'https://www.javascript.com/',
      },
      {
        skillName: 'Python',
        svgPath: '/logos/python-icon.svg',
        vendorUrl: 'https://www.python.org/',
      },
      {
        skillName: 'C++',
        svgPath: '/logos/cplusplus-original.svg',
        vendorUrl: 'https://www.cplusplus.com/',
      },
    ],
    [
      {
        skillName: '.NET',
        svgPath: '/logos/dotnet.svg',
        vendorUrl: 'https://dotnet.microsoft.com/',
      },
      {
        skillName: 'Angular',
        svgPath: '/logos/angular.svg',
        vendorUrl: 'https://www.angular.io/',
      },
      {
        skillName: 'React',
        svgPath: '/logos/react-original.svg',
        vendorUrl: 'https://reactjs.org/',
      },
      {
        skillName: 'NodeJS',
        svgPath: '/logos/nodejs-original.svg',
        vendorUrl: 'https://nodejs.org/',
      },
      {
        skillName: 'Blazor',
        svgPath: '/logos/Blazor.png',
        vendorUrl: 'https://blazor.net/',
      },
      {
        skillName: 'MySQL',
        svgPath: '/logos/mysql.png',
        vendorUrl: 'https://www.mysql.com/',
      },
    ],
    [
      {
        skillName: 'Unity',
        svgPath: '/logos/unity-white.png',
        svgPathDark: '/logos/unity-black.png',
        vendorUrl: 'https://unity.com/',
      },
      {
        skillName: 'Tailwind CSS',
        svgPath: '/logos/tailwindcss.svg',
        vendorUrl: 'https://tailwindcss.com/',
      },
      {
        skillName: 'Bootstrap',
        svgPath: '/logos/bootstrap-logo.svg',
        vendorUrl: 'https://getbootstrap.com/',
      },
      {
        skillName: 'Docker',
        svgPath: '/logos/docker.png',
        vendorUrl: 'https://www.docker.com/',
      },
      {
        skillName: 'Amazon Web Services',
        svgPath: '/logos/aws.svg',
        svgPathDark: '/logos/aws-dark.svg',
        vendorUrl: 'https://www.docker.com/',
      },
      {
        skillName: 'Google Cloud Platform',
        svgPath: '/logos/google-cloud.svg',
        vendorUrl: 'https://www.docker.com/',
      },
      {
        skillName: 'Figma',
        svgPath: '/logos/figma.svg',
        vendorUrl: 'https://www.figma.com/',
      },
      {
        skillName: 'Sketch',
        svgPath: '/logos/sketch.png',
        vendorUrl: 'https://www.sketch.com/',
      },
    ],
  ]

  return (
    <div className="mx-auto prose prose-pink md:prose-lg dark:prose-dark">
      <h2>Skills</h2>
      <p>
        I enjoy learning and using new tools and technologies every day. Below
        is a collection of what I am most familiar with when building projects.
      </p>
      <h3>Programming Languages</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills[0].map((skill, index) => (
          <Skill
            key={index}
            id={index}
            skillName={skill.skillName}
            svgPath={skill.svgPath}
            svgPathDark={skill.svgPathDark}
            vendorUrl={skill.vendorUrl}
          />
        ))}
      </div>
      <h3>Technologies</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills[1].map((skill, index) => (
          <Skill
            key={index}
            id={index + 100}
            skillName={skill.skillName}
            svgPath={skill.svgPath}
            svgPathDark={skill.svgPathDark}
            vendorUrl={skill.vendorUrl}
          />
        ))}
      </div>
      <h3>Tooling</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills[2].map((skill, index) => (
          <Skill
            key={index}
            id={index + 200}
            skillName={skill.skillName}
            svgPath={skill.svgPath}
            svgPathDark={skill.svgPathDark}
            vendorUrl={skill.vendorUrl}
          />
        ))}
      </div>
      <p className="font-light text-sm text-gray-600 dark:text-gray-400">
        * I am not affiliated with the logos featured, all logos are registered
        trademarks of their respective owners.
      </p>
    </div>
  )
}

export default Skills
