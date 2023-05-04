/* eslint-disable */
import MyNav from './MyNav';
import './App.css';
import './font.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import {data, cardData} from './data.js';

function App() {

  let [shoes] = useState(data);
  let [card, setCard] = useState(cardData);

  return (
    <div className="App">
      {/* HEADER */}
      <MyNav />
      {/* BODY */}
      {/* <div className='main-bg' style={{ backgroundImage : 'url(./imgs/bg_nike.png)' }}></div> */}

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
      
    </div>
  );
}
export default App;

let Product = (props) => {
  return (
    <Col sm style={{ width: '18rem' }}>
      <img className='mycard' src={props.shoes.img_src} />
      <Col sm style={{height : "50px", marginBottom : "16px"}}>
        <h4 className='second_font'>{props.shoes.subtitle}</h4>
        <h4 className='bold_font'>{props.shoes.title}</h4>
      </Col>
      <p className='second_font'>
        {props.shoes.content}
      </p>
    </Col>
  )
}

let MyCard = (props) => {
  return (
    <Card className={'card' + (props.idx+1)} style={{ width: '18rem' }}>
      <Card.Img className='image' variant="top" src={props.card.img_src} />
      <Card.Body>
        <Card.Title className='main_font'> {props.card.title} </Card.Title>
        <Card.Text className='second_font' > {props.card.content} </Card.Text>
      </Card.Body>
    </Card>
  )
}