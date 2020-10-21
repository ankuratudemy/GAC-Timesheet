import { createSelector } from 'reselect';

const selectViewTimesheet = state => state.viewTimesheet;



export const selectPickerHidden = createSelector(
  [selectViewTimesheet],
  viewTimesheet => viewTimesheet.hidden
);

export const selectSelectedDays = createSelector(
  [selectViewTimesheet],
  viewTimesheet => viewTimesheet.selectedDays
);


export const selectHoverRange = createSelector(
  [selectViewTimesheet],
  viewTimesheet => viewTimesheet.hoverRange
);

export const selectWeekNumber = createSelector(
  [selectViewTimesheet],
  viewTimesheet => viewTimesheet.weekNumber
);

export const selectTimesheetData = createSelector(
  [selectViewTimesheet],
  viewTimesheet => viewTimesheet.timesheetData
);

export const selectViewTSData = createSelector(
  [selectViewTimesheet],
  viewTimesheet => viewTimesheet.viewTSDATA
);






