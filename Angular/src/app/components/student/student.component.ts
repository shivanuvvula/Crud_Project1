import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  constructor(private _router:Router){

  }
  data=[
    {
      id:1,
      name:"pavan",
      course:"java",
      fee:15000
    },
    {
      id:2,
      name:"tharun",
      course:"java full stock",
      fee:15000
    },
    {
      id:3,
      name:"shashi",
      course:"angular",
      fee:20000
    },
    {
      id:4,
      name:"gagan",
      course:"sql",
      fee:10000
    }
  ]
  details(data)
  {
    console.log(data);
    this._router.navigate(['details',data])
  }

}
