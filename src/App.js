import './App.css';
import Transaction from './components/Transaction';

const Title = () => <h1 className='title'>Noodle soup</h1>

function App() {
  return (
    <>
      <div className='container'>
        <Title/>
        <Transaction/>
      </div>
    </>
  )
}

export default App;
