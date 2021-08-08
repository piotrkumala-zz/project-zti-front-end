import { LOCALE_ID, NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { StoreModule } from '@ngrx/store'
import { surveyReducer } from '../store/survey/survey.reducer'
import { idReducer } from '../store/id/id.reducer'
import { RouterModule, Routes } from '@angular/router'
import { HeaderModule } from './header/header.module'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AnswerSurveyModule } from './answer-survey/answer-survey.module'

const routes: Routes = []

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({ survey: surveyReducer, id: idReducer }),
    HeaderModule,
    AnswerSurveyModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pl' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
