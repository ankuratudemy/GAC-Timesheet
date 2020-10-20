import ViewTimesheetActionTypes from './view-timesheet.types';
//import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  selectedDays: [],
  hoverRange: {},
  timesheetData: [],
  weekNumber: null
};

const viewTimesheetReducer = (state = INITIAL_STATE, action) => {
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
      case ViewTimesheetActionTypes.SET_HOVER_RANGE:
      return {
        ...state,
        hoverRange: action.payload
      };
      case ViewTimesheetActionTypes.SET_TIMESHEET_DATA:
      return {
        ...state,
        timesheetData: action.payload
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
