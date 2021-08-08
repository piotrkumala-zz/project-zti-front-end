/* tslint:disable */
/* eslint-disable */
import { ClientAnsweredQuestion } from './client-answered-question'

export interface ClientAnswer {
  answeredQuestions?: Array<ClientAnsweredQuestion>
  surveyId?: string
}
