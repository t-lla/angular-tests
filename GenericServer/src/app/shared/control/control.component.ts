import { AfterContentInit, afterNextRender, afterRender, Component, contentChild, ContentChild, ElementRef, HostBinding, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control'
  }  
})
export class ControlComponent implements AfterContentInit{
  // @HostBinding('class') className = 'control';
  label = input.required<string>();

  //@ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor() {
    afterRender(() => {
      console.log('afterRender') //logs all future changes
    });

    afterNextRender(() => {
      console.log('afterNextRender') //will only trigger after every NEXT change
    });
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit');
    console.log(this.control);
  }

}
