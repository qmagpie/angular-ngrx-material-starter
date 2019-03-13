import { HttpErrorResponse } from '@angular/common/http';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  family: string;
  bondingType: string;
  standardState: string;
}

export interface TableState {
  loading: boolean;
  elements?: Array<PeriodicElement>;
  error?: HttpErrorResponse;
}
