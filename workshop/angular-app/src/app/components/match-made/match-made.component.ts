import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Candidate } from "../match-candidate/candidate";
import { trigger, transition, useAnimation } from "@angular/animations";
import { zoomIn } from "ng-animate";

@Component({
  selector: "app-match-made",
  templateUrl: "./match-made.component.html",
  styleUrls: ["./match-made.component.css"],
  encapsulation: ViewEncapsulation.None,
  animations: [trigger("zoomIn", [transition("* => *", useAnimation(zoomIn))])]
})
export class MatchMadeComponent implements OnInit {
  zoomIn = false;
  zoomInDown = false;
  zoomInLeft = false;
  zoomOut = false;
  zoomOutUp = false;
  zoomOutRight = false;

  zooming = [
    "zoomIn",
    "zoomInDown",
    "zoomInLeft",
    "zoomOut",
    "zoomOutUp",
    "zoomOutRight"
  ];

  candidate: Candidate;

  constructor() {}

  ngOnInit() {
    this.candidate = history.state;
  }
}
