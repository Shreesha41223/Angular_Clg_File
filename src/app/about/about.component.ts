import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private route:ActivatedRoute)
  {
    this.route.params.subscribe(params=>{
      console.log("params",params)
    })

    this.route.fragment.subscribe(params=>{
      console.log("fragment",params)
    })


  }
  aboutUsForm=new FormGroup({
    company:new FormControl('',Validators.required),
    address:new FormControl('')
  })

  onSubmit(){
    console.log(this.aboutUsForm.value);
  }

  updateProfile(){
    this.aboutUsForm.patchValue({company:"MITE1"})
    // this.aboutUsForm.setValue({company:"MITE1",address:"Mangalore"})
  }
}
