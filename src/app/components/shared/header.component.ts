import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent {
  mounted = true;
  docked = true;
  previousScroll = window.pageYOffset;

  @HostListener('window:scroll', ['$event'])
  autoHide(event: Event): void {
    const currentScroll = window.pageYOffset;
    this.mounted = currentScroll < this.previousScroll || currentScroll <= 50;
    this.docked = currentScroll <= 50;
    this.previousScroll = currentScroll;
  }
}
