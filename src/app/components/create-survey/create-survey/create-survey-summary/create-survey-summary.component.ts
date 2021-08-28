import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-create-survey-summary',
  templateUrl: './create-survey-summary.component.html',
  styleUrls: ['./create-survey-summary.component.scss'],
})
export class CreateSurveySummaryComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { surveyId: string },
    private clipboard: Clipboard,
  ) {}

  url = (): string =>
    `${window.location.origin}/answer?id=${this.data.surveyId}`;

  copyToClipboard(): void {
    this.clipboard.copy(this.url());
  }
}
