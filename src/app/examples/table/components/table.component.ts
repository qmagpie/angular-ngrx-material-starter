import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild
} from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { PeriodicElement } from '../table.model';
import { State } from '../../examples.state';
import { selectElements } from '../table.selectors';
import { ActionPeriodicElementsRetrieve } from '../table.actions';

@Component({
  selector: 'anms-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {
  constructor(public store: Store<State>) {}

  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'family',
    'bondingType',
    'standardState'
  ];
  dataSource = new MatTableDataSource<PeriodicElement>();
  elements$: Observable<Array<PeriodicElement>>;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

    this.store.pipe(select(selectElements)).subscribe(data => {
      this.dataSource.data = data;
    });
    this.store.dispatch(new ActionPeriodicElementsRetrieve());
  }
}
