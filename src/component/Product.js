/* eslint-disable */
import '../App.css';
import '../font.css';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

let Product = (props) => {
    let navigate = useNavigate();
    return (
        <>
            <Col sm style={{ width: '18rem' }}>
                <img onClick={ () => {navigate( '/detail/'+props.shoes.id )} } className='mycard' src={props.shoes.img_src} />
                <Col sm style={{height : "50px", marginBottom : "16px"}}>
                    <h4 className='second_font'>{props.shoes.subtitle}</h4>
                    <h4 className='bold_font'>{props.shoes.title}</h4>
                </Col>
                <p className='second_font'>
                    {props.shoes.content}
                </p>
            </Col>
        </>
    )
}

export default Product;