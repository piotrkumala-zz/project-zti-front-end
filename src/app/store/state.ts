import { ClientSurvey } from '../api/models/client-survey';
import { surveyReducer } from './survey/survey.reducer';
import { idReducer } from './id/id.reducer';
import { newSurveyReducer } from './newSurvey/newSurvey.reducer';

export type State = {
  survey: ClientSurvey;
  id: string;
  newSurvey: ClientSurvey;
};

export const reducers = {
  survey: surveyReducer,
  id: idReducer,
  newSurvey: newSurveyReducer,
};
