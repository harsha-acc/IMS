import DateComponent from "./DateComponent"
import DetailComponent from "./DetailComponent"
import ItemComponent from "./ItemComponent"
import BillComponent from "./BillComponent"
import NoteComponent from "./NoteComponent"
import Divider from './Divider'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { update } from "../app/invoiceReducer"
import { useNavigate } from "react-router-dom"
import { useParams, Link } from "react-router-dom"

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

function UpdateInvoice() {

  const { id } = useParams()
  const invoices = useSelector((state) => state.invoice.invoices)
  const [invoice, setInvoice] = useState({})
  const [initials, setInitials] = useState(initial);
  const [details, setDetails] = useState({ to: entity, from: entity });
  const [items, setItems] = useState([]);
  const [note, setNote] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    let x = invoices.filter((invoice) => invoice.initials.invoiceNumber === id)
    x = x[0]
    setInvoice(x)
    setInitials(x.initials)
    setDetails(x.details)
    setItems(x.items)
    setNote(x.note)
  },[])


  const updateInvoice = (e) => {
    e.preventDefault()
    const newInvoice = {
        initials,
        details,
        items,
        note
    }
    dispatch(update(newInvoice))
    navigate('/')
  }

  return (
    <form onSubmit={updateInvoice}>
        <header className='text-center container'>
            <div className='d-flex justify-content-between mt-3 mb-3 align-items-center'>
                <h1>Update Invoice</h1>
                <Link to='/'><button className='btn btn-success'>All Invoices</button></Link>
            </div>
        </header>
        {invoice &&
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
                <button className="btn btn-primary w-100 mb-3" type="submit">Update Invoice</button>
            </div>
        </div>
        }
    </form>
  )
}

export default UpdateInvoice
