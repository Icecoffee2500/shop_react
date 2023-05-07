/* eslint-disable */
import { useParams } from 'react-router-dom';
import '../App.css';
import '../font.css';
import Col from 'react-bootstrap/Col';
import { Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addItem } from '../store';

let DetailPage = (props) => {

  let state = useSelector((state) => state )
  let dispatch = useDispatch()
  let {id} = useParams();
  let rightShoes = props.shoes.find(function(x){
    return x.id == id;
  });
  let [tab, setTab] = useState(0);

  let [fade, setFade] = useState('');
  

  console.log(rightShoes);

  return (
    <div className='start' >
      <img className='mycard' src={rightShoes.img_src} />
      <Col sm style={{height : "50px", marginBottom : "16px"}}>
          <h4 className='second_font'>{rightShoes.subtitle}</h4>
          <h4 className='bold_font'>{rightShoes.title}</h4>
      </Col>
      <p className='second_font'>
          {rightShoes.content}
      </p>
      <Button variant="outline-danger" onClick={()=>{
        let result = {id : 1, name : 'rightShoes.title', count : 1}
        dispatch(addItem( rightShoes.title ))
      }}> 장바구니에 추가 </Button>

      <Nav variant="tabs"  defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link eventKey="link0" onClick={ () => setTab(0) }>버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link1" onClick={ () => setTab(1) } >버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link2" onClick={ () => setTab(2) } >버튼2</Nav.Link>
          </Nav.Item>
      </Nav>
      
      <TabContent tab = { tab } />



    </div>
  )
}
function TabContent(props) {
  let tab = props.tab;
  if(tab == 0) {
    return <div> 내용0 </div>
  }
  if(tab == 1) {
    return <div> 내용1 </div>
  }
  if(tab == 2) {
    return <div> 내용2 </div>
  }
}


export default DetailPage;
