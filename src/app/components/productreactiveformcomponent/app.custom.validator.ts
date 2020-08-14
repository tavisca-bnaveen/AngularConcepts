import {AbstractControl} from '@angular/forms';
import {Product} from './../../model/app.product.model';
import {Logic} from './../../model/logic';
export class CustomValidator {

 
  // if the data is valid then the method returns null
  // else for invalid value the method return  JSON object e.g.
  // {even:false} or {odd:true}
  static CheckEven(control: AbstractControl): any {
     // tslint:disable-next-line: radix
     const value = parseInt (control.value);
     if (value % 2 === 0) {
       return null; // valid
     } else {
        return {even : false}; // invalid
     }
  }
  static CheckBlankSpace(control: AbstractControl): any {
    const value = control.value;
    if(value.toString().trim()=="")
      return { Blank : false }
    return null;
  }
  static Checkduplicate(control: AbstractControl): any {
    const value = control.value;
    let products: Array<Product>;
    let logic: Logic;
    products = new Array<Product>();
    logic = new Logic();
    products  =  logic.getProducts();
    if(value.toString().trim()=="" || value.toString().includes(" "))
    return {Duplicate: false}
    for(let i=0;i<products.length;i++){
      if(value==products[i].ProductId)
        return {Duplicate: false}

    }
    return null;
  }
}
