import { Component, OnInit } from "@angular/core";
import { Movie } from "src/app/Model/movie";
import { MovieService } from "src/app/Service/movie.service";

@Component({
  selector: "app-movie-create",
  templateUrl: "./movie-create.component.html",
  styleUrls: ["./movie-create.component.css"],
})
export class MovieCreateComponent implements OnInit {
  public title: string = "Movie create";
  public movie: Movie = new Movie();
  submitBtnTitle: string = "create";
  constructor(private movieSvc: MovieService) {}

  ngOnInit(): void {}

  save() {
    this.movieSvc.create(this.movie).subscribe(
      (resp) => {
        this.movie = resp as Movie;
        console.log("movies", this.movie);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
