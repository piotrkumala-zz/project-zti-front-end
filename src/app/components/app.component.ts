import { Component, OnDestroy } from '@angular/core';
import { SurveyControllerService } from '../api/services/survey-controller.service';
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
  private subscription: Subscription;

  constructor(
    private surveyService: SurveyControllerService,
    private store: Store<State>,
    private activatedRoute: ActivatedRoute
  ) {
    this.subscription = store.select('id').subscribe((id) => {
      this.surveyService
        .getSurvey({ id })
        .subscribe((data) => this.store.dispatch(setSurvey({ survey: data })));
    });
    this.subscription.add(
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
