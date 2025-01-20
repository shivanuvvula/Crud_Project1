import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { DummiapiService } from 'src/app/services/dummiapi.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{

  id: number;
  employee:Employee=new Employee();
  constructor(private serice:DummiapiService
   ,private routes:ActivatedRoute,private router:Router)
  {

  }
  ngOnInit() {
    this.id= this.routes.snapshot.params['id'];
    this.serice.getEmployeeById(this.id).subscribe(data =>{
      console.log(data);
      this.employee=data;
    })
  }

  onSubmit(){
    return this.serice.UpdateEmployee(this.id,this.employee).subscribe(data=>{
      this.gotoEmployee();
    })
  }

  gotoEmployee(){
    this.router.navigate(['/dummi']);
  }
  }
