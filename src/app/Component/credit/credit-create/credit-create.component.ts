import { Component, OnInit } from '@angular/core';
import { Credit } from '../../../Model/credit';
import { CreditService } from '../../../service/credit.service';
import { Router } from '@angular/router';
import { Actor } from '../../../Model/actor';
import { Movie } from '../../../Model/movie';
import { ActorService } from 'src/app/Service/actor.service';
import { MovieService } from 'src/app/Service/movie.service';

@Component({
  selector: 'app-credit-create',
  templateUrl: './credit-create.component.html',
  styleUrls: ['./credit-create.component.css'],
})
export class CreditCreateComponent implements OnInit {
  public title: string = 'credit edit';
  public credit: Credit = new Credit();
  submitBtnTitle: string = 'create';
  actors: Actor[] = [];
  movies: Movie[] = [];
  constructor(
    private creditSvc: CreditService,
    private actorSvc: ActorService,
    private movieSvc: MovieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.actorSvc.getAll().subscribe(
      (resp) => {
        this.actors = resp as Actor[];
      },
      (err) => {
        console.log(err);
      }
    );
    this.movieSvc.getAll().subscribe(
      (resp) => {
        this.movies = resp as Movie[];
      },
      (err) => {
        console.log(err);
      }
    );
  }

  save() {
    this.creditSvc.create(this.credit).subscribe(
      (resp) => {
        this.credit = resp as Credit;
        console.log('movies', this.credit);
        this.router.navigateByUrl('/movie-list');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
