import { createAction, props } from '@ngrx/store'
import { ClientSurvey } from '../../api/models'

export const setSurvey = createAction(
  '[Survey] Set',
  props<{ survey: ClientSurvey }>()
)
export const resetSurvey = createAction('[Survey] Reset')
