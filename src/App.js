import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewInvoices from './components/ViewInvoices';
import CreateInvoice from './components/CreateInvoice';
import UpdateInvoice from './components/UpdateInvoice';
import IndividualInvoice from './components/IndividualInvoice';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <ViewInvoices /> }/>
        <Route path='/create-invoice' element={ <CreateInvoice /> }/>
        <Route path='/update-invoice/:id' element={ <UpdateInvoice /> }/>
        <Route path='/view-invoice/:id' element={ <IndividualInvoice /> }/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
