import ViewTimesheetActionTypes from './view-timesheet.types';

export const togglePickerHidden = () => ({
  type: ViewTimesheetActionTypes.TOGGLE_PICKER_HIDDEN
});


export const setSelectedDays = selectedDays => ({
  type: ViewTimesheetActionTypes.SET_SELECTED_DAYS,
  payload: selectedDays
});

export const setHoverRange = hoverRange => ({
  type: ViewTimesheetActionTypes.SET_HOVER_RANGE,
  payload: hoverRange
});

export const setWeekNumber = weekNumber => ({
  type: ViewTimesheetActionTypes.SET_WEEK_NUMBER,
  payload: weekNumber
});



export const setViewTSData = userid => ({
  type: ViewTimesheetActionTypes.SET_VIEWTS_DATA,
  payload: userid
});

