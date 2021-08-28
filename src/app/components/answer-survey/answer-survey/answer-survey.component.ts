import { Component, OnDestroy, OnInit } from '@angular/core';
import { ClientSurvey } from '../../../api/models/client-survey';
import { Store } from '@ngrx/store';
import { State } from '../../../store/state';
import { Subscription } from 'rxjs';
import { ClientAnswer } from '../../../api/models/client-answer';
import { MatRadioChange } from '@angular/material/radio';
import { ClientQuestion } from '../../../api/models/client-question';
import { QuestionWithAnswers } from '../../../models/questionWithAnswers';
import { AnswerControllerService } from '../../../api/services/answer-controller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-answer-survey',
  templateUrl: './answer-survey.component.html',
  styleUrls: ['./answer-survey.component.scss'],
})
export class AnswerSurveyComponent implements OnInit, OnDestroy {
  survey: ClientSurvey = {};
  questionsToAnswer: QuestionWithAnswers[] = [];
  isFilledOut = false;
  private answer: ClientAnswer = {};
  private subscription!: Subscription;

  constructor(
    private store: Store<State>,
    private answerService: AnswerControllerService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.subscription = this.store.select('survey').subscribe((survey) => {
      this.survey = survey;
      if (this.survey.question) {
        this.questionsToAnswer = this.survey.question
          ?.filter((x) => x.id === this.survey.rootQuestion)
          .map((x) => ({
            ...x,
          }));
      }
    });

    this.subscription.add(
      this.store.select('id').subscribe((id) => {
        this.answer.surveyId = id;
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  answerQuestion(event: MatRadioChange, question: ClientQuestion): void {
    if (this.survey.question) {
      this.isFilledOut = true;
      const index =
        this.questionsToAnswer.findIndex((x) => x.id === question.id) + 1;
      if (index && index !== this.questionsToAnswer.length) {
        this.questionsToAnswer = this.questionsToAnswer.slice(0, index);
      }
      if (event.value && event.value !== 'right' && event.value !== 'left') {
        const newQuestion: QuestionWithAnswers = {
          ...this.survey.question.find((x) => x.id === event.value),
        };
        newQuestion.left = newQuestion.left ?? 'left';
        newQuestion.right = newQuestion.right ?? 'right';
        this.questionsToAnswer.push(newQuestion);
        this.isFilledOut = false;
      }
    }
  }

  async saveSurvey(): Promise<void> {
    this.answer.answeredQuestions = this.questionsToAnswer.map((x) => ({
      questionId: x.id,
      answeredDirection: x.answeredId === x.left ? 'Left' : 'Right',
    }));
    this.answerService.saveAnswer({ body: this.answer }).subscribe(async () => {
      await this.router.navigate(['/thanks']);
    });
  }
}
