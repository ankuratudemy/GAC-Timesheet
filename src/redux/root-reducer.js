import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import submitTimesheetReducer from './submit-timesheet/submit-timesheet.reducer'
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
import viewTimesheetReducer from './view-timesheet/view-timesheet.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
};


const appReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
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
