import { Action, createReducer, on } from '@ngrx/store';
import { resetSurvey, setSurvey } from './survey.actions';
import { ClientSurvey } from '../../api/models/client-survey';

export const initialState: ClientSurvey = {};

const _surveyReducer = createReducer(
  initialState,
  on(setSurvey, (state, { survey }) => survey),
  on(resetSurvey, () => ({})),
);

export const surveyReducer = (
  state: ClientSurvey | undefined,
  action: Action,
): ClientSurvey => _surveyReducer(state, action);
