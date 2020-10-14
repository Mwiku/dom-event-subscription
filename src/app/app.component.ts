import { Component, OnInit } from '@angular/core';

import {fromEvent, Observable, from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dom-event-subscription';

  clickObservable: Observable<any> = fromEvent(document, 'click');
  auxClickObservable: Observable<any> = fromEvent(document, 'auxclick');
  mouseOverObservable: Observable<any> = fromEvent(document, 'mouseover');
  scrollObservable: Observable<any> = fromEvent(document, 'scroll');
  touchMoveObservable: Observable<any> = fromEvent(document, 'touchmove');
  wheelObservable: Observable<any> = fromEvent(document, 'wheel');

  private subscribeToObservable() {
    this.scrollObservable.subscribe(() => console.log(`subscribe: scroll event !`));
    this.touchMoveObservable.subscribe(() => console.log(`subscribe: touch move event !`));
    this.mouseOverObservable.subscribe(() => console.log(`subscribe: mouse hover!`));
    this.wheelObservable.subscribe(() => console.log(`subscribe: wheel event!`));
    this.auxClickObservable.subscribe(() => console.log(`subscribe: aux click event!`));
    this.clickObservable.subscribe(()=> console.log(`subscribed: mouse clicked!`))
  }

  public searchInput: string;
    public programmingLanguages = [
      'Python','TypeScript','C','C++','Java',
      'Go','JavaScript','PHP','Ruby','Swift','Kotlin'
   ]

  ngOnInit() {
    this.subscribeToObservable();
  }

}
