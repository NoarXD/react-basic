import './Transaction.css'
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Item = ({title, amount})=>{
    return <li>{title} <span>-{amount}</span></li>
}

Item.propTypes={
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}

const Transaction = () => {
    const data = [
        {title:'huightrui',amount:677},
        {title:'uhtu',amount:8765}
    ]
    return (
        <>
            <ul className='list-item'>
                {data.map((e)=>{
                    return <Item {...e} key={uuidv4()}/>
                })}
            </ul>
        </>
    )
}

export default Transaction