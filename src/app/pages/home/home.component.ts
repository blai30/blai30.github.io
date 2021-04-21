import { Component, OnInit } from '@angular/core';
import { Meta, MetaDefinition } from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  metaTags: MetaDefinition[] = [
    {
      property: 'og:title',
      content: 'Brian Lai',
    },
    {
      property: 'og:description',
      content: 'Software Engineer, Full-stack Web Developer, and Unity hobbyist from San Francisco Bay Area, CA.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://www.bhlai.com/',
    },
    {
      property: 'og:image',
      content: 'assets/favicon.png',
    },
    {
      name: 'theme-color',
      content: '#E11D48',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
  ];

  constructor(
    private metaService: Meta,
  ) {
  }

  ngOnInit(): void {
    this.metaService.addTags(this.metaTags);
  }
}
