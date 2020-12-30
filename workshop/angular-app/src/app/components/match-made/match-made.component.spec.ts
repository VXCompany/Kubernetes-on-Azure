import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MatchMadeComponent } from "./match-made.component";
import { AngularMaterialModule } from "src/app/angular-material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("MatchMadeComponent", () => {
  let component: MatchMadeComponent;
  let fixture: ComponentFixture<MatchMadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularMaterialModule, BrowserAnimationsModule],
      declarations: [MatchMadeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchMadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
