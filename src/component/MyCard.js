/* eslint-disable */
import '../App.css';
import '../font.css';
import Card from 'react-bootstrap/Card';


let MyCard = (props) => {
    return (
        <>
            <Card className={'card' + (props.idx+1)} style={{ width: '18rem' }}>
                <Card.Img className='image' variant="top" src={props.card.img_src} />
                <Card.Body>
                <Card.Title className='main_font'> {props.card.title} </Card.Title>
                <Card.Text className='second_font' > {props.card.content} </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}
export default MyCard;