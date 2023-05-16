import './App.css';
import Transaction from './components/Transaction';
import From from './components/From';
import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';


const Title = () => <h1 className='title'>Noodle soup</h1>

function App() {
  const initData = [
    {title:'huightrui',amount:677},
    {title:'uhtu',amount:8765}
 ]
  const [items,setItems] = useState(initData)
  const onAddNewItem = (newItem)=>{
    setItems((prevItem)=>{
      return [newItem,...prevItem]
    })
  }
  return (
    <>
      <div className='container'>
        <Title/>
        <From onAddItem={onAddNewItem}/>
        <Transaction items={items}/>
      </div>
    </>
  )
}

export default App;
