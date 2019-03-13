import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { PeriodicElement } from './table.model';

export enum PeriodicElementsActionTypes {
  RETRIEVE = '[PeriodicElements] Retrieve',
  RETRIEVE_SUCCESS = '[PeriodicElements] Retrieve Success',
  RETRIEVE_ERROR = '[PeriodicElements] Retrieve Error'
}

export class ActionPeriodicElementsRetrieve implements Action {
  readonly type = PeriodicElementsActionTypes.RETRIEVE;
}

export class ActionPeriodicElementsRetrieveSuccess implements Action {
  readonly type = PeriodicElementsActionTypes.RETRIEVE_SUCCESS;

  constructor(readonly payload: { elements: Array<PeriodicElement> }) {}
}

export class ActionPeriodicElementsRetrieveError implements Action {
  readonly type = PeriodicElementsActionTypes.RETRIEVE_ERROR;

  constructor(readonly payload: { error: HttpErrorResponse }) {}
}

export type PeriodicElementsActions =
  | ActionPeriodicElementsRetrieve
  | ActionPeriodicElementsRetrieveSuccess
  | ActionPeriodicElementsRetrieveError;
