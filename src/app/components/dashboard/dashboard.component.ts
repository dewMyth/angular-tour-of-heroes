import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from '../../models/Hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 topHeroes: Hero[] = [];

  constructor(private heroService : HeroService) { }

  ngOnInit(): void {
     this.getTopHeroes();
  }

  getTopHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => {
      this.topHeroes = heroes.slice(1,5);
    })
  }
}
