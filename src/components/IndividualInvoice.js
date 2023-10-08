import DateComponent from "./DateComponent"
import DetailComponent from "./DetailComponent"
import ItemComponent from "./ItemComponent"
import BillComponent from "./BillComponent"
import NoteComponent from "./NoteComponent"
import Divider from './Divider'
import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

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

function IndividualInvoice() {

  const { id } = useParams()
  const invoices = useSelector((state) => state.invoice.invoices)
  const [invoice, setInvoice] = useState({})
  const [initials, setInitials] = useState(initial);
  const [details, setDetails] = useState({ to: entity, from: entity });
  const [items, setItems] = useState([]);
  const [note, setNote] = useState("");

  useEffect(() => {
    let x = invoices.filter((invoice) => invoice.initials.invoiceNumber === id)
    x = x[0]
    setInvoice(x)
    setInitials(x.initials)
    setDetails(x.details)
    setItems(x.items)
    setNote(x.note)
  },[])


  return (
    <form>
        <header className='text-center container'>
            <div className='d-flex justify-content-between mt-3 mb-3 align-items-center'>
                <h1>Invoice</h1>
                <Link to='/'><button className='btn btn-success'>All Invoices</button></Link>
            </div>
        </header>
        {invoice &&
        <div className='container border rounded mt-3 mb-3'>
            <DateComponent initials={initials} setInitials={setInitials} readonly/>
            <Divider />
            <DetailComponent details={details} setDetails={setDetails} readonly/>
            <Divider />
            <ItemComponent items={items} setItems={setItems} readonly/>
            <Divider />
            <BillComponent items={items} readonly/>
            <Divider />
            <NoteComponent note={note} setNote={setNote} readonly/>
        </div>
        }
    </form>
  )
}

export default IndividualInvoice
