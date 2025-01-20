import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
  // registrationForm=new FormGroup({
  //   Username:new FormControl(),
  //   Password: new FormControl(),
  //   conformpassword:new FormControl(),
  //   adress:new FormGroup({
  //     City:new FormControl(),
  //     State:new FormControl(),
  //     pincode:new FormControl(),
  //   })


  // })  //first approach
  constructor(private _formBuilder:FormBuilder)
  {

  }
  registrationForm =this._formBuilder.group({
    Username:['Codinghub',[Validators.required,Validators.minLength(3)]],
    Password: new FormControl(),
    conformpassword:[],
    address:this._formBuilder.group({
      City:[],
      State:[],
      pincode:[]
  })
})

displayData(){
  this.registrationForm.setValue({
    Username:"pavan",
    Password:"abc@123",
    conformpassword:"abc@123",
    address:({
      City:"hyderabad",
      State:"telangana",
      pincode:500078,
})
  })
}

get username(){
  return this.registrationForm.get('Username');
}
}
