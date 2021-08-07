import { createAction, props } from "@ngrx/store";

export const setId = createAction("[Survey Id] Set", props<{ id: string }>());
export const resetId = createAction("[Survey Id] Reset");
