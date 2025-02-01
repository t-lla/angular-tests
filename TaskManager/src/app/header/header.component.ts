import { Component } from '@angular/core'; 

@Component({
    selector: 'app-header',
    standalone: true, //Angular19+ is set true by default
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
})
export class HeaderComponent {}