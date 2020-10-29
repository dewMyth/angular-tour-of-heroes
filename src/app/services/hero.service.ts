import { Injectable } from '@angular/core';
import { Hero } from '../models/Hero';
import { HEROES } from '../mocks/hero-mocks';
import { Observable ,of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes() : Observable<Hero[]> {
    return of(HEROES);
  }

}
