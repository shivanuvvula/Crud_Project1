import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { DummiapiService } from 'src/app/services/dummiapi.service';

@Component({
  selector: 'app-mobiles-insert',
  templateUrl: './mobiles-insert.component.html',
  styleUrls: ['./mobiles-insert.component.css']
})
export class MobilesInsertComponent implements OnInit{
  
  employee:Employee=new Employee();
  constructor( private service:DummiapiService,private router:Router){

  }
  ngOnInit(): void {
   
  }
  saveEmployee()
  {
    this.service.CreateEmployee(this.employee).subscribe(data =>{
      console.log(data);
      this.gotoEmployee();

    },
    error => console.log(error)) 
  }

  gotoEmployee(){
    this.router.navigate(['/dummi']);
  }

  onSubmit()
  {
    console.log(this.employee)
    this.saveEmployee();
  }

}
