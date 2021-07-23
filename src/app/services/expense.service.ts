import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expense } from '../models/expense';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private getUrl="http://localhost:8080/api/v1/expense";
  constructor(private _httpClient:HttpClient) { }
  getExpense(): Observable<Expense[]>{
   return this._httpClient.get<Expense[]>(this.getUrl).pipe(
     map (response =>response)
   )
  }

  saveExpense(expense:Expense):Observable<Expense>{
    return this._httpClient.post<Expense>(this.getUrl,expense);
  }

  getExpense2(id: number):Observable<Expense>{
   
    return this._httpClient.get<Expense>( `${this.getUrl}/${id}`).pipe(
      map (response => response)
    )
  }

  delete(id:number):Observable<any>{
    return this._httpClient.delete(`${this.getUrl}/${id}`, { responseType: 'text' });
  }
}
