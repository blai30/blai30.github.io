import { Component, Input } from '@angular/core';

export interface Project {
  title: string,
  description: string,
  githubUrl?: string,
  thumbnailPath: string,
  tags?: string[],
  readMoreRoute?: string,
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styles: [
  ]
})
export class ProjectComponent {
  @Input() project: Project = {
    title: 'Raspberry Pi self-driving car',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, eligendi, ullam! A debitis enim fugit impedit incidunt, ipsum nobis nulla numquam odit perspiciatis quam qui quo ratione reiciendis sit voluptatem!',
    githubUrl: 'https://www.github.com/blai30/text-morph/',
    thumbnailPath: 'assets/images/projects/bomberman.png',
    tags: ['C#', '.NET', 'MySQL'],
    readMoreRoute: 'projects/bomberman',
  };
}
