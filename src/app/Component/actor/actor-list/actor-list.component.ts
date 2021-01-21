import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/Model/actor';
import { ActorService } from 'src/app/Service/actor.service';
import { SystemService } from 'src/app/Service/system.service';
import { User } from 'src/app/Model/user';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css'],
})
export class ActorListComponent implements OnInit {
  public title: string = 'Actor List';
  public actors: Actor[] = [];
  user: User = new User();

  constructor(private actorSvc: ActorService, private sysSvc: SystemService) {}

  ngOnInit(): void {
    this.actorSvc.getAll().subscribe(
      (resp) => {
        this.actors = resp as Actor[];
        this.sysSvc.loggedInUser = this.user;
        console.log('movies', this.actors);
      },
      (err) => {
        console.log(err);
      }
    );
    //populate list of movies
  }
}
