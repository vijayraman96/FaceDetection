// @ts-nocheck

import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Auth from '../Auth/reducer';
import Employee from '../Employee/reducer'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['Auth'],
};

const rootReducer = combineReducers({
  Auth,
  Employee

});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export {store, persistor};
export type RootState = ReturnType<typeof rootReducer>;
