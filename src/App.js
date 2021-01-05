import React, {  useState } from 'react'
import './App.css';
import Banner from './components/Banner';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  const [Cart_items,setCart_items] = useState([])
  return (
    <div className="App">
      <Navbar Cart_items={Cart_items}/>
      <Banner/>
      <Main setCart_items={setCart_items} Cart_items={Cart_items}/>
    </div>
  );
}

export default App;
