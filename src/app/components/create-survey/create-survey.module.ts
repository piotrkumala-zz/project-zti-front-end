import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CreateSurveyLeafComponent } from './create-survey/create-survey-leaf/create-survey-leaf.component';
import { CreateSurveySummaryComponent } from './create-survey/create-survey-summary/create-survey-summary.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    CreateSurveyComponent,
    CreateSurveyLeafComponent,
    CreateSurveySummaryComponent,
  ],
  imports: [
    CommonModule,
    MatTreeModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  exports: [CreateSurveyComponent],
})
export class CreateSurveyModule {}
