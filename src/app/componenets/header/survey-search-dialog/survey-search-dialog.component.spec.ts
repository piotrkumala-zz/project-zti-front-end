import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveySearchDialogComponent } from './survey-search-dialog.component';

describe('SurveySearchDialogComponent', () => {
  let component: SurveySearchDialogComponent;
  let fixture: ComponentFixture<SurveySearchDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SurveySearchDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveySearchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
