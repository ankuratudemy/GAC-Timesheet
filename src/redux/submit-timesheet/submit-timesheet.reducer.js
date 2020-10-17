import SubmitTimesheetActionTypes from './submit-timesheet.types';
//import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  selectedDays: [],
  hoverRange: {},
  timesheetData: [],
  weekNumber: null
};

const submitTimesheetReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SubmitTimesheetActionTypes.TOGGLE_PICKER_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
      case SubmitTimesheetActionTypes.SET_SELECTED_DAYS:
      return {
        ...state,
        selectedDays: action.payload
      };
      case SubmitTimesheetActionTypes.SET_HOVER_RANGE:
      return {
        ...state,
        hoverRange: action.payload
      };
      case SubmitTimesheetActionTypes.SET_TIMESHEET_DATA:
      return {
        ...state,
        timesheetData: action.payload
      };
      case SubmitTimesheetActionTypes.SET_WEEK_NUMBER:
      return {
        ...state,
        weekNumber: action.payload
      };
    default:
      return state;
  }
};



export default submitTimesheetReducer;
