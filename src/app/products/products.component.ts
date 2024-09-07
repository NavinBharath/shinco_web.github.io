import { Component, OnInit, Renderer2 } from '@angular/core';
const categories = require('./category.json');
const products = require('./products.json');
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private renderer: Renderer2){}

categoryList = [{
  "name":"Lathe and CNC VTL",
  "description": "this is a Lathe and CNC VTL category",
  "imageUrl": "../assets/machines/General CNC/22.jpg"
}];
title:string='What are you looking for?';
productsList = [{
  "name":"Lathe and CNC VTL",
  "description": "this is a Lathe and CNC VTL category",
  "imageUrl": "../assets/machines/General CNC/22.jpg"
}];
activeButton: HTMLElement | null = null;
showProducts:boolean = false;
ngOnInit(): void {
  this.categoryList = categories;
   this.productsList = products;
  console.log('this is categoris...........',this.categoryList)
}
 selectedItem(item:any){
  console.log('item is................',item)
  if(this.title === "Category"){
    this.title = "What are you looking for?";
  }else{
    this.title = "What are you looking for?";
  }
 }

 changeItems(data:any,event: Event){
  console.log('this is cat....',data)
  this.showProducts = true;
  const clickedButton = event.target as HTMLElement;
  if(this.activeButton){
    this.renderer.removeClass(this.activeButton, 'active')
  }
  this.renderer.addClass(clickedButton,'active');
  this.activeButton = clickedButton;
 }


}
