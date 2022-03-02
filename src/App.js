
import { Route,Routes } from 'react-router-dom'
import Home from  './component/Home/Home';
import Contactame from './component/Contactame/Contactame';
import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
     <Route exact path='/' element={<Home/>} />
      <Route exact path='/Contacto' element={<Contactame/>} /> 
      </Routes>
      </div>
  );
}

export default App;
