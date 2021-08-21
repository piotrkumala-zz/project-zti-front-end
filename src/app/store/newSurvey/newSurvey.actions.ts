import { createAction, props } from '@ngrx/store';
import { ClientSurvey } from '../../api/models';

export const setNewSurvey = createAction(
  '[New Survey] Set',
  props<{ newSurvey: ClientSurvey }>(),
);
export const resetNewSurvey = createAction('[New Survey] Reset');
