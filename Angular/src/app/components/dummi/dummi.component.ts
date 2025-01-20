import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { DummiapiService } from 'src/app/services/dummiapi.service';
@Component({
  selector: 'app-dummi',
  templateUrl: './dummi.component.html',
  styleUrls: ['./dummi.component.css']
})
export class DummiComponent implements OnInit {

    //productData:any;
    employee:Employee[];
    tableData:any;

    constructor(private service:DummiapiService, private router:Router)
    {
      
    }

  ngOnInit(){
   //this.Getproduct();
   this.Getselect();
  }

  Getselect()
  {
    this.service.Getselect().subscribe((response)=>{
      //console.log("api called::::::::::",response)
      this.employee= response;
    });
  }

  UpdateEmployee(id:number)
  {
    this.router.navigate(['update',id]);
  }

//   Getproduct()
//   {
//   this.productgetapi.Getproduct().subscribe((response:any) =>{
//     console.log("api called:::::::::",response)
//     this.productData = response;
//   })
// }


DeleteEployee(id:number)
{
    this.service.DeleteEmployee(id).subscribe(data =>{
    this.Getselect();
    })
}
}
