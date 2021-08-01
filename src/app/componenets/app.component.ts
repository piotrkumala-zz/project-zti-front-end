import { Component, OnDestroy } from '@angular/core';
import { SurveyControllerService } from '../api/services/survey-controller.service';
import { ClientSurvey } from '../api/models/client-survey';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { setSurvey } from '../store/survey/survey.actions';
import { State } from '../store/state';
import { setId } from '../store/id/id.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  public survey: ClientSurvey = {};
  private subscription: Subscription;

  constructor(
    private surveyService: SurveyControllerService,
    private store: Store<State>,
    private activatedRoute: ActivatedRoute
  ) {
    this.subscription = store.select('survey').subscribe((survey) => {
      this.survey = survey;
    });
    this.subscription
      .add(
        store.select('id').subscribe((id) => {
          this.surveyService
            .getSurvey({ id: id })
            .subscribe((data) =>
              this.store.dispatch(setSurvey({ survey: data }))
            );
        })
      )
      .add(
        activatedRoute.queryParams.subscribe((x) => {
          if (x.id) {
            store.dispatch(setId({ id: x.id }));
          }
        })
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
