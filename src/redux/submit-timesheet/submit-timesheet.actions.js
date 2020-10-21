import SubmitTimesheetActionTypes from './submit-timesheet.types';

export const SubmitTogglePickerHidden = () => ({
  type: SubmitTimesheetActionTypes.ST_TOGGLE_PICKER_HIDDEN
});


export const setSubmitSelectedDays = submitSelectedDays => ({
  type: SubmitTimesheetActionTypes.ST_SET_SELECTED_DAYS,
  payload: submitSelectedDays
});

export const setSubmitHoverRange = submitHoverRange => ({
  type: SubmitTimesheetActionTypes.ST_SET_HOVER_RANGE,
  payload: submitHoverRange
});

export const setSubmitWeekNumber = submitWeekNumber => ({
  type: SubmitTimesheetActionTypes.ST_SET_WEEK_NUMBER,
  payload: submitWeekNumber
});

export const setSubmitTimesheetData = submitTimesheetData => ({
  type: SubmitTimesheetActionTypes.ST_SET_TIMESHEET_DATA,
  payload: submitTimesheetData
});

