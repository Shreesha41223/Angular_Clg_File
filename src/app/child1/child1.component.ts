import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';
import { MycustompipePipe } from '../mycustompipe.pipe';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [HighlightDirective,CommonModule, MycustompipePipe],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {
  x:number=11;
  clr:string='blue';
  currentdate:Date= new Date()
  clgname:string="mite";
  CgColor(item2:string){
    this.clr=item2;
    console.log(this.clr)
  }

  changeValue(item:any){
    this.x=item;
  }
  checkValue(){
    return (this.x>10)
  }
}
