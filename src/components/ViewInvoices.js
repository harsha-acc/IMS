import React from 'react'
import Divider from './Divider'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { destroy, duplicate } from '../app/invoiceReducer'

function ViewInvoices() {

  const invoices = useSelector((state) => state.invoice.invoices)
  const dispatch = useDispatch()
  const deleteInvoice = (invoice) => {
    dispatch(destroy(invoice))
  }

  const duplicateInvoice = (invoice) => {
    dispatch(duplicate(invoice))
  }

  console.log(invoices)
  return (
    <div className='container'>
        <header className='text-center'>
            <div className='d-flex justify-content-between mt-3 mb-3 align-items-center'>
                <h1>All Invoices</h1>
                <Link to='/create-invoice'><button className='btn btn-success'>Create Invoice</button></Link>
            </div>
        </header>
        <Divider />
        <section className='container'>
            <ul class="list-group list-group-flush container">
                <li class="list-group-item">
                    <div className='row'>
                        <div className='col-1'><b>S.No </b></div>
                        <div className='col-8'><b>Invoice [From - To] Entities</b></div>
                        <div className='col-3 d-flex justify-content-center' >
                            <b>ACTIONS</b>
                        </div>
                    </div>
                </li>
                <br />
                {
                    invoices && invoices.map((invoice, key) => {
                        return <li class="list-group-item">
                            <div className='row'>
                                <div className='col-1'>{key + 1} </div>
                                <div className='col-9'>{invoice.details.from.name} - {invoice.details.to.name}</div>
                                <div className='col-2 d-flex justify-content-center' >
                                    <div>
                                        <Link to={`/view-invoice/${invoice.initials.invoiceNumber}`}>
                                            <button className='btn btn-primary mx-1'>View</button>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to={`/update-invoice/${invoice.initials.invoiceNumber}`}>
                                            <button className='btn btn-warning mx-1'>Update</button>
                                        </Link>
                                    </div>
                                    <div>
                                        <button className='btn btn-dark mx-1' onClick={() => duplicateInvoice(invoice)}>Duplicate</button>
                                    </div>

                                    <div><button className='btn btn-danger mx-1' onClick={() => deleteInvoice(invoice)}>Delete</button></div>
                                </div>
                            </div>
                        </li>
                    })
                }
            </ul>
        </section>
    </div>
  )
}

export default ViewInvoices
