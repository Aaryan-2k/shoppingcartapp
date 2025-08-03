import './App.css';
import NavBar from './components/NavBar'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'

function App() {
  return (
    <div>
    <div className='top'>
      <NavBar/>
    </div>
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/cart' element={<Cart></Cart>}/>
      </Routes>
    </div>
    </div>


  );
}

export default App;
