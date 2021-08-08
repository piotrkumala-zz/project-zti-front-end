import { TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { HeaderComponent } from './header/header.component'
import { provideMockStore } from '@ngrx/store/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { MatDialog } from '@angular/material/dialog'
import { AnswerSurveyComponent } from './answer-survey/answer-survey/answer-survey.component'
import { MatToolbar } from '@angular/material/toolbar'
import { MatIcon } from '@angular/material/icon'

describe('AppComponent', () => {
  const initialState = { survey: undefined, id: '' }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        AnswerSurveyComponent,
        MatToolbar,
        MatIcon
      ],
      providers: [
        provideMockStore({ initialState }),
        { provide: MatDialog, useValue: {} }
      ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    }).compileComponents()
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })
})
