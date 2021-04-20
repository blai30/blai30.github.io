import { Component, Input } from '@angular/core';
import { ThemeService } from "../../services";

export interface Skill {
  skillName: string;
  svgPath: string;
  svgPathDark?: string;
  vendorUrl?: string;
}

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styles: [],
})
export class SkillComponent {
  constructor(
    private themeService: ThemeService,
  ) {
  }

  isDark(): boolean {
    return this.themeService.isDark;
  }

  @Input() skill: Skill = {
    skillName: 'Angular',
    svgPath: 'assets/logos/angular.svg',
    svgPathDark: 'assets/logos/unity-black.png',
    vendorUrl: 'https://www.angular.io',
  };
}
