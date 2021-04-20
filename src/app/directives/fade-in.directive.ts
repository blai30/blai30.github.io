import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFadeIn]'
})
export class FadeInDirective {
  constructor(
    private el: ElementRef
  ) {
  }
}
