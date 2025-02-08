import { Component, EventEmitter, Output } from '@angular/core';
import { type CalculateInvestment } from './user-input.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  @Output() calculate = new EventEmitter<CalculateInvestment>();

  enteredInitialInvestment = 0;
  enteredAnnualInvestment = 0;
  enteredExpectedReturn = 0;
  enteredDuration = 0;


  onSubmit(){
    this.calculate.emit({
      initialInvestment: this.enteredInitialInvestment,
      annualInvestment: this. enteredAnnualInvestment,
      expectedReturn: this.enteredExpectedReturn,
      duration: this.enteredDuration,
    });
  }
}
