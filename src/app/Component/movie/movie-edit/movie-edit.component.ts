import { Component, OnInit } from "@angular/core";
import { Movie } from "src/app/Model/movie";
import { MovieService } from "src/app/Service/movie.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-movie-edit",
  templateUrl: "./movie-edit.component.html",
  styleUrls: ["./movie-edit.component.css"],
})
export class MovieEditComponent implements OnInit {
  title: string = "Movie edit";
  movie: Movie = null;
  movieId: number = 0;
  submitBtnTitle = "save";
  //activated route lets us get the id
  constructor(
    private movieSvc: MovieService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.movieId = params["id"]));

    this.movieSvc.getById(this.movieId).subscribe(
      (resp) => {
        this.movie = resp as Movie;
        console.log(this.movie.id);
        console.log("movies", this.movie);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  save() {
    this.movieSvc.update(this.movie).subscribe(
      (resp) => {
        this.movie = resp as Movie;
        console.log("movies", this.movie);
        this.router.navigateByUrl("/movie-list");
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
