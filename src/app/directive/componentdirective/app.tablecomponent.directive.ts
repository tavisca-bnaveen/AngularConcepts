import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {HttpService} from './../../services/app.httpservvice.service';
@Component({
  selector: 'app-tabledirective-component',
  templateUrl: './app.tablecomponent.view.html'
})

export class TableDirectiveComponent implements OnInit {
  private dataSource: Array<any>;
  headers: Array<string>;
  private isDelete: Boolean;
  
  @Output() // EventEmitter<T>, cass used to emit event with payload parameter as T
  notify: EventEmitter<any>;
  @Output() 
  deleterow:EventEmitter<any>;
  constructor(private http:HttpService) {
    this.dataSource = new Array<any>();
    this.headers = new Array<string>();
    this.notify = new EventEmitter<any>();
    this.deleterow=new EventEmitter<any>();
    this.isDelete=false
  }

  ngOnInit():void { }

  // parent will be able to use datasourve property for
  // property binding
  @Input()
  set DataSource(val: Array<any>) {
    if (val.length > 0) {
      this.dataSource = val;
      // generate headers from the first record of the array
      for (const p of Object.keys(this.dataSource[0])) {
        this.headers.push(p);
      }
    } else {
      this.dataSource = new Array<any>();
    }
  }
  get DataSource(): Array<any> {
    return this.dataSource;
  }

  rowClick(rec: any): void {
    // the emit will pass the data to parent
    // parent must subscribe to the event using
    // event binding and  read data
    this.notify.emit(rec);
  }
  
  @Input()
  set IsDelete(val: Boolean) {
    this.isDelete=val;
  }
  get IsDelete(): Boolean {
    return this.isDelete;
  }

  deleteRow(rec:any):void{
    console.log(`hey from child ${rec}`);
    
    this.http.deleteProduct(rec);
  }
}
