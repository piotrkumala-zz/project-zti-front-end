import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { RouterModule, Routes } from '@angular/router';
import { HeaderModule } from './header/header.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnswerSurveyModule } from './answer-survey/answer-survey.module';
import { CreateSurveyComponent } from './create-survey/create-survey/create-survey.component';
import { AnswerSurveyComponent } from './answer-survey/answer-survey/answer-survey.component';
import { reducers } from '../store/state';
import { CreateSurveyModule } from './create-survey/create-survey.module';
import { ThankYouForAnswerComponent } from './answer-survey/thank-you-for-answer/thank-you-for-answer.component';

const routes: Routes = [
  { path: 'answer', component: AnswerSurveyComponent },
  { path: 'create', component: CreateSurveyComponent },
  { path: '', redirectTo: '/answer', pathMatch: 'full' },
  { path: 'thanks', component: ThankYouForAnswerComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers),
    HeaderModule,
    AnswerSurveyModule,
    CreateSurveyModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pl' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
