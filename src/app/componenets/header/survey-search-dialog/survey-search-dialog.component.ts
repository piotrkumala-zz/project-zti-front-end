import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-survey-search-dialog',
  templateUrl: './survey-search-dialog.component.html',
  styleUrls: ['./survey-search-dialog.component.scss'],
})
export class SurveySearchDialogComponent implements OnInit {
  idControl = new FormControl('', [
    Validators.pattern(
      RegExp(
        '^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$'
      )
    ),
    Validators.required,
  ]);

  constructor() {}

  ngOnInit(): void {}
}
