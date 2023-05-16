import './From.css'
import { useState } from 'react'
const From = (props)=>{
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState(0)

    const inputTitle = (e)=>{
        setTitle(e.target.value)
    }
    const inputAmount = (e)=>{
        setAmount(e.target.value)
    }
    const saveItem = (e)=>{
        e.preventDefault()
        const itemData = {
            title,
            amount:Number(amount)
        }
        props.onAddItem(itemData)
        setTitle('')
        setAmount(0)
    }
    return (
        <div>
            <form onSubmit={saveItem}>
                <div className='from-control'>
                    <label>Name</label>
                    <input type='text' onChange={inputTitle} value={title}></input>
                </div>
                <div className='from-control'>
                    <label>Amount</label>
                    <input type='number' onChange={inputAmount} value={amount}></input>
                </div>
                
                    <button type='submit' className='btn'>Submit</button>
                
            </form>
        </div>
    )
}

export default From