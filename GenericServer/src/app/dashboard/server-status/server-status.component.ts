import { Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit /*, OnDestroy*/ {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  //private interval?: NodeJS.Timeout;
  private destroyRef = inject(DestroyRef);

  constructor() { 
    effect(() => {
      console.log(this.currentStatus());
    })
  }

  ngOnInit() { //runs once after Angular has initialized all the component's inputs.
    //this.interval = setInterval(() => {
    const interval = setInterval(() => {

      const rnd = Math.random();

      if(rnd < 0.5){
        this.currentStatus.set('online');
      } else if(rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    })
  }

//   ngOnDestroy() {
//     clearTimeout(this.interval); //clearing the interval for when it is eventually removed, even though not yet
//   }
  }
