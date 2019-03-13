import { createSelector } from '@ngrx/store';

import { ExamplesState, selectExamples } from '../examples.state';

export const selectElements = createSelector(
  selectExamples,
  (state: ExamplesState) => state.table.elements
);
