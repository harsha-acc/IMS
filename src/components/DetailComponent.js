import React from 'react'

function DetailComponent({details, setDetails, readonly}) {
  return (
    <div className='p-3'>
      <div className='d-flex justify-content-between align-items-center'>
        <div className='container'>
          <b>Bill to</b> <br />
          <input className='form-control mt-2 mb-2' placeholder='Who is this invoice to?'
            disabled={readonly}
            required
            onChange={(e) => {
              const updatedDetails = { ...details };
              updatedDetails['to'] = { ...updatedDetails['to'], name: e.target.value };
              setDetails(updatedDetails);

            }}
            value={details['to'].name}
            />
          <input className='form-control mt-2 mb-2' placeholder='Email address'
          required
          type='email'
            value={details['to'].email}
            disabled={readonly}
            onChange={(e) => {
              const updatedDetails = { ...details };
              updatedDetails['to'] = { ...updatedDetails['to'], email: e.target.value };
              setDetails(updatedDetails);
            }}
          />
          <input className='form-control mt-2 mb-2' placeholder='Billing address' required
            value={details['to'].billingAddress}
            disabled={readonly}
            onChange={(e) => {
              const updatedDetails = { ...details };
              updatedDetails['to'] = { ...updatedDetails['to'], billingAddress: e.target.value };
              setDetails(updatedDetails);
            }}
          />
        </div>
        <div className='container'>
          <b>Bill from</b>
          <input className='form-control mt-2 mb-2' placeholder='Who is this invoice from?' required
            value={details['from'].name}
            disabled={readonly}
            onChange={(e) => {
              const updatedDetails = { ...details };
              updatedDetails['from'] = { ...updatedDetails['from'], name: e.target.value };
              setDetails(updatedDetails);
            }}
          />
          <input className='form-control mt-2 mb-2' placeholder='Email address'
            value={details['from'].email}
            type='email'
            required
            disabled={readonly}
            onChange={(e) => {
              const updatedDetails = { ...details };
              updatedDetails['from'] = { ...updatedDetails['from'], email: e.target.value };
              setDetails(updatedDetails);
            }}
          />
          <input className='form-control mt-2 mb-2' placeholder='Billing address'
            value={details['from'].billingAddress}
            required
            disabled={readonly}
            onChange={(e) => {
              const updatedDetails = { ...details };
              updatedDetails['from'] = { ...updatedDetails['from'], billingAddress: e.target.value };
              setDetails(updatedDetails);
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default DetailComponent
