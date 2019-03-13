import { TableState } from './table.model';
import {
  PeriodicElementsActions,
  PeriodicElementsActionTypes
} from './table.actions';

export const initialState: TableState = {
  loading: false,
  elements: []
};

export function tableReducer(
  state: TableState = initialState,
  action: PeriodicElementsActions
): TableState {
  switch (action.type) {
    case PeriodicElementsActionTypes.RETRIEVE:
      return {
        ...state,
        loading: true,
        elements: [],
        error: null
      };

    case PeriodicElementsActionTypes.RETRIEVE_SUCCESS:
      return {
        ...state,
        loading: false,
        elements: action.payload.elements,
        error: null
      };

    case PeriodicElementsActionTypes.RETRIEVE_ERROR:
      return {
        ...state,
        loading: false,
        elements: [],
        error: action.payload.error
      };

    default:
      return state;
  }
}
