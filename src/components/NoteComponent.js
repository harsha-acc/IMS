import React from 'react'

function NoteComponent({note, setNote, readonly}) {
  return (
    <div className='p-3'>
        <div className='row'>
          <div className='col-12'>
            <span><b>Notes</b></span>
            <input
              required
              className='form-control'
              value={note}
              disabled={readonly}
              placeholder='Thanks for your business'
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
        </div>
    </div>
  )
}

export default NoteComponent
