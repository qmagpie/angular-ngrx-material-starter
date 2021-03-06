import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { AppState } from '@app/core';

import { todosReducer } from './todos/todos.reducer';
import { TodosState } from './todos/todos.model';
import { stockMarketReducer } from './stock-market/stock-market.reducer';
import { StockMarketState } from './stock-market/stock-market.model';
import { bookReducer } from './crud/books.reducer';
import { formReducer } from './form/form.reducer';
import { FormState } from './form/form.model';
import { Book, BookState } from './crud/books.model';
import { TableState } from './table/table.model';
import { tableReducer } from './table/table.reducer';

export const FEATURE_NAME = 'examples';
export const selectExamples = createFeatureSelector<State, ExamplesState>(
  FEATURE_NAME
);
export const reducers: ActionReducerMap<ExamplesState> = {
  todos: todosReducer,
  stocks: stockMarketReducer,
  books: bookReducer,
  form: formReducer,
  table: tableReducer
};

export interface ExamplesState {
  todos: TodosState;
  stocks: StockMarketState;
  form: FormState;
  books: BookState;
  table: TableState;
}

export interface State extends AppState {
  examples: ExamplesState;
}
