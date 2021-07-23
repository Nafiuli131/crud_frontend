import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/services/expense.service';
import { Expense } from 'src/app/models/expense';
import { Router, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
  expense: Expense =new Expense();
  constructor(private _expenseService:ExpenseService,
    private router:Router,
    private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const isIdPresent = this.activeRoute.snapshot.paramMap.has('id');
    if(isIdPresent){
      const id = +this.activeRoute.snapshot.paramMap.get('id');
      this._expenseService.getExpense2(id).subscribe(
        data => {this.expense=data;
          console.log(data);
        }
      )
    }
  }
  saveExpense(){
    this._expenseService.saveExpense(this.expense).subscribe(
      data =>{
        this.router.navigateByUrl("/expense");
        console.log(data);
        location.reload();
      }
    )
  }

}
