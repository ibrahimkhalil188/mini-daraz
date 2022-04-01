
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Order from './Components/Order/Order';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='order' element={<Order></Order>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>

      </Routes>

    </div>
  );
}

export default App;
