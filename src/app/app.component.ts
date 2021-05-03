import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {
  title = 'Brian Lai';

  constructor(
    private titleService: Title,
  ) {
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }
}
