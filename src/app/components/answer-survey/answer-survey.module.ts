import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswerSurveyComponent } from './answer-survey/answer-survey.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AnswerSurveyComponent],
  exports: [AnswerSurveyComponent],
  imports: [
    CommonModule,
    MatStepperModule,
    MatRadioModule,
    FormsModule,
    MatButtonModule,
  ],
})
export class AnswerSurveyModule {}
