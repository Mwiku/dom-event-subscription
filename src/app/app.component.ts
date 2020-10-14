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
  rightClickObservable: Observable<any> = fromEvent(document, 'auxclick');
  mouseOverObservable: Observable<any> = fromEvent(document, 'mouseover');
  wheelObservable: Observable<any> = fromEvent(document, 'wheel');

  private subscribeToObservable() {
    this.mouseOverObservable.subscribe(() => console.log(`Mouse over event!`));
    this.wheelObservable.subscribe(() => console.log(`Mouse wheel event!`));
    this.rightClickObservable.subscribe(() => console.log(`Right click event!`));
    this.clickObservable.subscribe(()=> console.log(` Mouse click event!`))
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
