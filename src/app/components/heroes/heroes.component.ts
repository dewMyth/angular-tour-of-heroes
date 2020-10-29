import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from 'src/app/services/message.service';
import { Hero } from '../../models/Hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[]; 


  constructor(private heroService : HeroService, private messageService : MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() : void {
   this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }


  
  onSelect(hero : Hero) : void {

    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

}
