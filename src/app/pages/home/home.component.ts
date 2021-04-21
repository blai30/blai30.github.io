import { Component, OnInit } from '@angular/core';
import { Meta, MetaDefinition, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  title = 'Brian Lai';

  metaTags: MetaDefinition[] = [
    {
      name: 'title',
      content: 'Brian Lai',
    },
    {
      property: 'og:title',
      content: 'Brian Lai',
    },
    {
      name: 'description',
      content: 'Software Engineer, Full-stack Web Developer, and Unity hobbyist from San Francisco Bay Area, CA.',
    },
    {
      property: 'og:description',
      content: 'Software Engineer, Full-stack Web Developer, and Unity hobbyist from San Francisco Bay Area, CA.',
    },
  ];

  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) {
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    for (const metaTag of this.metaTags) {
      this.metaService.updateTag(metaTag);
    }
  }
}
