import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../../../store/state';
import { ClientSurvey } from '../../../api/models/client-survey';
import { setNewSurvey } from '../../../store/newSurvey/newSurvey.actions';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.scss'],
})
export class CreateSurveyComponent implements OnInit, OnDestroy {
  public newSurvey: ClientSurvey = {};
  private subscription!: Subscription;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.subscription = this.store
      .select('newSurvey')
      .subscribe((newSurvey) => {
        this.newSurvey = newSurvey ?? this.newSurvey;
      });
    this.store.dispatch(setNewSurvey({ newSurvey: { title: 'test' } }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
