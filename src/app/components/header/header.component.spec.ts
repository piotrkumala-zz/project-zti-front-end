import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MatDialog } from '@angular/material/dialog';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { reducers } from '../../store/state';
import createSpyObj = jasmine.createSpyObj;
import { of } from 'rxjs';
import { Routes } from '@angular/router';
import { AnswerSurveyComponent } from '../answer-survey/answer-survey/answer-survey.component';
import { CreateSurveyComponent } from '../create-survey/create-survey/create-survey.component';
import { ThankYouForAnswerComponent } from '../answer-survey/thank-you-for-answer/thank-you-for-answer.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const mockDialog = createSpyObj('MatDialog', {
    open: createSpyObj('MatDialog', { afterClosed: of('test') }),
  });
  const routes: Routes = [
    { path: 'answer', component: AnswerSurveyComponent },
    { path: 'create', component: CreateSurveyComponent },
    { path: '', redirectTo: '/answer', pathMatch: 'full' },
    { path: 'thanks', component: ThankYouForAnswerComponent },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent, MatToolbar, MatIcon],
      providers: [{ provide: MatDialog, useValue: mockDialog }],
      imports: [
        RouterTestingModule.withRoutes(routes),
        StoreModule.forRoot(reducers),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set survey id after exiting dialog', () => {
    component.searchSurvey();

    const store = TestBed.inject(Store);
    store.select('id').subscribe((x) => {
      expect(x).not.toBeNull();
    });
  });
});
