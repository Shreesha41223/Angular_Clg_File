import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { of } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Child1Component,RouterOutlet,RouterLink,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ClgWork_directives';

  apiUrl='https://randomuser.me/api/';
  userData:any=null;
  error:string='';

  constructor(private http:HttpClient){

  }

  fetchUser(){
    this.http.get<any>(this.apiUrl).subscribe({
      next:(response)=>{
        this.userData=response.results[0];
        console.log(this.userData);
        this.error="No error";

      },
      error:(err)=>{
        console.log('errror fetching user', err);
      }
    })
  }

  numbers$:any=of(1,2,3);

  ngOnInit(){
    this.numbers$.subscribe({
      next:(value:number)=>console.log('observable emmited the value:',+value),
      error:(err:any)=>console.log('observable emmited the error:',+err),
      complete:()=>console.log('observable emmited the complete:')
    })

    this.fetchUser();
  }
}
