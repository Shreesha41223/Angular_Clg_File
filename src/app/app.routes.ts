import { Routes } from '@angular/router';
import { NewComponentComponent } from './new-component/new-component.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeeComponent } from './employee/employee.component';
import { RoleinformationComponent } from './roleinformation/roleinformation.component';

export const routes: Routes = [
    {path:'newcomponent', component:NewComponentComponent},
    {path:'about', component:AboutComponent},
    {path:'contact', component:ContactComponent},
    {path:'employee', component:EmployeeComponent,
    children:[
        {path:"role",component:RoleinformationComponent}  //nested
    ]
},
    {path:'', redirectTo:'/AppCompnent',pathMatch:'full'}
];
