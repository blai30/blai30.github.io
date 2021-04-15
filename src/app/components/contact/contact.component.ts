import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact[email]',
  templateUrl: './contact.component.html',
  styles: [],
})
export class ContactComponent {
  @Input() email?: string;
  @Input() description?: string;

  constructor() {
  }
}
