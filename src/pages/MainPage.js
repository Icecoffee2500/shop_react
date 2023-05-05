/* eslint-disable */
import '../App.css';
import '../font.css';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import {data, cardData} from '../component/data.js';
import Product from '../component/Product';
import MyCard from '../component/MyCard';
import axios from 'axios';

let MainPage = (props) => {
    let shoes = props.shoes;
    // let updateShoes = props.updateShoes;
    let card = props.card;
    console.log(typeof props.updateShoes);

    let fetchData = () => {
      axios.get('https://codingapple1.github.io/shop/data3.json')
      .then((response)=>{
        let newData = [...shoes, ...response.data];
        props.updateShoes(newData);
      })
      .catch((error)=>{
        console.log(error);
        console.log("실패함 ㅅㄱ");
      })
}

    return (
      <>
        <Row className="grid-container">
          {
            card.map(function(a, i) {
              return (
                <MyCard card = {a} key = {i} idx = {i} />
              );
            })
          }
        </Row>
  
        <Row className="grid-container">
          {
            shoes.map(function(a, i){
              return (
                <Product shoes = {a} key = {i} />
              );
            })
          }
        </Row>
        <button onClick={ fetchData }> 서버요청 </button>
      </>
    )
}

export default MainPage;