/* eslint-disable */
import MyNav from './MyNav';
import './App.css';
import './font.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
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
        <Col sm style={{ width: '18rem' }}>
          <img className='mycard' src='./imgs/scott-jordan.png' />
          <Col sm style={{height : "50px", marginBottom : "16px"}}>
            <h4 className='second_font'>Air Jordan 1 Low</h4>
            <h4 className='bold_font'>Travis Scott x Fragment</h4>
          </Col>
          <p className='second_font'>
            It's the rare sneaker that satisfies the "rule of three". And no need for double-takes at the Sail Swoosh—it's indeed backwards—now a signature Scott touch for his Air Jordan 1 designs.
          </p>
        </Col>
        <Col sm style={{ width: '18rem' }}>
          <img className='mycard' src='./imgs/cybertruck.avif' />
          <Col sm style={{height : "50px", marginBottom : "16px"}}>
            {/* <img src='./imgs/Cybertrucklogo.png' style={{objectFit: "contain"}}/> */}
            <h4 className='bold_font'>Cyber Truck</h4>
          </Col>
          <p className='second_font'>
            Cybertruck is built with an exterior shell made for ultimate durability and passenger protection. Starting with a nearly impenetrable exoskeleton, every component is designed for superior strength and endurance, from Ultra-Hard 30X Cold-Rolled stainless-steel structural skin to Tesla armor glass.
          </p>
        </Col>
        <Col sm style={{ width: '18rem' }}>
          <img className='mycard' src='./imgs/apple-watch.png' />
          <Col sm style={{height : "50px", marginBottom : "16px"}}>
            <h4 className='bold_font'>Apple Watch</h4>
          </Col>
          <p className='second_font'>Apple Watch can do what your other devices can’t because it’s on your wrist. When you wear it, you get a fitness partner that measures all the ways you move, meaningful health insights, and a connection to the people and things you care about most.</p>
        </Col>
      </Row>
      
    </div>
  );
}

export default App;
