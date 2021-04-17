import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent implements OnInit {
  mounted = true;
  previousScroll = window.pageYOffset;

  constructor() {
  }

  ngOnInit() {
    window.onscroll = () => {
      const currentScroll = window.pageYOffset;
      this.mounted = this.previousScroll > currentScroll;
      this.previousScroll = currentScroll;
    };
  }
}
