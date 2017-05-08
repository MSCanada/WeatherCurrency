import { Directive ,HostListener } from '@angular/core';

@Directive({
  selector: '[appClickRevealDirective]'
})
export class ClickRevealDirectiveDirective {

  constructor() { }
   @HostListener('click', ['$event.target'])
  reveal(target) {
    target.style['background'] = 'red'; 
  }

  getHeading(){
  return "Hey!";
  }
}
