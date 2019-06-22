import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardDetailsService {

  URL = 'https://api.pokemontcg.io/v1/cards/'

  constructor(private httpClient: HttpClient) {}

  getCardById(card_id: any) : Observable<any> {
      return this.httpClient.get(this.URL + card_id)
        .pipe(
          map( result =>
              result['card']
            )
        )
  }
}
