import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeaderComponent } from './header/header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialog } from '@angular/material/dialog';
import { AnswerSurveyComponent } from './answer-survey/answer-survey/answer-survey.component';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatStepper } from '@angular/material/stepper';
import { SurveyControllerService } from '../api/services';
import createSpyObj = jasmine.createSpyObj;
import { Store, StoreModule } from '@ngrx/store';
import { setId } from '../store/id/id.actions';
import { reducers } from '../store/state';
import { of } from 'rxjs';
import { ClientSurvey } from '../api/models';

describe('AppComponent', () => {
  const mockSurveyService = createSpyObj('SurveyControllerService', {
    getSurvey: of<ClientSurvey>({
      description: 'test',
      title: 'test',
      question: [],
      rootQuestion: 'sadfasdf',
    }),
  });
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        AnswerSurveyComponent,
        MatToolbar,
        MatIcon,
        MatStepper,
      ],
      providers: [
        { provide: MatDialog, useValue: {} },
        { provide: SurveyControllerService, useValue: mockSurveyService },
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        StoreModule.forRoot(reducers),
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should get survey info when id is set in store', () => {
    const mockStore = TestBed.inject(Store);
    mockStore.dispatch(setId({ id: 'test' }));

    expect(mockSurveyService.getSurvey).toHaveBeenCalledWith({
      id: 'test',
    });
  });

  it('should set survey after info is obtained from api', async () => {
    const mockStore = TestBed.inject(Store);
    mockStore.dispatch(setId({ id: 'test' }));

    mockStore.select('survey').subscribe((x) => {
      expect(x).toEqual({
        description: 'test',
        title: 'test',
        question: [],
        rootQuestion: 'sadfasdf',
      });
    });
  });
});
