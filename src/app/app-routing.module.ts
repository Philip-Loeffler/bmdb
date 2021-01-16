import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './Component/movie/movie-list/movie-list.component';
import { MovieCreateComponent } from './Component/movie/movie-create/movie-create.component';
import { MovieDetailComponent } from './Component/movie/movie-detail/movie-detail.component';
import { MovieEditComponent } from './Component/movie/movie-edit/movie-edit.component';
import { ActorListComponent } from './Component/actor/actor-list/actor-list.component';
import { CreditListComponent } from './Component/credit/credit-list/credit-list.component';
import { ActorCreateComponent } from './Component/actor/actor-create/actor-create.component';
import { ActorDetailComponent } from './Component/actor/actor-detail/actor-detail.component';
import { ActorEditComponent } from './Component/actor/actor-edit/actor-edit.component';
import { NoComponentDefinedComponent } from './Component/no-component-defined/no-component-defined.component';
import { HomeComponent } from './Component/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'movie-list', component: MovieListComponent },
  { path: 'movie-create', component: MovieCreateComponent },
  { path: 'movie-detail/:id', component: MovieDetailComponent },
  { path: 'movie-edit/:id', component: MovieEditComponent },
  { path: 'actor-list', component: ActorListComponent },
  { path: 'actor-create', component: ActorCreateComponent },
  { path: 'actor-detail/:id', component: ActorDetailComponent },
  { path: 'actor-edit/:id', component: ActorEditComponent },
  { path: 'credit-list', component: CreditListComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: NoComponentDefinedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
