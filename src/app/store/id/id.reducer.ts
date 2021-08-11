import { Action, createReducer, on } from '@ngrx/store';
import { resetId, setId } from './id.actions';

export const initialState = '';

const _idReducer = createReducer(
  initialState,
  on(setId, (state, { id }) => id),
  on(resetId, () => ''),
);

export const idReducer = (state: string | undefined, action: Action): string =>
  _idReducer(state, action);
