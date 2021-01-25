import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Model/movie';
import { MovieService } from 'src/app/Service/movie.service';
import { SystemService } from 'src/app/Service/system.service';
import { User } from 'src/app/Model/user';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  public title: string = 'Movie List';
  public movies: Movie[] = [];
  user: User = new User();
  sortCriteria: string = 'id';
  sortOrder: string = 'asc';
  colClasses = 'btn btn-link font-weight-bold';

  constructor(private movieSvc: MovieService, private sysSvc: SystemService) {}

  ngOnInit(): void {
    console.log('loggedinUser', this.sysSvc.loggedInUser);
    this.movieSvc.getAll().subscribe(
      (resp) => {
        this.movies = resp as Movie[];
        this.sysSvc.loggedInUser = this.user;
        console.log('movies', this.movies);
      },
      (err) => {
        console.log(err);
      }
    );
    //populate list of movies
  }

  sortBy(column: string): void {
    console.log('movie list sortBy called');
    if (column == this.sortCriteria) {
      this.sortOrder = this.sortOrder == 'desc' ? 'asc' : 'desc';
    }
    this.sortCriteria = column;
  }
}
