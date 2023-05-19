// import { useContext } from 'react';
// import DataContext from '../Data/DataContext';
import './Transaction.css'
import PropTypes from 'prop-types';

const Item = ({title, amount})=>{
    const status = amount < 0 ? 'expense':'income'
    const symbol = amount < 0 ? '':'+'
    return <li className={status}>{title}<span>{symbol}{amount}</span></li>
}

Item.propTypes={
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}

const Transaction = (e) => {
    const {items} = e
    return (
        <>
            <ul className='list-item'>
                {items.map((e, index)=>{
                    return <Item {...e} key={index+1}/>
                })}
            </ul>
        </>
    )
}

export default Transaction