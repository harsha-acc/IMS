import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
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
    duplicate: (state, action) => {
      //finding the invoice
      let newInvoice = state.invoices.filter((invoice) => invoice.initials.invoiceNumber === action.payload.initials.invoiceNumber)
      newInvoice = newInvoice[0]
      //add
      newInvoice.initials.invoiceNumber = uuidv4() //unique id
      state.invoices.push(newInvoice)
    }
  }
});

export const { add, update, destroy, duplicate } = invoiceSlice.actions;
export default invoiceSlice.reducer;
