import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../../models/Hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[]; 
  constructor(private heroService : HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() : void {
   this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  selectedHero : Hero;
  
  onSelect(hero : Hero) : void {
    this.selectedHero = hero;
  }

}
