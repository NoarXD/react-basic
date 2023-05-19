import './App.css';
import Transaction from './components/Transaction';
import From from './components/From';
import { useState, useEffect } from 'react';
import DataContext from './Data/DataContext';
import Report from './components/report';


const Title = () => <h1 className='title'>Noodle soup</h1>

function App() {
  const initData = [
    {title:'huightrui',amount:677},
    {title:'uhtu',amount:-8765}
 ]
  const [items,setItems] = useState(initData)
  const [reportIncome,setReportIncome] = useState()
  const [reportExpense,setReporteExpense] = useState()
  const onAddNewItem = (newItem)=>{
    setItems((prevItem)=>{
      return [newItem,...prevItem]
    })
  }
  useEffect(()=>{
    const amount = items.map(items=>items.amount)
    const income = amount.filter(e=>e>0).reduce((total, e)=>total+e, 0)
    const expense = (amount.filter(e=>e<0).reduce((total, e)=>total+e, 0))*-1
    setReportIncome(income)
    setReporteExpense(expense)
  },[items])
  return (
    <>
      <DataContext.Provider value={
        {
          income: reportIncome,
          expense: reportExpense
        }
      }>
        <div className='container'>
          <Title/>
          <Report/>
          <From onAddItem={onAddNewItem}/>
          <Transaction items={items}/>
        </div>
      </DataContext.Provider>
    </>
  )
}

export default App;
