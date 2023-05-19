import './From.css'
import { useState, useEffect } from 'react'
const From = (props)=>{
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState(0)
    const [FromValid,setFromValid] = useState(false)

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
    useEffect(()=>{
        const CheckData = title.trim().length>0 && amount!==0
        setFromValid(CheckData)
    },[title, amount])
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
                
                    <button type='submit' className='btn' disabled={!FromValid}>Submit</button>
                
            </form>
        </div>
    )
}

export default From