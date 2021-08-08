import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AnswerSurveyComponent } from './answer-survey/answer-survey.component'
import { MatStepperModule } from '@angular/material/stepper'
import { MatRadioModule } from '@angular/material/radio'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [AnswerSurveyComponent],
  exports: [AnswerSurveyComponent],
  imports: [CommonModule, MatStepperModule, MatRadioModule, FormsModule]
})
export class AnswerSurveyModule {}
