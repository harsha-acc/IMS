import Divider from './Divider'

function ItemComponent({items, setItems, readonly}) {

  const addItem = () => {
    const newItem = {
        name: "",
        qty: 0,
        price: 0,
        description: ""
    }
    setItems([...items, newItem])
  }

  const deleteItem = (key) => {
    setItems([...items.slice(0, key), ...items.slice(key + 1)])
  }


  return (
    <div className='p-3'>
        <div className='row'>
            <div className='row'>
                <b className='col-9'>ITEM</b>
                <b className='col-1'>QTY</b>
                <b className='col-1'>PRICE($)</b>
                <b className='col-1'>ACTION</b>
            </div>
            <Divider />
            {
                items && items.map((item, key) => {
                    return(
                        <>
                        <div className='row'>
                            <div className='col-9'>
                                <input type='text' className='form-control' placeholder='Name'
                                required
                                    value={item.name}
                                    disabled={readonly}
                                    onChange={(e) => {
                                        const updatedItems = [...items];
                                        updatedItems[key] = { ...updatedItems[key], name: e.target.value };
                                        setItems(updatedItems);
                                    }}
                                />
                            </div>
                            <div className='col-1'>
                                <input type='number' className='form-control' placeholder='Qty'
                                required
                                    value={item.qty}
                                    disabled={readonly}
                                    onChange={(e) => {
                                        const updatedItems = [...items];
                                        updatedItems[key] = { ...updatedItems[key], qty: e.target.value };
                                        setItems(updatedItems);
                                    }}
                                />
                            </div>
                            <div className='col-1'>
                                <input type='number' className='form-control' placeholder='Price' required
                                    value={item.price}
                                    disabled={readonly}
                                    onChange={(e) => {
                                        const updatedItems = [...items];
                                        updatedItems[key] = { ...updatedItems[key], price: e.target.value };
                                        setItems(updatedItems);
                                    }}
                                />
                            </div>
                            <div className='col-1'>
                                <button className='btn btn-danger'
                                    type='button'
                                    onClick={() => {deleteItem(key)}}>Delete</button>
                            </div>
                        </div>
                        <div className='row mt-2'>
                            <div className='col-9'>
                                <input type='text' className='form-control' placeholder='Description' required
                                    value={item.description}
                                    disabled={readonly}
                                    onChange={(e) => {
                                        const updatedItems = [...items];
                                        updatedItems[key] = { ...updatedItems[key], description: e.target.value };
                                        setItems(updatedItems);
                                    }}
                                />
                            </div>
                        </div>
                        <Divider />
                        </>
                    )
                })
            }
        </div>
        { !readonly ? <button className='btn btn-primary' type='button' onClick={() => {addItem()}}>Add Item</button>: <></>}
    </div>
  )
}

export default ItemComponent
