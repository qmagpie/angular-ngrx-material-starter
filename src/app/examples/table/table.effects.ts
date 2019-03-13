import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  PeriodicElementsActionTypes,
  PeriodicElementsActions,
  ActionPeriodicElementsRetrieveSuccess,
  ActionPeriodicElementsRetrieve,
  ActionPeriodicElementsRetrieveError
} from './table.actions';
import { TableService } from './table.service';

@Injectable()
export class TableEffects {
  @Effect()
  loadTables$ = this.actions$.pipe(
    ofType(PeriodicElementsActionTypes.RETRIEVE),
    switchMap((action: ActionPeriodicElementsRetrieve) =>
      this.tableService.fetchElements().pipe(
        map(
          elements => new ActionPeriodicElementsRetrieveSuccess({ elements })
        ),
        catchError(error =>
          of(new ActionPeriodicElementsRetrieveError({ error }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions<PeriodicElementsActions>,
    private tableService: TableService
  ) {}
}
