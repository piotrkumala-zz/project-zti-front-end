import { ClientSurvey } from '../api/models/client-survey';
import { surveyReducer } from './survey/survey.reducer';
import { idReducer } from './id/id.reducer';

export type State = {
  survey: ClientSurvey;
  id: string;
};

export const reducers = {
  survey: surveyReducer,
  id: idReducer,
};
