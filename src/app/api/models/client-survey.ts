/* tslint:disable */
/* eslint-disable */
import { ClientQuestion } from './client-question';

export interface ClientSurvey {
  description?: string;
  question?: Array<ClientQuestion>;
  title?: string;
}
