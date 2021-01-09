import { Component, OnInit } from "@angular/core";
import { Actor } from "src/app/Model/actor";
import { ActorService } from "src/app/Service/actor.service";

@Component({
  selector: "app-actor-list",
  templateUrl: "./actor-list.component.html",
  styleUrls: ["./actor-list.component.css"],
})
export class ActorListComponent implements OnInit {
  public title: string = "Actor List";
  public actors: Actor[] = [];
  constructor(private actorSvc: ActorService) {}

  ngOnInit(): void {
    this.actorSvc.getAll().subscribe(
      (resp) => {
        this.actors = resp as Actor[];
        console.log("movies", this.actors);
      },
      (err) => {
        console.log(err);
      }
    );
    //populate list of movies
  }
}
