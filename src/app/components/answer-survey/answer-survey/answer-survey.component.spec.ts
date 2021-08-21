import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerSurveyComponent } from './answer-survey.component';
import { provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatStepper } from '@angular/material/stepper';

describe('AnswerSurveyComponent', () => {
  let component: AnswerSurveyComponent;
  let fixture: ComponentFixture<AnswerSurveyComponent>;
  const initialState = { survey: {}, id: '', newSurvey: {} };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnswerSurveyComponent, MatStepper],
      providers: [provideMockStore({ initialState })],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
