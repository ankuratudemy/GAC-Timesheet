import { createSelector } from 'reselect';

const selectSubmitTimesheet = state => state.submitTimesheet;



export const selectPickerHidden = createSelector(
  [selectSubmitTimesheet],
  submitTimesheet => submitTimesheet.hidden
);

export const selectSelectedDays = createSelector(
  [selectSubmitTimesheet],
  submitTimesheet => submitTimesheet.selectedDays
);


export const selectHoverRange = createSelector(
  [selectSubmitTimesheet],
  submitTimesheet => submitTimesheet.hoverRange
);

export const selectWeekNumber = createSelector(
  [selectSubmitTimesheet],
  submitTimesheet => submitTimesheet.weekNumber
);

export const selectSubmitTimesheetData = createSelector(
  [selectSubmitTimesheet],
  submitTimesheet => submitTimesheet.timesheetData
);







