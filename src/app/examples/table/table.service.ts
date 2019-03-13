import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { PeriodicElement } from './table.model';
import { ELEMENTS } from './table.data';

@Injectable()
export class TableService {
  constructor() {}

  fetchElements(): Observable<Array<PeriodicElement>> {
    return of(ELEMENTS);
  }
}
