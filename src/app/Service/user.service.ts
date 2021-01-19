import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Model/user';

const URL = 'http://localhost:8080/movies';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  //returns all movies as an observable type
  getAll(): Observable<User[]> {
    return this.http.get(URL + '/') as Observable<User[]>;
  }

  create(user: User): Observable<User> {
    return this.http.post(URL + '/', user) as Observable<User>;
  }

  getById(id: number): Observable<User> {
    return this.http.get(URL + '/' + id) as Observable<User>;
  }

  update(user: User): Observable<User> {
    return this.http.put(URL + '/', user) as Observable<User>;
  }

  delete(id: number): Observable<User> {
    return this.http.delete(URL + '/' + id) as Observable<User>;
  }

  login(user: User): Observable<User> {
    return this.http.post(URL + '/login', user) as Observable<User>;
  }
}
