import { Component, OnInit, OnChanges, OnDestroy, Input, AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-lifecycleparent-component',
  template: `
    <h2>The Parent Component</h2>
    <input type="text" [(ngModel)]="parentValue"/>
    <br/>
    <input type="button" value="show/hide" (click)="toggle()"/>
    <hr/>
    <div *ngIf="isDisplay">
    <app-lifecyclechild-component [value]="parentValue"></app-lifecyclechild-component>
    </div>
`
})

export class LifecycleParentComponent implements OnInit {
  parentValue: string;
  isDisplay: boolean;
  constructor() {
    this.parentValue = '';
    this.isDisplay = true;
  }

  toggle(): void {
    if(this.isDisplay) {
      this.isDisplay = false;
    } else {
      this.isDisplay = true;
    }
  }
  ngOnInit() { }
}

@Component({
  selector: 'app-lifecyclechild-component',
  template: `
     <h5>The Child Component</h5>
     <div>{{value}}</div>
     <hr/>
     <div>Mouse Position x = {{x}}: y = {{y}}</div>
  `
})
export class LifecycleChildComponent implements OnInit, OnChanges, OnDestroy {
  @Input() value: string;
  x: number;
  y: number;
  constructor(){
    this.value = '';
    console.log('Constructor Called');
    this.x = 0;
    this.y = 0;
    window.addEventListener('mousemove', this.detectMousePosition);
  }
  detectMousePosition =(evt)=> {
    this.x = evt.clientX;
    this.y = evt.clientY;
  }
  ngOnInit(): void {
    console.log('ng on init Called');
  }
  ngOnChanges(): void {
    console.log('ng on changes Called');
  }
  // ngAfterContentInit() {
  //   console.log("ngAfterContentInit");
  // }

  // ngAfterContentChecked() {
  //   console.log("ngAfterContentChecked");
  // }

  // ngAfterViewInit() {
  //   console.log("ngAfterViewInit");
  // }

  // ngAfterViewChecked() {
  //   console.log("ngAfterViewChecked");
  // }
  ngOnDestroy(): void {
    console.log('ng destroy Called');
    window.removeEventListener('mousemovde', this.detectMousePosition);
  }
}
