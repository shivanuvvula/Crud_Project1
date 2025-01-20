import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

name:string="pavan";
color="red";
bgcolor="blue";
onClick()
{
  this.color="black";
  this.bgcolor="yellow";
}


College:String="vbit";
colr1="green";

}
