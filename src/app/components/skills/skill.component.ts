import { Component, Input } from '@angular/core';

export interface Skill {
  skillName: string;
  svgPath: string;
  vendorUrl?: string;
}

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styles: [],
})
export class SkillComponent {
  @Input() skill: Skill = {
    skillName: 'Angular',
    svgPath: 'assets/logos/angular.logos',
    vendorUrl: 'https://www.angular.io',
  };
}
