import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubtypesService {

  URL = 'https://api.pokemontcg.io/v1/subtypes'

  constructor(private httpClient: HttpClient) { }

  getSubtypes() : Observable<any>{
      return this.httpClient.get(this.URL)
            .pipe(
              map(result => result['subtypes'])
            )
  }
}
