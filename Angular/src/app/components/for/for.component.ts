import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent {
  public emp=[
    {
      id:1,
      name:"pavan",
      age:20
    },
    {
      id:2,
      name:"shashi",
      age:22
    },
    {
      id:3,
      name:"tharun",
      age:21
    }
  ]

}
