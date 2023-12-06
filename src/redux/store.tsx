import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import { createLogger } from 'redux-logger';
import { AuthApi } from '../apis/authAPIs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from './reducers/authReducer';
import { GeneralApi } from '../apis/generalAPIs';

const persistConfig = {
  key: 'root',
  version: 1,
  whitelist: ["authReducer"], //data to be saved in phone cache even after app closes
  storage: AsyncStorage,
}

//declare multiple reducers of the ap
const reducers = combineReducers({
  [AuthApi.reducerPath]: AuthApi.reducer,
  "authReducer": authReducer,
  [GeneralApi.reducerPath]: GeneralApi.reducer,
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({

  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
    }).concat([
      //logger for debugging
      createLogger(),
      AuthApi.middleware,
      GeneralApi.middleware,
    ])

});

export const persistor = persistStore(store)

setupListeners(store.dispatch)
