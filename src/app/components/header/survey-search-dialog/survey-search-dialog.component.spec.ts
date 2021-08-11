import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveySearchDialogComponent } from './survey-search-dialog.component';
import {
  MatError,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import { MatDialog, MatDialogClose } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SurveySearchDialogComponent', () => {
  let component: SurveySearchDialogComponent;
  let fixture: ComponentFixture<SurveySearchDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SurveySearchDialogComponent,
        MatLabel,
        MatError,
        MatDialogClose,
      ],
      providers: [{ provide: MatDialog, useValue: {} }],
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserTestingModule,
        BrowserAnimationsModule,
      ],
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
