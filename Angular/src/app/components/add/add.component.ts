import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  region;

  constructor(){}

  ngOnIntit(){
    this.getRegion();

  }

  getRegion(){
 
  }

}
