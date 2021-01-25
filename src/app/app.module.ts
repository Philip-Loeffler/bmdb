import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieListComponent } from './Component/movie/movie-list/movie-list.component';
import { ActorListComponent } from './Component/actor/actor-list/actor-list.component';
import { HomeComponent } from './Component/home/home.component';
import { MovieCreateComponent } from './Component/movie/movie-create/movie-create.component';
import { ActorCreateComponent } from './Component/actor/actor-create/actor-create.component';
import { NoComponentDefinedComponent } from './Component/no-component-defined/no-component-defined.component';
import { MenuComponent } from './Component/menu/menu.component';
import { MovieDetailComponent } from './Component/movie/movie-detail/movie-detail.component';
import { MovieEditComponent } from './Component/movie/movie-edit/movie-edit.component';
import { ActorDetailComponent } from './Component/actor/actor-detail/actor-detail.component';
import { ActorEditComponent } from './Component/actor/actor-edit/actor-edit.component';
import { CreditListComponent } from './Component/credit/credit-list/credit-list.component';
import { CreditDetailComponent } from './Component/credit/credit-detail/credit-detail.component';
import { CreditCreateComponent } from './Component/credit/credit-create/credit-create.component';
import { CreditEditComponent } from './Component/credit/credit-edit/credit-edit.component';
import { UserListComponent } from './Component/user/user-list/user-list.component';
import { UserDetailComponent } from './Component/user/user-detail/user-detail.component';
import { UserEditComponent } from './Component/user/user-edit/user-edit.component';
import { UserCreateComponent } from './Component/user/user-create/user-create.component';
import { UserLoginComponent } from './Component/user/user-login/user-login.component';
import { PortPipe } from './pipe/port.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ActorListComponent,
    HomeComponent,
    MovieCreateComponent,
    ActorCreateComponent,
    NoComponentDefinedComponent,
    MenuComponent,
    MovieDetailComponent,
    MovieEditComponent,
    ActorDetailComponent,
    ActorEditComponent,
    CreditListComponent,
    CreditDetailComponent,
    CreditCreateComponent,
    CreditEditComponent,
    UserListComponent,
    UserDetailComponent,
    UserEditComponent,
    UserCreateComponent,
    UserLoginComponent,
    PortPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
