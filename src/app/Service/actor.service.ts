import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Actor } from "src/app/Model/actor";

const URL = "http://localhost:8080/actors";

@Injectable({
  providedIn: "root",
})
export class ActorService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Actor[]> {
    return this.http.get(URL + "/") as Observable<Actor[]>;
  }

  create(actor: Actor): Observable<Actor> {
    return this.http.post(URL + "/", actor) as Observable<Actor>;
  }
}
