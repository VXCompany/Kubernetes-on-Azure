import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { LogInComponent } from "./log-in.component";
import { AngularMaterialModule } from "src/app/angular-material.module";
import { RouterTestingModule } from "@angular/router/testing";

describe("LogInComponent", () => {
  let component: LogInComponent;
  let fixture: ComponentFixture<LogInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularMaterialModule, RouterTestingModule],
      declarations: [LogInComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
