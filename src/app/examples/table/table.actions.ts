import { Action } from '@ngrx/store';

export enum TableActionTypes {
  LoadTables = '[Table] Load Tables'
}

export class LoadTables implements Action {
  readonly type = TableActionTypes.LoadTables;
}

export type TableActions = LoadTables;
