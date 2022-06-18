import { Directive, ElementRef } from '@angular/core';


@Directive({
  selector: '[appAppHighlight]'
})
export class AppHighlightDirective {

  constructor(private eleRef: ElementRef) { 
    eleRef.nativeElement.style.background = 'red';

  }

}
