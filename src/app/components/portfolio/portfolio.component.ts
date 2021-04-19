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
      description: 'Discord bot written in C# using the Discord.Net library with .NET 5 and MySQL database. Various utility and fun commands are available for users to manage reaction roles, query RESTful APIs, play music, and more.',
      githubUrl: 'https://www.github.com/blai30/AsukaNet/',
      thumbnailPath: 'assets/images/projects/asuka.png',
      tags: ['C#', '.NET', 'MySQL', 'Docker'],
      readMoreRoute: 'projects/AsukaNet',
    },
    {
      title: 'Text Morph',
      description: 'Web app allowing users to transform text, built with Angular and styled with Tailwind CSS. Ability to manipulate letter casing, trim whitespace, insert clap emojis between words, convert numbers to spelled-out words, and more.',
      githubUrl: 'https://www.github.com/blai30/text-morph/',
      thumbnailPath: 'assets/images/projects/textmorph.png',
      tags: ['Angular', 'TypeScript', 'Tailwind CSS'],
      readMoreRoute: 'projects/text-morph',
    },
    {
      title: 'Infection FPS',
      description: 'Multiplayer first-person shooter game created in Unity C# with Mirror Networking. Matches are round-based and allow up to 8 players with weapons located around the map for players to wield.',
      githubUrl: 'https://www.github.com/blai30/infection/',
      thumbnailPath: 'assets/images/projects/infection.png',
      tags: ['Unity', 'C#'],
      readMoreRoute: 'projects/Infection',
    },
    {
      title: 'Raspberry Pi robot car',
      description: 'Autonomous self-driving robot car powered by motors and sensors on a Raspberry Pi written in C. The car navigates an obstacle course by following a black line and avoiding nearby objects.',
      githubUrl: 'https://www.github.com/blai30/CSC615AutonomousCar/',
      thumbnailPath: 'assets/images/projects/picar.png',
      tags: ['C', 'Raspberry Pi'],
      readMoreRoute: 'projects/PiCar',
    },
    {
      title: 'Mecha Fighter VR',
      description: 'Multiplayer Virtual Reality fighting game created in Unity C# using SteamVR SDK. Networking server code written in Java. Perform special attacks with a gesture detection system.',
      githubUrl: 'https://www.github.com/blai30/Mecha-Fighter-VR/',
      thumbnailPath: 'assets/images/projects/mecha.png',
      tags: ['Unity', 'C#', 'Java'],
      readMoreRoute: 'projects/Mecha-Fighter-VR',
    },
    {
      title: 'RPG Core Combat Sandbox',
      description: 'Top-down click to move and attack combat system for an RPG game created in Unity C#.',
      githubUrl: 'https://www.github.com/blai30/RPG-Core-Combat/',
      thumbnailPath: 'assets/images/projects/rpg.png',
      tags: ['Unity', 'C#'],
      readMoreRoute: 'projects/RPG-Core-Combat',
    },
    {
      title: 'BaySpace - Image posting',
      description: 'Full-stack web application built with NodeJS, Express, Bootstrap, and MySQL deployed on AWS. Includes user registration and authentication, search and filters, and responsive interface.',
      githubUrl: 'https://www.github.com/blai30/BaySpace/',
      thumbnailPath: 'assets/images/projects/bayspace.png',
      tags: ['NodeJS', 'JavaScript', 'MySQL', 'AWS'],
      readMoreRoute: 'projects/BaySpace',
    },
    {
      title: 'Bomberman Java',
      description: 'Four player bomberman game written in Java. Features include variable explosion range algorithm, randomly generated tile-based maps with support for pre-defined custom maps, custom collision detection, and more.',
      githubUrl: 'https://www.github.com/blai30/bomberman-java/',
      thumbnailPath: 'assets/images/projects/bomberman.png',
      tags: ['Java'],
      readMoreRoute: 'projects/Bomberman',
    },
    {
      title: 'Tank Game Java',
      description: 'Two player tank game written in Java. Includes custom collision detection implementing the Visitor design pattern, powerups, destructible walls, custom maps, UI, and more.',
      githubUrl: 'https://www.github.com/blai30/tankgame-java/',
      thumbnailPath: 'assets/images/projects/tankgame.png',
      tags: ['Java'],
      readMoreRoute: 'projects/TankGame',
    },
  ];
}
