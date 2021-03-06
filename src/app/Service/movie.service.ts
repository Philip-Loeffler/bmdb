import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movie } from "src/app/Model/movie";

const URL = "http://localhost:8080/movies";
@Injectable({
  providedIn: "root",
})
export class MovieService {
  constructor(private http: HttpClient) {}

  //returns all movies as an observable type
  getAll(): Observable<Movie[]> {
    return this.http.get(URL + "/") as Observable<Movie[]>;
  }

  create(movie: Movie): Observable<Movie> {
    return this.http.post(URL + "/", movie) as Observable<Movie>;
  }

  getById(id: number): Observable<Movie> {
    return this.http.get(URL + "/" + id) as Observable<Movie>;
  }

  update(movie: Movie): Observable<Movie> {
    return this.http.put(URL + "/", movie) as Observable<Movie>;
  }

  delete(id: number): Observable<Movie> {
    return this.http.delete(URL + "/" + id) as Observable<Movie>;
  }
}
