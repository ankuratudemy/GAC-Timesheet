import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import submitTimesheetReducer from './submit-timesheet/submit-timesheet.reducer'
import viewTimesheetReducer from './view-timesheet/view-timesheet.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
};


const appReducer = combineReducers({
  user: userReducer,
  submitTimesheet: submitTimesheetReducer,
  viewTimesheet: viewTimesheetReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    storage.removeItem('persist:root')
    state = undefined

  }
  return appReducer(state, action)
}
export default persistReducer(persistConfig, rootReducer);
