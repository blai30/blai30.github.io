import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent implements OnInit {
  @Input() brand = 'BRAND';
  showHeader = true;
  prevScrollpos = window.pageYOffset;

  constructor() {
  }

  ngOnInit() {
    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;
      this.showHeader = this.prevScrollpos > currentScrollPos;
      this.prevScrollpos = currentScrollPos;
    };
  }
}
