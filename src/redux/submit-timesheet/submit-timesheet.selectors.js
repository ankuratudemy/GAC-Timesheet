import { createSelector } from 'reselect';

const selectSubmitTimesheet = state => state.submitTimesheet;



export const selectSubmitPickerHidden = createSelector(
  [selectSubmitTimesheet],
  submitTimesheet => submitTimesheet.submitHidden
);

export const selectSubmitSelectedDays = createSelector(
  [selectSubmitTimesheet],
  submitTimesheet => submitTimesheet.submitSelectedDays
);


export const selectSubmitHoverRange = createSelector(
  [selectSubmitTimesheet],
  submitTimesheet => submitTimesheet.submitHoverRange
);

export const selectSubmitWeekNumber = createSelector(
  [selectSubmitTimesheet],
  submitTimesheet => submitTimesheet.submitWeekNumber
);

export const selectSubmitTimesheetData = createSelector(
  [selectSubmitTimesheet],
  submitTimesheet => submitTimesheet.submitTimesheetData
);







