import { Component } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styles: []
})
export class ScrollTopComponent {
  isScrolled(): boolean {
    return document.body.scrollTop > 200 || document.documentElement.scrollTop > 200;
  }

  onScrollTop(): void {
    // For Safari.
    document.body.scrollTop = 0;
    // For Chrome, Firefox, Internet Explorer, and Opera.
    document.documentElement.scrollTop = 0;
  }
}
