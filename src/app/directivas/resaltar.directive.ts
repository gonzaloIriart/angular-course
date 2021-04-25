import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {

  constructor(private el: ElementRef) { }

  @Input('appResaltar') resaltarColor: string;
  @Input() colorBase: string;

  @HostListener('mouseenter') onMouseEnter(){
    this.resaltar(this.resaltarColor || this.colorBase)
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.resaltar(null)
  }

  private resaltar(color:string):void{
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.color = '';
  }
}
