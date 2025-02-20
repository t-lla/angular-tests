import { AfterViewInit, Component, ElementRef, OnInit, viewChild, ViewChild } from '@angular/core';
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
export class NewTicketComponent implements OnInit, AfterViewInit{
  //@ViewChild('form') form?: ElementRef<HTMLFormElement>;  //passing the component/element/template(#form)... properties to the 'form' property
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form') //gives a signal

  ngOnInit() {
    console.log('on init');
    console.log(this.form().nativeElement); 
  }

  ngAfterViewInit() {
    console.log('after view init');
    console.log(this.form().nativeElement);
  }

  onSubmit(title: string, text: string /*, form:HTMLFormElement*/) {
    // const enteredTitle = titleElement.value;
    // console.log("Entered title: "+enteredTitle);
    console.log(title);
    console.log(text);

    this.form()?.nativeElement.reset();
  }
}
