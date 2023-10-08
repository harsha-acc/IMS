import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  invoices: [],
};

const invoiceSlice = createSlice({
  name: 'invoice',
  initialState,
  reducers: {
    add: (state, action) => {
        state.invoices.push(action.payload)
    },
    update: (state, action) => {
      return {
        ...state,
        invoices: state.invoices.map((invoice) => {
          if (invoice.initials.invoiceNumber === action.payload.initials.invoiceNumber) {
            return {
              ...invoice,
              ...action.payload,
            };
          }
          return invoice;
        }),
      };
    },
    destroy: (state, action) => {
      state.invoices = state.invoices.filter((invoice) => invoice.initials.invoiceNumber !== action.payload.initials.invoiceNumber)
    },
  }
});

export const { add, update, destroy } = invoiceSlice.actions;
export default invoiceSlice.reducer;
