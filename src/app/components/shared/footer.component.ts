import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent {
  today: number = Date.now();

  constructor() { }
}
