import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
@Injectable({
  providedIn: 'root'
})
export class DummiapiService {

  public  select="http://localhost:8080/"


  constructor(private httpClient:HttpClient) {

   }

   public Getselect():Observable<any>
   {
    return this.httpClient.get(this.select);
   }

   public CreateEmployee(employee:Employee):Observable<any>
   {
      return this.httpClient.post(this.select,employee);
   }

   public getEmployeeById(id:number): Observable<any>
   {
      return this.httpClient.get<any>(this.select+id);
   }

   public UpdateEmployee(id: number,employee:Employee):Observable<any>
   {
      return this.httpClient.put(this.select+id,employee);
   }

   public DeleteEmployee(id:number):Observable<Employee>
   {
      return this.httpClient.delete<Employee>(this.select+id);
   }
}

