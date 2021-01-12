import { Component, OnInit } from "@angular/core";
import { Actor } from "src/app/Model/actor";
import { ActorService } from "src/app/Service/actor.service";

@Component({
  selector: "app-actor-create",
  templateUrl: "./actor-create.component.html",
  styleUrls: ["./actor-create.component.css"],
})
export class ActorCreateComponent implements OnInit {
  public title: string = "Movie create";
  public actor: Actor = new Actor();
  submitBtnTitle: string = "create";
  constructor(private actorSvc: ActorService) {}

  ngOnInit(): void {}

  save() {
    this.actorSvc.create(this.actor).subscribe(
      (resp) => {
        this.actor = resp as Actor;
        console.log("movies", this.actor);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
