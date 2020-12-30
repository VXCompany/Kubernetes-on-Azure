import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { zoomIn } from 'ng-animate';
import { MatchService } from './match.service';
import { Candidate } from './candidate';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match-candidate',
  templateUrl: './match-candidate.component.html',
  styleUrls: ['./match-candidate.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [trigger('zoomIn', [transition('* => *', useAnimation(zoomIn))])],
})
export class MatchCandidateComponent implements OnInit {
  zoomIn = false;
  zoomInDown = false;
  zoomInLeft = false;
  zoomOut = false;
  zoomOutUp = false;
  zoomOutRight = false;

  zooming = [
    'zoomIn',
    'zoomInDown',
    'zoomInLeft',
    'zoomOut',
    'zoomOutUp',
    'zoomOutRight',
  ];

  candidate: Candidate;

  constructor(private matchService: MatchService, private router: Router) {}

  ngOnInit() {
    this.getNext();
  }

  getNext() {
    this.matchService.getNext().subscribe((response) => {
      this.candidate = response;
    });
  }

  clear(name: string) {
    this[name] = !this[name];
    this.getNext();
  }

  favorite(id: number) {
    this.router.navigate(['/matchmade'], { state: this.candidate });
  }
}
