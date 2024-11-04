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
  
  constructor(private coffeeService: CoffeeService) { }
  
  getCoffeeList(){//: Array<Coffee>{
    //return coffeeData;
    this.coffeeService.getAllCoffees().subscribe(coffees =>{this.coffees = coffees})
  }
  
  ngOnInit() {
//    this.coffees = this.getCoffeeList();
    this.getCoffeeList();
  }

}
