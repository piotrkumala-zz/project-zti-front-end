/* tslint:disable */
/* eslint-disable */
import { CreateSurveyQuestion } from './create-survey-question';

export interface CreateSurveyRequest {
  description?: string;
  questions?: Array<CreateSurveyQuestion>;
  title?: string;
}
