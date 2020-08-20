import { Component, OnInit } from '@angular/core';
import { TableDirectiveComponent } from './../../directive/componentdirective/app.tablecomponent.directive';
@Component({
  selector: 'app-colordirective-component',
  template: `
    <table class="table table-bordered table-striped">
      <tbody>
         <tr>
           <td>
             <input type="radio" name="r" value="red" (click)="selectColor($event)"> Red
           </td>
            <td>
             <input type="radio" name="r" value="yellow" (click)="selectColor($event)"> Yellow
           </td>
            <td>
             <input type="radio" name="r" value="blue" (click)="selectColor($event)"> Blue
           </td>
         </tr>
      </tbody>
    </table>
    <hr/>
    <div class="container" [setColor]="color"> The First Div</div>
    <hr/>
     <div class="container" [setColor]="color"> The Second Div</div>
    <hr/>
     <div class="container" [setColor]="color"> The Third Div</div>
    
  `
})

export class ColorDirectiveComponent implements OnInit {
  color: string;
  constructor() {
    this.color = '';
  }

  selectColor(event): void {
    this.color = event.target.value;
  }

  ngOnInit() { }
}
