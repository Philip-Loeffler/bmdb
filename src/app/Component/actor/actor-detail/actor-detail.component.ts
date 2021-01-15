import { Component, OnInit } from '@angular/core';
import { ActorService } from 'src/app/Service/actor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Actor } from 'src/app/Model/actor';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css'],
})
export class ActorDetailComponent implements OnInit {
  title: string = 'actor detail';
  actor: Actor = null;
  actorId: number = 0;
  constructor(
    private actorSvc: ActorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.actorId = params['id']));

    this.actorSvc.getById(this.actorId).subscribe(
      (resp) => {
        this.actor = resp as Actor;
        console.log(this.actor.id);
        console.log('movies', this.actor);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  delete() {
    this.actorSvc.delete(this.actor.id).subscribe(
      (resp) => {
        this.actor = resp as Actor;
        console.log('movies', this.actor);
        this.router.navigateByUrl('/movie-list');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
