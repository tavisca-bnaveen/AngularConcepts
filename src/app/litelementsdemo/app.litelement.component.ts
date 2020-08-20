import { Component, OnInit } from '@angular/core';

class MyClass {
  constructor(
    public id: number,
    public name: string
  ){}
}

@Component({
  selector: 'app-litelement-component',
  templateUrl: './app.litelement.view.html'
})

export class ListElementComponent implements OnInit {
  message: string;
  receivedValue: string;
  myvalue: string;
  listData: Array<string>;
  obj: MyClass;
  objData: Array<MyClass>;
  constructor() {
    this.message = '';
    this.receivedValue = '';
    this.myvalue = '';
    this.listData = new Array<string>();
    this.listData.push('P');
    this.listData.push('Q');
    this.obj = new MyClass(0 , '');
    this.objData = new Array<MyClass>();

  }

  onChildClick(event): void {
     this.receivedValue = event.detail.data;
  }

  clear():void{
    this.obj = new MyClass(0 , '');
  }
updateMessage(): void {
  this.myvalue = 'I am from Parent';
  this.listData.push('R');
  this.objData.push(this.obj);
  // set the LitElement programmatically
  let litElement = document.querySelector('simple-element');
 // litElement.setValue(this.objData);
}

  ngOnInit() { }
}
