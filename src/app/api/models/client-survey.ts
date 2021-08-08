/* tslint:disable */
/* eslint-disable */
import { ClientQuestion } from "./client-question";

export interface ClientSurvey {
  description?: string;
  question?: Array<ClientQuestion>;
  rootQuestion?: string;
  title?: string;
}
