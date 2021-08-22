import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CreateSurveyComponent],
  imports: [CommonModule, MatTreeModule, MatButtonModule, MatIconModule],
  exports: [CreateSurveyComponent],
})
export class CreateSurveyModule {}
