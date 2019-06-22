import { Component, OnInit } from '@angular/core';
import { CardsService } from './cards.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {

  cards: any[]

  constructor(private service: CardsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.data['special']) {
      this.cards = this.route.snapshot.data['special'];
    }
  }

  seePokemonDetails(id: string) {
    let extras: NavigationExtras = {
      state: {
        card_id: id
      }
    }
    this.router.navigate(['cards/card-details/' + id], extras)
  }
}
