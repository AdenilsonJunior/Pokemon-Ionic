import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  URL = ''

  constructor(private httpClient: HttpClient) {
    this.URL = 'https://api.pokemontcg.io/v1/cards?subtype='
  }

  resolve(route: ActivatedRouteSnapshot) {
    let subtype: string
    if (route.paramMap.has('subtype')) {
      subtype = route.paramMap.get('subtype')
    } else {
      subtype = ""
    }
    return this.getCards(subtype)
  }

  getCards(subtype: string): Observable<any> {
    return this.httpClient.get(this.URL + subtype)
      .pipe(
        map(results =>
          results["cards"].map(card => {
            let newCard = {
              id: card.id,
              name: card.name,
              rarity: card.rarity,
              subtype: card.subtype,
              imageUrl: card.imageUrl
            }
            return newCard;
          }
          )
        )
      )
  }
}
