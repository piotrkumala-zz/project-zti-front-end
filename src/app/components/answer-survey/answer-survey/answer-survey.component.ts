import { Component, OnDestroy, OnInit } from '@angular/core'
import { ClientSurvey } from '../../../api/models/client-survey'
import { Store } from '@ngrx/store'
import { State } from '../../../store/state'
import { Subscription } from 'rxjs'
import { ClientAnswer } from '../../../api/models/client-answer'
import { MatRadioChange } from '@angular/material/radio'
import { ClientQuestion } from '../../../api/models/client-question'
import { QuestionWithAnswers } from '../../../models/questionWithAnswers'
import { ClientAnsweredQuestion } from '../../../api/models/client-answered-question'

@Component({
  selector: 'app-answer-survey',
  templateUrl: './answer-survey.component.html',
  styleUrls: ['./answer-survey.component.scss']
})
export class AnswerSurveyComponent implements OnInit, OnDestroy {
  survey: ClientSurvey = {}
  questionsToAnswer: QuestionWithAnswers[] = []
  private answer: ClientAnswer = {}
  private subscription!: Subscription

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.subscription = this.store.select('survey').subscribe((survey) => {
      this.survey = survey
      if (this.survey.question) {
        this.questionsToAnswer = this.survey.question
          ?.filter((x) => x.id === this.survey.rootQuestion)
          .map((x) => ({
            ...x
          }))
      }
    })

    this.subscription.add(
      this.store.select('id').subscribe((id) => {
        this.answer.surveyId = id
      })
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  answerQuestion(event: MatRadioChange, question: ClientQuestion): void {
    const answeredQuestion: ClientAnsweredQuestion = {
      questionId: question.id,
      answeredDirection: event.value === question.left ? 'Left' : 'Right'
    }
    if (this.answer.answeredQuestions) {
      this.answer.answeredQuestions = [
        ...this.answer.answeredQuestions,
        answeredQuestion
      ]
    } else {
      this.answer.answeredQuestions = [answeredQuestion]
    }
    if (this.survey.question) {
      const index =
        this.questionsToAnswer.findIndex((x) => x.id === question.id) + 1
      if (index && index !== this.questionsToAnswer.length) {
        this.questionsToAnswer = this.questionsToAnswer.slice(0, index)
      }
      if (event.value) {
        this.questionsToAnswer.push(
          this.survey.question
            .filter((x) => x.id === event.value)
            .map((x) => ({ ...x }))[0]
        )
      }
    }
  }
}
