import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {
  title = 'Brian Lai';

  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) {
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    // this.metaService.addTags([
    //   {
    //     name: 'title',
    //     content: 'Brian Lai title',
    //   },
    //   {
    //     property: 'og:title',
    //     content: 'Brian Lai og:title',
    //   },
    //   {
    //     name: 'description',
    //     content: 'description',
    //   },
    //   {
    //     property: 'og:description',
    //     content: 'og:description',
    //   },
    //   {
    //     property: 'og:type',
    //     content: 'website',
    //   },
    //   {
    //     property: 'og:url',
    //     content: 'https://www.bhlai.com/',
    //   },
    //   {
    //     property: 'og:image',
    //     content: 'assets/favicon.png',
    //   },
    //   {
    //     name: 'theme-color',
    //     content: '#E11D48',
    //   },
    //   {
    //     name: 'twitter:card',
    //     content: 'summary_large_image',
    //   },
    // ]);
  }
}
