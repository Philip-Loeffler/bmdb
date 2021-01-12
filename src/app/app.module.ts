import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { MovieListComponent } from "./Component/movie/movie-list/movie-list.component";
import { ActorListComponent } from "./Component/actor/actor-list/actor-list.component";
import { HomeComponent } from './Component/home/home.component';
import { MovieCreateComponent } from './Component/movie/movie-create/movie-create/movie-create.component';
import { ActorCreateComponent } from './Component/actor/actor-create/actor-create/actor-create.component';
import { NoComponentDefinedComponent } from './Component/no-component-defined/no-component-defined.component';

@NgModule({
  declarations: [AppComponent, MovieListComponent, ActorListComponent, HomeComponent, MovieCreateComponent, ActorCreateComponent, NoComponentDefinedComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
