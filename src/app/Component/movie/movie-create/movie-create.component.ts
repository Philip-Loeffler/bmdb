import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Model/movie';
import { MovieService } from 'src/app/Service/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-create',
  templateUrl: '../movie-main-shared/movie-maint.component.html',
  styleUrls: ['./movie-create.component.css'],
})
export class MovieCreateComponent implements OnInit {
  public title: string = 'Movie create';
  public movie: Movie = new Movie();
  submitBtnTitle: string = 'create';
  constructor(private movieSvc: MovieService, private router: Router) {}

  ngOnInit(): void {}

  save() {
    this.movieSvc.create(this.movie).subscribe(
      (resp) => {
        this.movie = resp as Movie;
        console.log('movies', this.movie);
        this.router.navigateByUrl('/movie-list');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
