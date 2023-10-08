import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
const options = { year: 'numeric', month: '2-digit', day: '2-digit' };


function DateComponent({initials, setInitials, readonly}) {

  useEffect(() => {
    const updatedIntials = {...initials}
    updatedIntials['currentDate'] = new Date(Date.now()).toLocaleDateString('en-GB', options)
    updatedIntials['invoiceNumber'] = uuidv4()
    setInitials(updatedIntials)
  }, [])

  return (
    <div className='p-3'>
        <div className='d-flex justify-content-between mb-1'>
            <span><b>Current Date: </b> {initials.currentDate}</span>
            <span><b>Invoice ID: </b> {initials.invoiceNumber}</span>
        </div>
        <div className='d-flex'>
            <span className='d-flex justify-content-between align-items-center'>
                <b>Due: </b> &nbsp;
                {
                  (initials?.dueDate?.length === 0) ? <input type='date' className='form-control' required
                  onChange={(e) => {
                    const updatedIntials = {...initials}
                    updatedIntials['dueDate'] = (new Date(e.target.value).toLocaleDateString('en-GB', options))
                    setInitials(updatedIntials)
                  }}
                  disabled={readonly}
                />
                :<>{initials.dueDate}</>
                }

            </span>
        </div>
    </div>

  )
}

export default DateComponent
