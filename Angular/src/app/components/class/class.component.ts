import { Component } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent {
  public myTxt='textColor';

  //myGroup is object
  public myGroup={
    textSize:true,  //textSize is key
    textColor:true
  }

  public isRequired:boolean=false;
}

