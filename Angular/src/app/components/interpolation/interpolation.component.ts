import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
  name :String="coading hub";//string variable
  age:number=20;

  //object creation
  emp={
    name:"pavan",
    age:20,gender:"male"
  }
   
 //function call
  getNamee()
  {
    return this.name;
  }

  //array creation
  emp1=[
    {
      name:"pavan",age:20
    },
    {
      name:"kalyan",age:30
    }
  ]

}
