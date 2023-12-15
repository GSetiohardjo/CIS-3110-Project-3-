import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Game, games } from '../games';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css'],
})
export class GameDetailsComponent implements OnInit {
  game: Game | undefined;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const gameIdFromRoute = Number(routeParams.get('gameId'));

    this.game = games.find(
      (game) => game.id === gameIdFromRoute
      );
  }

  addToCart(game: Game) {
    this.cartService.addToCart(game);
    window.alert('Your product has been added to the cart');
  }
}
