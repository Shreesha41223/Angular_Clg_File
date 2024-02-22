import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [RouterModule],  //RouterModule includes RouterLink,RouterOutlet(Maybe!)
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

}
