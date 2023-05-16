import './Transaction.css'
import PropTypes from 'prop-types';

const Item = ({title, amount})=>{
    return <li>{title} <span>-{amount}</span></li>
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