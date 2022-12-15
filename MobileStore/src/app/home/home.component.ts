import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


mobs = [
{name : "Apple", model : "iPhone 14 pro", price : 129900.00, image :"assets/iPhone14.png" },
{name : "Apple", model : "iPhone 14", price : 79900.00, image :"assets/iphone.png" },
{name : "Apple", model : "iPhone 13", price : 69900.00, image :"assets/iphone13.webp" },
{name : "Apple", model : "iPhone 13 mini", price : 64900.00, image :"assets/iphone13p.png" },
]
ipads = [
{name : "Apple", model : "iPad pro", price : 81900.00, image :"assets/ipadp.png" },
{name : "Apple", model : "iPad", price : 44900.00, image :"assets/ipad.png" },
{name : "Apple", model : "iPad Air", price : 59900.00, image :"assets/ipada.png" },
]
macs = [
{name : "Apple", model : "Mac Book pro", price : 129900.00, image :"assets/macb.png" },
{name : "Apple", model : "MacBook Air", price : 99900.00, image :"assets/macbp.png" },
]
watchs = [
{name : "Apple", model : "Apple Watch Series", price : 45900.00, image :"assets/watc.png" },
{name : "Apple", model : "Apple Watch SE", price : 29900.00, image :"assets/watc1.png" },
{name : "Apple", model : "Apple Watch Ultra", price : 89900.00, image :"assets/watc2.png" },


]

details(){
alert("sadfasdasdasdasdasd");
}


}

