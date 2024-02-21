import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import StateBasics from './components/StateBasics';
import Counter from './components/Counter';
import Signup from './components/Signup';
import UseEffect from './components/UseEffect';
import { Route, Routes } from 'react-router-dom';
import Maping from './components/Maping';
import Nemaping from './components/Nemaping';
import Api from './components/Api';
import GridGet from './components/GridGet';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/sign' element={<Signup/>}></Route>
        <Route path='/cont' element={<Counter/>}></Route>
        <Route path='/co' element={<Maping/>}></Route>
        <Route path='/ap' element={<Api/>}></Route>
        <Route path='/gr' element={<GridGet/>}></Route>
        
       


      </Routes>
    
    
      
    </div>
  );
}

export default App;
