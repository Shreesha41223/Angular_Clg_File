import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnChanges{

  @Input() colorValue:string="";

  constructor(private ele:ElementRef) { 
    this.ele.nativeElement.style.backgroundColor="";
  }

  ngOnChanges(): void {
    this.ele.nativeElement.style.backgroundColor=this.colorValue;
  }

  private highligh(color:string){
    this.ele.nativeElement.style.backgroundColor=color;
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.highligh('red')
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highligh('green')
  }
}
