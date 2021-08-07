import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AnswerSurveyComponent } from "./answer-survey.component";
import { provideMockStore } from "@ngrx/store/testing";

describe("AnswerSurveyComponent", () => {
  let component: AnswerSurveyComponent;
  let fixture: ComponentFixture<AnswerSurveyComponent>;
  const initialState = { survey: {}, id: "" };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnswerSurveyComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
