import SubmitTimesheetActionTypes from './submit-timesheet.types';

export const togglePickerHidden = () => ({
  type: SubmitTimesheetActionTypes.TOGGLE_PICKER_HIDDEN
});


export const setSelectedDays = selectedDays => ({
  type: SubmitTimesheetActionTypes.SET_SELECTED_DAYS,
  payload: selectedDays
});

export const setHoverRange = hoverRange => ({
  type: SubmitTimesheetActionTypes.SET_HOVER_RANGE,
  payload: hoverRange
});

export const setWeekNumber = weekNumber => ({
  type: SubmitTimesheetActionTypes.SET_WEEK_NUMBER,
  payload: weekNumber
});

export const setTimesheetData = timesheetData => ({
  type: SubmitTimesheetActionTypes.SET_TIMESHEET_DATA,
  payload: timesheetData
});

