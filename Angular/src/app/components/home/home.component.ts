import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Uservalid } from 'src/app/uservalid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

Uservalid=new Uservalid("pavan","pavan@gmail","student","male","java",true);

  submitdata(formData)
  {
    console.log(formData.value);
  }
}
