import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSurveyComponent } from './create-survey.component';
import { MatTreeModule } from '@angular/material/tree';
import { CreateSurveyLeafComponent } from './create-survey-leaf/create-survey-leaf.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

describe('CreateSurveyComponent', () => {
  let component: CreateSurveyComponent;
  let fixture: ComponentFixture<CreateSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateSurveyComponent, CreateSurveyLeafComponent],
      imports: [
        MatTreeModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatIconModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
