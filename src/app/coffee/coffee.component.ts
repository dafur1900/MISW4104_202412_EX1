import { Component, OnInit } from '@angular/core';
import { Coffee } from './coffee';
import { coffeeData } from './coffeeData';
import { CoffeeService } from "./coffee.service";

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  imgSrc = "../assets/images/coffee_beans.png"
  
  coffees: Array<Coffee> = [];
  totOrig: number = 0;
  totBlnd: number = 0;
  
  constructor(private coffeeService: CoffeeService) { }
  
  getCoffeeList(){//: Array<Coffee>{
    //return coffeeData;
    this.coffeeService.getAllCoffees().subscribe(coffees =>{this.coffees = coffees})
  }

  countBlendType() {
    //Tipo Blend
    this.totBlnd = this.coffees.filter(coffee => coffee.tipo == "Blend").length;
    return this.totBlnd;
  }

  countOrigenType() {
    //Tipo Café de Origen
    this.totOrig =  this.coffees.filter(coffee => coffee.tipo == "Café de Origen").length;
    return this.totOrig;
  }
  

  ngOnInit() {
//    this.coffees = this.getCoffeeList();
    this.getCoffeeList();
    console.log(this.countBlendType()); 
  }

}
