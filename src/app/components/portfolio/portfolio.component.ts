import { Component } from '@angular/core';
import { Project } from "./project.component";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styles: [],
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      title: 'Asuka.Net Discord bot',
      description: 'Discord bot written in C# using the Discord.Net library and dependency injection with .NET 5, Entity Framework Core with MySQL database, and Docker for build and deployment. Various utility and fun commands are available for users to manage reaction roles, fetch Urban Dictionary definitions, play music, and more.',
      externalUrl: 'https://discord.com/api/oauth2/authorize?client_id=547507928287019009&permissions=1580330096&scope=bot',
      githubUrl: 'https://github.com/blai30/AsukaNet/',
      thumbnailPath: 'assets/images/projects/asuka.png',
      tags: ['C#', '.NET', 'MySQL', 'Docker'],
      // readMoreRoute: 'projects/AsukaNet',
    },
    {
      title: 'Text Morph',
      description: 'Web app allowing users to transform text, built with Angular and styled with Tailwind CSS. Ability to manipulate letter casing, trim whitespace, insert clap emojis between words, convert numbers to spelled-out words, and more.',
      externalUrl: 'https://www.bhlai.com/text-morph/',
      githubUrl: 'https://github.com/blai30/text-morph/',
      thumbnailPath: 'assets/images/projects/textmorph.png',
      tags: ['Angular', 'TypeScript', 'Tailwind CSS'],
      // readMoreRoute: 'projects/text-morph',
    },
    {
      title: 'Infection FPS',
      description: 'Multiplayer first-person shooter game created in Unity C# with Mirror Networking. Matches are round-based and allow up to 8 players with weapons located around the map for players to wield. Includes custom shaders, particle VFX, and 3D audio with FMOD. Developed by a team of 8.',
      externalUrl: 'https://www.dropbox.com/s/md98b1ah87g5hab/infection%20build%201.5.zip',
      githubUrl: 'https://github.com/blai30/infection/',
      thumbnailPath: 'assets/images/projects/infection.png',
      tags: ['Unity', 'C#'],
      // readMoreRoute: 'projects/Infection',
    },
    {
      title: 'Raspberry Pi robot car',
      description: 'Autonomous self-driving robot car powered by motors and sensors on a Raspberry Pi written in C. The car navigates an obstacle course by following a black line and avoiding nearby objects using its sensors. Developed by a team of 4.',
      githubUrl: 'https://github.com/blai30/CSC615AutonomousCar/',
      thumbnailPath: 'assets/images/projects/picar.png',
      tags: ['C', 'Raspberry Pi'],
      // readMoreRoute: 'projects/PiCar',
    },
    {
      title: 'Mecha Fighter VR',
      description: 'Multiplayer Virtual Reality fighting game created in Unity C# using SteamVR SDK. Networking server code written in Java. Perform special attacks with a gesture motion detection system. Developed by a team of 5.',
      githubUrl: 'https://github.com/blai30/Mecha-Fighter-VR/',
      thumbnailPath: 'assets/images/projects/mecha.png',
      tags: ['Unity', 'C#', 'Java'],
      // readMoreRoute: 'projects/Mecha-Fighter-VR',
    },
    {
      title: 'RPG Core Combat Sandbox',
      description: 'Top-down click to move and attack combat system for a 3D RPG game created in Unity C#. Utilizes the Universal Render Pipeline to create custom shaders for water, animation controller for 3D character animations, particle system for spell VFX, and terrain tools to sculpt terrain.',
      externalUrl: 'assets/works/RPG-Core-Combat/',
      githubUrl: 'https://github.com/blai30/RPG-Core-Combat/',
      thumbnailPath: 'assets/images/projects/rpg.png',
      tags: ['Unity', 'C#'],
      // readMoreRoute: 'projects/RPG-Core-Combat',
    },
    {
      title: 'BaySpace - Image posting',
      description: 'Full-stack web application built with NodeJS, Express, Bootstrap, and MySQL deployed on AWS. Includes user registration and authentication, search and filters, and responsive interface. Developed by a team of 8.',
      githubUrl: 'https://github.com/blai30/BaySpace/',
      thumbnailPath: 'assets/images/projects/bayspace.png',
      tags: ['NodeJS', 'JavaScript', 'MySQL', 'AWS'],
      // readMoreRoute: 'projects/BaySpace',
    },
    {
      title: 'Bomberman Java',
      description: 'Four player bomberman game written in Java with Java Swing and built with Maven. Features include variable explosion range algorithm, randomly generated tile-based maps with support for pre-defined custom maps, collision detection, sprite animations, and more.',
      externalUrl: 'https://github.com/blai30/bomberman-java/releases',
      githubUrl: 'https://github.com/blai30/bomberman-java/',
      thumbnailPath: 'assets/images/projects/bomberman.png',
      tags: ['Java', 'Maven'],
      // readMoreRoute: 'projects/Bomberman',
    },
    {
      title: 'Tank Game Java',
      description: 'Two player tank game written in Java with Java Swing and built with Maven. Includes collision detection implementing the Visitor design pattern, custom maps, powerups, destructible walls, custom maps, UI, sprite animations, and more.',
      externalUrl: 'https://github.com/blai30/tankgame-java/releases',
      githubUrl: 'https://github.com/blai30/tankgame-java/',
      thumbnailPath: 'assets/images/projects/tankgame.png',
      tags: ['Java', 'Maven'],
      // readMoreRoute: 'projects/TankGame',
    },
  ];
}
