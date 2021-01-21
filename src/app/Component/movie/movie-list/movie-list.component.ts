import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Model/movie';
import { MovieService } from 'src/app/Service/movie.service';
import { SystemService } from 'src/app/Service/system.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  public title: string = 'Movie List';
  public movies: Movie[] = [];

  constructor(private movieSvc: MovieService, private sysSvc: SystemService) {}

  ngOnInit(): void {
    console.log('loggedinUser', this.sysSvc.loggedInUser);
    this.movieSvc.getAll().subscribe(
      (resp) => {
        this.movies = resp as Movie[];
        console.log('movies', this.movies);
      },
      (err) => {
        console.log(err);
      }
    );
    //populate list of movies
  }
}
