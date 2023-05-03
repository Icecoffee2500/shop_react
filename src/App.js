/* eslint-disable */
import MyNav from './MyNav';
import './App.css';
import './font.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import data from './data.js';

function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">
      {/* HEADER */}
      <MyNav />
      {/* BODY */}
      {/* <div className='main-bg' style={{ backgroundImage : 'url(./imgs/bg_nike.png)' }}></div> */}

      <div className="flex" >
        <Card className='card' style={{ width: '18rem' }}>
          <Card.Img className='image' variant="top" src="./imgs/swoosh.png" />
          <Card.Body>
            <Card.Title className='main_font'>Nike</Card.Title>
            <Card.Text className='second_font' >
              Just Do It.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='card' style={{ width: '18rem' }}>
          <Card.Img className='image' variant="top" src="./imgs/tesla-logo-png.png" />
          <Card.Body>
            <Card.Title className='main_font'>Tesla</Card.Title>
            <Card.Text className='second_font' >
              Just Do It.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='card' style={{ width: '18rem' }}>
          <Card.Img className='image' variant="top" src="./imgs/apple-logo.png" />
          <Card.Body>
            <Card.Title className='main_font'>Apple</Card.Title>
            <Card.Text className='second_font' >
              Just Do It.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <Row>
        {
          shoes.map(function(a, i){
            return (
              <Product key={i} shoes = {shoes} idx = {i} />
            );
          })
        }
      </Row>
      
    </div>
  );
}
export default App;

let Product = (props) => {
  // console.log(props.idx);
  const idx = props.idx;
  return (
    <Col sm style={{ width: '18rem' }}>
      <img className='mycard' src={props.shoes[idx].img_src} />
      <Col sm style={{height : "50px", marginBottom : "16px"}}>
        <h4 className='second_font'>{props.shoes[idx].subtitle}</h4>
        <h4 className='bold_font'>{props.shoes[idx].title}</h4>
      </Col>
      <p className='second_font'>
        {props.shoes[idx].content}
      </p>
    </Col>
  )
}