import ViewTimesheetActionTypes from './view-timesheet.types';
import { getViewTSData } from './viewTimesheet.utils';

const INITIAL_STATE = {
  hidden: true,
  selectedDays: [],
  hoverRange: {},
  timesheetData: [],
  weekNumber: null,
  viewTSData: []
};

const viewTimesheetReducer =  (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ViewTimesheetActionTypes.TOGGLE_PICKER_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
      case ViewTimesheetActionTypes.SET_SELECTED_DAYS:
      return {
        ...state,
        selectedDays: action.payload
      };
      case ViewTimesheetActionTypes.SET_VIEWTS_DATA:
        console.log("Inside Reducer case",action.payload)
        return {

          ...state,
          viewTSData:  getViewTSData('/gac/viewTimeSheet',  {svsId: action.payload})
        };
      case ViewTimesheetActionTypes.SET_HOVER_RANGE:
      return {
        ...state,
        hoverRange: action.payload
      };
     
      case ViewTimesheetActionTypes.SET_WEEK_NUMBER:
      return {
        ...state,
        weekNumber: action.payload
      };
    default:
      return state;
  }
};



export default viewTimesheetReducer;
