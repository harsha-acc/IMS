import DateComponent from "./DateComponent"
import DetailComponent from "./DetailComponent"
import ItemComponent from "./ItemComponent"
import BillComponent from "./BillComponent"
import NoteComponent from "./NoteComponent"
import Divider from './Divider'
import { useState } from "react"
import { useDispatch } from 'react-redux'
import { add } from "../app/invoiceReducer"
import { useNavigate, Link } from "react-router-dom"


const entity = {
    name: "",
    email: "",
    billingAddress: ""
}

const initial = {
    currentDate: "",
    dueDate: "",
    invoiceNumber: 0
}


function CreateInvoice() {

  const [initials, setInitials] = useState(initial)
  const [details, setDetails] = useState({ to: entity, from: entity })
  const [items, setItems] = useState([])
  const [note, setNote] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()




  const addInvoice = (e) => {
    e.preventDefault()
    const newInvoice = {
        initials,
        details,
        items,
        note
    }
    dispatch(add(newInvoice))
    navigate('/')
  }

  return (
    <form onSubmit={addInvoice}>
        <header className='text-center container'>
            <div className='d-flex justify-content-between mt-3 mb-3 align-items-center'>
                <h1>Create Invoice</h1>
                <Link to='/'><button className='btn btn-success'>All Invoices</button></Link>
            </div>
        </header>
        <div className='container border rounded mt-3 mb-3'>
            <DateComponent initials={initials} setInitials={setInitials} />
            <Divider />
            <DetailComponent details={details} setDetails={setDetails} />
            <Divider />
            <ItemComponent items={items} setItems={setItems} />
            <Divider />
            <BillComponent items={items} />
            <Divider />
            <NoteComponent note={note} setNote={setNote} />
            <div>
                <button className="btn btn-primary w-100 mb-3" type="submit">Add Invoice</button>
            </div>
        </div>
    </form>
  )
}

export default CreateInvoice
