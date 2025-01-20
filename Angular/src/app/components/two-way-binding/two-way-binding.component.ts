import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {
  data:String="";
  CourseFee:number;
  getCourseName(CourseName)
  {
    this.data=CourseName.value;
    console.log(CourseName.value)
  }

}
