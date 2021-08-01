import { Component, OnDestroy } from '@angular/core';
import { SurveyControllerService } from '../api/services/survey-controller.service';
import { ClientSurvey } from '../api/models/client-survey';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { setSurvey } from '../store/survey/survey.actions';
import { State } from '../store/state';
import { setId } from '../store/id/id.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  private subscription: Subscription;
  public survey: ClientSurvey = {};
  constructor(
    private surveyService: SurveyControllerService,
    private store: Store<State>
  ) {
    this.subscription = store.select('survey').subscribe((survey) => {
      this.survey = survey;
    });
    this.subscription.add(
      store.select('id').subscribe((id) => {
        this.surveyService
          .getSurvey({ id: id })
          .subscribe((data) =>
            this.store.dispatch(setSurvey({ survey: data }))
          );
      })
    );

    store.dispatch(setId({ id: 'f3422e85-41a5-4e0d-8a85-6175c28078b2' }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
