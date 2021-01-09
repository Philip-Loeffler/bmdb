import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MovieListComponent } from "./Component/movie/movie-list/movie-list.component";
import { ActorListComponent } from "./Component/actor/actor-list/actor-list.component";
import { HomeComponent } from "./Component/home/home.component";

const routes: Routes = [
  { path: "movie/list", component: MovieListComponent },
  { path: "actor/list", component: ActorListComponent },
  { path: "home", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
