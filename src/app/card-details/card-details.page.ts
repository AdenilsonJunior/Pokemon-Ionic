import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardDetailsService } from './card-details.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.page.html',
  styleUrls: ['./card-details.page.scss'],
})
export class CardDetailsPage implements OnInit {

  card_id: any
  card = {
    name: 'Loading...',
    supertype: 'Loading...',
    set: 'Loading...',
    rarity: 'Loading...',
    attacks: []

  }

  constructor(private router: Router, private serivce: CardDetailsService) {
    this.card_id = this.router.getCurrentNavigation().extras.state.card_id
  }

  ngOnInit() {
    this.serivce.getCardById(this.card_id).subscribe(card =>
      this.card = card,
      error =>
        this.router.navigate(['cards'])
    )
  }
}
