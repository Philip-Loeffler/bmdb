import { Component, OnInit } from '@angular/core';
import { ActorService } from 'src/app/Service/actor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Actor } from 'src/app/Model/actor';
@Component({
  selector: 'app-actor-edit',
  templateUrl: './actor-edit.component.html',
  styleUrls: ['./actor-edit.component.css'],
})
export class ActorEditComponent implements OnInit {
  title: string = 'Movie edit';
  actor: Actor = null;
  actorId: number = 0;
  submitBtnTitle = 'save';
  //activated route lets us get the id
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
  save() {
    this.actorSvc.update(this.actor).subscribe(
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
