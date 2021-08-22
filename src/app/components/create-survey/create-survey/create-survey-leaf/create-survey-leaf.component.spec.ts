import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSurveyLeafComponent } from './create-survey-leaf.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CreateSurveyLeafComponent', () => {
  let component: CreateSurveyLeafComponent;
  let fixture: ComponentFixture<CreateSurveyLeafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateSurveyLeafComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
      providers: [NgControl],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSurveyLeafComponent);
    component = fixture.componentInstance;
    component.node = { questionText: new FormControl() };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
