import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswerSurveyComponent } from './answer-survey/answer-survey.component';

@NgModule({
  declarations: [AnswerSurveyComponent],
  exports: [AnswerSurveyComponent],
  imports: [CommonModule],
})
export class AnswerSurveyModule {}
