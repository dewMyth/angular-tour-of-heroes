import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/Hero';
import { HEROES } from '../../mocks/hero-mocks';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES; 
  constructor() { }

  ngOnInit(): void {
  }

  selectedHero : Hero;
  
  onSelect(hero : Hero) : void {
    this.selectedHero = hero;
  }

}
