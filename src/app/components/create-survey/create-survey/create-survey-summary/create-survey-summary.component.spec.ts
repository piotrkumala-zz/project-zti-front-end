import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSurveySummaryComponent } from './create-survey-summary.component';

describe('CreateSurveySummaryComponent', () => {
  let component: CreateSurveySummaryComponent;
  let fixture: ComponentFixture<CreateSurveySummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateSurveySummaryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSurveySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
