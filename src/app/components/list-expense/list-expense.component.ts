import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/services/expense.service';
import { Expense } from 'src/app/models/expense';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.component.html',
  styleUrls: ['./list-expense.component.css']
})
export class ListExpenseComponent implements OnInit {
  expense: Expense[] =[];
  constructor(private _expenseService: ExpenseService,
    private router:Router,) { }

  ngOnInit(): void {
  console.log("hello there")
   this.get();
  }
 
  get(){
    this._expenseService.getExpense().subscribe(
      data=>{this.expense=data;
        console.log(data);   
      }
    )
  }
  delete(id:number){
    this._expenseService.delete(id).subscribe(
      data =>{
        this.router.navigateByUrl('/expense');
        location.reload();
      }
    )
  }

}
