/* eslint-disable */
import MyNav from './component/MyNav';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import Cart from './pages/Cart';
import { data, cardData } from './component/data';
import './App.css';
import './font.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import { useCallback, useState } from 'react'

function App() {

  let [shoes, setShoes] = useState(data);
  let [card, setCard] = useState(cardData);

  let updateShoes = (new_data) => {
    setShoes(new_data);
  };
  // console.log(typeof updateShoes);

  return (
    <div className="App">

      {/* HEADER */}
      <MyNav />

      <Routes>
        <Route path='/' element={ <MainPage shoes = {shoes} card = {card} updateShoes = {updateShoes} /> } />
        <Route path='/detail/:id' element={ <DetailPage shoes = {shoes} /> } />
        <Route path='*' element={ <h1> 404 Error! 뒤로가셈 </h1> } />
        <Route path='/cart' element={ <Cart /> } />
      </Routes>
      
    </div>
  );
}
export default App;