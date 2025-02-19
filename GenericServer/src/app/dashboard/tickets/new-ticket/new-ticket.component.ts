import { Component, ElementRef, ViewChild } from '@angular/core';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;  //passing the component/element/template... properties to the 'form' property

  onSubmit(title: string, text: string /*, form:HTMLFormElement*/) {
    // const enteredTitle = titleElement.value;
    // console.log("Entered title: "+enteredTitle);
    console.log(title);
    console.log(text);

    this.form?.nativeElement.reset();
  }
}
