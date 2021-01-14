import { Component, OnInit } from "@angular/core";
import { Movie } from "src/app/Model/movie";
import { MovieService } from "src/app/Service/movie.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.css"],
})
export class MovieDetailComponent implements OnInit {
  title: string = "Movie detail";
  movie: Movie = null;
  movieId: number = 0;
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
        console.log("movies", this.movie);
        this.router.navigateByUrl("/movie-list");
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
