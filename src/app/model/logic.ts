import {Product} from './app.product.model';

import { HttpService } from './../services/app.httpservvice.service';
export class Logic{
    private products: Array<Product>;

    constructor(private http:HttpService){
        this.products = new Array<Product>();
        
    }


    getProducts(): Array<Product> {
        this.products.push(new Product(1, 'Prd001', 'Laptop', 'Electronics', 'HP', 'Gaming', 120000));
        // this.products.push(new Product(2, 'Prd002', 'Iron', 'Electrical', 'Bajaj', 'Cotton Friendly', 3000));
        // this.products.push(new Product(3, 'Prd003', 'Biscuts', 'Food', 'Parle', 'Glucose', 10));
        console.log("hi from getproducts");
        
        this.http.getdatas().then((d) =>{
            console.log(`this is output${JSON.stringify(d)}`)
            //this.products.push(d[0]);
            for(let i=0;i<d.length;i++)
                this.products.push(d[i]);
            return this.products;
        });
        console.log(`this is product ${JSON.stringify(this.products)}`)
        return this.products;
    }

    addProduct(prd: Product): Array<Product> {

        //this.products.push(prd);
        this.http.postData(prd).subscribe((data)=>{
            return this.products.push(data);
        });
        return this.products;
    }
    delProduct(prd:Product): Array<Product>{
        
        this.http.deleteData(prd.ProductRowId).subscribe((data)=>{
            let index=this.products.findIndex(obj => obj.ProductId===data.ProductId)
            this.products.splice(index,1);
            return this.products;
        })
        
        return this.products;
    }
}

