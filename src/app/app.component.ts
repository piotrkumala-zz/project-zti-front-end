import { Component, OnInit } from '@angular/core';
import { SurveyControllerService } from './api/services/survey-controller.service';
import { ClientSurvey } from './api/models/client-survey';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public surveys: ClientSurvey[] = [];

  constructor(private surveyService: SurveyControllerService) {}

  ngOnInit(): void {
    this.surveyService.getSurveys().subscribe((data) => (this.surveys = data));
  }
}
