import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {
  course:any="Angular";
  submitted:boolean=false;

  constructor(private router:Router,private route:ActivatedRoute){} 

  goToAbout(){
    this.router.navigate(['../about',{id:123}],{relativeTo:this.route,fragment:'create'});
  }

  onSubmit(){
    this.submitted=true;
  }
}
