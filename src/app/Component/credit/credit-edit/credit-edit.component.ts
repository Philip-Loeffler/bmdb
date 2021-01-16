import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Model/movie';
import { Actor } from 'src/app/Model/actor';
import { Credit } from 'src/app/Model/credit';
import { CreditService } from 'src/app/service/credit.service';
import { MovieService } from 'src/app/Service/movie.service';
import { ActorService } from 'src/app/Service/actor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-credit-edit',
  templateUrl: './credit-edit.component.html',
  styleUrls: ['./credit-edit.component.css'],
})
export class CreditEditComponent implements OnInit {
  public title: string = 'credit create';
  public credit: Credit = new Credit();
  actors: Actor[] = [];
  movies: Movie[] = [];
  creditId: number = 0;
  constructor(
    private creditSvc: CreditService,
    private actorSvc: ActorService,
    private movieSvc: MovieService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.creditId = params['id']));

    this.creditSvc.getById(this.creditId).subscribe(
      (resp) => {
        this.credit = resp as Credit;
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
        console.log('credit', this.credit);
        this.router.navigateByUrl('/credit-list');
      },
      (err) => {
        console.log(err);
      }
    );
  }

  compActor(a: Actor, b: Actor): boolean {
    return a && b && a.id === b.id;
  }
  compMovies(a: Movie, b: Movie): boolean {
    return a && b && a.id === b.id;
  }
}
