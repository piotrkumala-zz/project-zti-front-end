import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSurveySummaryComponent } from './create-survey-summary.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

describe('CreateSurveySummaryComponent', () => {
  let component: CreateSurveySummaryComponent;
  let fixture: ComponentFixture<CreateSurveySummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateSurveySummaryComponent],
      imports: [MatIconModule],
      providers: [
        { provide: MatDialog, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: { data: { surveyId: '' } } },
      ],
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
