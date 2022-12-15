import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products = [
 
    {name : "Apple", type : "iphone", model : "iPhone 14 pro", price : 129900.00, image :"assets/iPhone14.png" },
    {name : "Apple", type : "iphone", model : "iPhone 14", price : 79900.00, image :"assets/iphone.png" },
    {name : "Apple", type : "iphone",  model : "iPhone 13", price : 69900.00, image :"assets/iphone13.webp" },
    {name : "Apple", type : "iphone", model : "iPhone 13 mini", price : 64900.00, image :"assets/iphone13p.png" },
   
    
    {name : "Apple", type : "ipad", model : "iPad pro", price : 81900.00, image :"assets/ipadp.png" },
    {name : "Apple", type : "ipad", model : "iPad", price : 44900.00, image :"assets/ipad.png" },
    {name : "Apple", type : "ipad", model : "iPad Air", price : 59900.00, image :"assets/ipada.png" },
    

    {name : "Apple", type : "mac", model : "Mac Book pro", price : 129900.00, image :"assets/macb.png" },
    {name : "Apple", type : "mac", model : "MacBook Air", price : 99900.00, image :"assets/macbp.png" },
    
  
    {name : "Apple", type : "watch", model : "Apple Watch Series", price : 45900.00, image :"assets/watc.png" },
    {name : "Apple", type : "watch", model : "Apple Watch SE", price : 29900.00, image :"assets/watc1.png" },
    {name : "Apple", type : "watch", model : "Apple Watch Ultra", price : 89900.00, image :"assets/watc2.png" },
    
    ]

    getAllItems(){
      return this.products.length;
    }

    getTotalIphone(){
      return  this.products.filter(product => product.type === "iphone").length;
    }

    getTotalIpad(){
      return  this.products.filter(product => product.type === "ipad").length;
    }

    getTotalMac(){
      return  this.products.filter(product => product.type === "mac").length;
    }

    getTotalWatch(){
      return  this.products.filter(product => product.type === "watch").length;
    }
    
    productCountRadioButton : string = "All";
    searchText : string = "";

    onFilterRadioButtonChanged(data:string){
      this.productCountRadioButton = data;


    }

    onserachTextEntered(searchvalue:string){
      this.searchText = searchvalue;
    }
    details(){
    alert("");
    }
    
    buy(){
      alert("Added to cart")
    }

    
    }
    
    