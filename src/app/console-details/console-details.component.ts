import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Console, consoles } from '../consoles';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-console-details',
  templateUrl: './console-details.component.html',
  styleUrls: ['./console-details.component.css'],
})
export class ConsoleDetailsComponent implements OnInit {
  console: Console | undefined;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const consoleIdFromRoute = Number(routeParams.get('consoleId'));

    this.console = consoles.find(
      (console) => console.id === consoleIdFromRoute
    );
  }

  addToCart(console: Console) {
    this.cartService.addToCart(console);
    window.alert('Your product has been added to the cart');
  }
}
