import SubmitTimesheetActionTypes from './submit-timesheet.types';
//import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
  submitHidden: true,
  submitSelectedDays: [],
  submitHoverRange: {},
  submitTimesheetData: [],
  submitWeekNumber: null
};

const submitTimesheetReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SubmitTimesheetActionTypes.ST_TOGGLE_PICKER_HIDDEN:
      return {
        ...state,
        submitHidden: !state.submitHidden
      };
      case SubmitTimesheetActionTypes.ST_SET_SELECTED_DAYS:
      return {
        ...state,
        submitSelectedDays: action.payload
      };
      case SubmitTimesheetActionTypes.ST_SET_HOVER_RANGE:
      return {
        ...state,
        submitHoverRange: action.payload
      };
      case SubmitTimesheetActionTypes.ST_SET_TIMESHEET_DATA:
      return {
        ...state,
        submitTimesheetData: action.payload
      };
      case SubmitTimesheetActionTypes.ST_SET_WEEK_NUMBER:
      return {
        ...state,
        submitWeekNumber: action.payload
      };
    default:
      return state;
  }
};



export default submitTimesheetReducer;
