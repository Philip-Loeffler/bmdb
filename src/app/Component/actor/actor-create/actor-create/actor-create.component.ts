import { Component, OnInit } from "@angular/core";
import { Actor } from "src/app/Model/actor";
import { ActorService } from "src/app/Service/actor.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-actor-create",
  templateUrl: "./actor-create.component.html",
  styleUrls: ["./actor-create.component.css"],
})
export class ActorCreateComponent implements OnInit {
  public title: string = "Actor create";
  public actor: Actor = new Actor();
  submitBtnTitle: string = "create";
  constructor(private actorSvc: ActorService, private router: Router) {}

  ngOnInit(): void {}

  save() {
    this.actorSvc.create(this.actor).subscribe(
      (resp) => {
        this.actor = resp as Actor;
        console.log("movies", this.actor);
        this.router.navigateByUrl("/actor-list");
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
