import { Component, OnDestroy, OnInit } from '@angular/core';
import { ClientSurvey } from '../../../api/models/client-survey';
import { Store } from '@ngrx/store';
import { State } from '../../../store/state';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-answer-survey',
  templateUrl: './answer-survey.component.html',
  styleUrls: ['./answer-survey.component.scss'],
})
export class AnswerSurveyComponent implements OnInit, OnDestroy {
  survey: ClientSurvey = {};
  private subscription!: Subscription;
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.subscription = this.store.select('survey').subscribe((survey) => {
      this.survey = survey;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
