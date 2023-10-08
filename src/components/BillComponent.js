import React from 'react'
import Divider from './Divider'
import { useState, useEffect } from 'react'

function BillComponent({ items, readonly }) {

  const [subTotal, setSubTotal] = useState(0)
  const [total, setTotal] = useState(subTotal)
  const [tax, setTax] = useState(0)
  const [discount, setDiscount] = useState(0)

  useEffect(() => {
    setSubTotal(items.reduce((sum, item) => sum + item.price * item.qty, 0))
  },[items])

  useEffect(() => {
    setTotal(subTotal + (subTotal * (tax/100.0)) - (subTotal * (discount/100.0)) )
  }, [subTotal, tax, discount])

  return (
    <div className='p-3'>
        <div className='row'>
            <div className='col-6'>{/**/}</div>
            <div className='col-6 container'>
                <div className='row align-items-center mb-1'>
                  <span className='col-3'><b >Subtotal:($)</b></span>
                  <span className='col-9'><input type='number' className='form-control' value={ subTotal } disabled /></span>
                </div>
                <div className='row align-items-center mb-1'>
                  <span className='col-3'><b >Tax:(%)</b></span>
                  <span className='col-9'><input type='number' className='form-control' value={tax} onChange={(e) => setTax(e.target.value)} disabled={readonly} required/></span>
                </div>
                <div className='row align-items-center mb-1'>
                  <span className='col-3'><b >Discount:(%)</b></span>
                  <span className='col-9'><input type='number' className='form-control' value={discount} onChange={(e) => setDiscount(e.target.value)} disabled={readonly} required/></span>
                </div>
                <Divider />
                <div className='row align-items-center mb-1'>
                  <span className='col-3'><b>Total:($)</b></span>
                  <span className='col-9'><input type='number' className='form-control' value={ total } disabled/></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BillComponent
