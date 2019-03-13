import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild
} from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { PeriodicElement } from '../table.model';
import { TableService } from '../table.service';

@Component({
  selector: 'anms-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {
  constructor(private tableService: TableService) {}

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

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.tableService
      .fetchElements()
      .pipe()
      .subscribe(data => {
        this.dataSource.data = data;
      });
  }
}
