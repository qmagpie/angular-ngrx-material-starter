import { TableActions, TableActionTypes } from './table.actions';

export interface State {}

export const initialState: State = {};

export function reducer(state = initialState, action: TableActions): State {
  switch (action.type) {
    case TableActionTypes.LoadTables:
      return state;

    default:
      return state;
  }
}
