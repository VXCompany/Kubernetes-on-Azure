import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatchCandidateComponent } from "./match-candidate.component";
import { AngularMaterialModule } from "src/app/angular-material.module";
import { SplitPipe } from "./split-pipe";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppConfig } from "src/app/app.config.service";

describe("MatchCandidateComponent", () => {
  let component: MatchCandidateComponent;
  let fixture: ComponentFixture<MatchCandidateComponent>;

  beforeEach(async(() => {
    AppConfig.settings = {
      environmentName: "develop",
      endPointApiUrl: "http://localhost:5000",
      version: "0.0.1"
    };

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        AngularMaterialModule
      ],
      declarations: [SplitPipe, MatchCandidateComponent],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
