import { Component,OnInit } from '@angular/core';
import { Menu } from 'src/app/Models/menu';
import { MenuService } from 'src/app/Services/menu.service'
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomePageComponent implements OnInit {
  restaurants: Menu[] = [];
  number :number = 0;
  constructor(private menuService: MenuService) {}

  ngOnInit() {

    this.menuService.getAllMenu().subscribe((data : Menu[]) => {

      this.restaurants = data;

    });

  }

  addToCheckout(menu: any) {
    
    this.number = this.number +1;
    alert(menu.itemname+' Added to Checkout ');
    this.menuService.addToCheckout(menu);

  }
}
