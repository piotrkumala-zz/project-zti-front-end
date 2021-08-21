import { Action, createReducer, on } from '@ngrx/store';
import { resetNewSurvey, setNewSurvey } from './newSurvey.actions';
import { ClientSurvey } from '../../api/models/client-survey';

export const initialState: ClientSurvey = {};

const _surveyReducer = createReducer(
  initialState,
  on(setNewSurvey, (state, { newSurvey }) => newSurvey),
  on(resetNewSurvey, () => ({})),
);

export const newSurveyReducer = (
  state: ClientSurvey | undefined,
  action: Action,
): ClientSurvey => _surveyReducer(state, action);
