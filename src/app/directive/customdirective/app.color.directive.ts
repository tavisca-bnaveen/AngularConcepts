import {Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';
// custom attribute directive with a syntax of property binding
// e.g. <div [setColor]="'red'"></div>
@Directive({
  selector: '[setColor]'
})
export class ColorDirective {
  // these will be resolved by the BrowserModule
  constructor(private ele: ElementRef, private renderer: Renderer2) { }

  // the input decorator map withe selector of the directive
  // and the value passed to the directive will be accepted
  // by setColor property
  @Input('setColor')
  setColor: string;

  // business logic method
  private applyColor(color: string): void {
    this.renderer.setStyle(this.ele.nativeElement,
       'backgroundColor', color);
  }

  // event host methods those will be invoked when events are raised
  @HostListener('mouseenter')
  mouseenter(): void {
    this.applyColor(this.setColor || 'cyan');
  }

  @HostListener('mouseleave')
  mouseleave(): void {
     this.applyColor(null);
  }
}
