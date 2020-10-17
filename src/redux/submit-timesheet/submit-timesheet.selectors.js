import { createSelector } from 'reselect';

const selectTimesheet = state => state.submitTimesheet;



export const selectPickerHidden = createSelector(
  [selectTimesheet],
  submitTimesheet => submitTimesheet.hidden
);

export const selectSelectedDays = createSelector(
  [selectTimesheet],
  submitTimesheet => submitTimesheet.selectedDays
);


export const selectHoverRange = createSelector(
  [selectTimesheet],
  submitTimesheet => submitTimesheet.hoverRange
);

export const selectWeekNumber = createSelector(
  [selectTimesheet],
  submitTimesheet => submitTimesheet.weekNumber
);

export const selectTimesheetData = createSelector(
  [selectTimesheet],
  submitTimesheet => submitTimesheet.timesheetData
);







