import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSurveyLeafComponent } from './create-survey-leaf.component';

describe('CreateSurveyLeafComponent', () => {
  let component: CreateSurveyLeafComponent;
  let fixture: ComponentFixture<CreateSurveyLeafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateSurveyLeafComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSurveyLeafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
