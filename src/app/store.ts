import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { listCoffeeReducer } from 'src/features/coffee/coffeeSlice';
import { listTeaReducer } from 'src/features/tea/teaSlice';

export const store = configureStore({
  reducer: {
    listCoffees: listCoffeeReducer,
    listTeas: listTeaReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
