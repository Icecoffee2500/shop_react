/* eslint-disable */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate, Outlet } from 'react-router-dom';
import '../App.css';

function MyNav() {

    let navigate = useNavigate();

    return (
        <div className="Nav" id='headerStyle' style={{marginBottom : "16px"}} >
            <Navbar collapseOnSelect expand="lg" bg='white' sticky='top'>
                <Container>
                    <Navbar.Brand href="#home"><img className='img' src = '/imgs/magic_botton.png'/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link onClick={ () => {navigate( '/' )} } > home </Nav.Link>
                        <Nav.Link onClick={ () => {navigate( '/detail/0' )} } > Detail </Nav.Link>
                        <Nav.Link onClick={ () => {navigate(-1)} } > 뒤로가기 </Nav.Link>
                        <Nav.Link onClick={ () => {navigate( '/cart' )} } > 장바구니 </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href = "#mypage"> 임태헌 </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default MyNav;