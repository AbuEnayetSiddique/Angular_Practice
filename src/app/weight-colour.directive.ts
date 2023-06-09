import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appWeightColour]'
})
export class WeightColourDirective implements OnChanges {
  @Input('weightColour')
  weight!: number;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    if (this.weight > 9000) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'orange');
    } else {
      this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'green');
    }
  }

}
