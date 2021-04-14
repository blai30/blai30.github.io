import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero[firstName][lastName][avatarUrl][occupation][about]',
  templateUrl: './hero.component.html',
  styles: [],
})
export class HeroComponent {
  @Input() firstName?: string;
  @Input() lastName?: string;
  @Input() avatarUrl?: string;
  @Input() occupation?: string;
  @Input() about?: string;
  @Input() githubUrl?: string;
  @Input() linkedinUrl?: string;
  @Input() resumeUrl?: string;

  constructor() {
  }
}
