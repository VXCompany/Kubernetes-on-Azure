import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatchCandidateComponent } from "../match-candidate/match-candidate.component";
import { MatchComponent } from "./match.component";
import { AngularMaterialModule } from "src/app/angular-material.module";
import { SplitPipe } from "../match-candidate/split-pipe";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("MatchComponent", () => {
  let component: MatchComponent;
  let fixture: ComponentFixture<MatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        AngularMaterialModule
      ],
      declarations: [MatchCandidateComponent, SplitPipe, MatchComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
