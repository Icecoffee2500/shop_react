/* eslint-disable */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';

function MyNav() {
    return (
        <div className="Nav" id='headerStyle'>
            <Navbar collapseOnSelect expand="lg" bg='white' sticky='top'>
                <Container>
                    <Navbar.Brand href="#home"><img className='img' src = '/imgs/magic_botton.png'/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link href="#home">home</Nav.Link>
                        <Nav.Link href="#features">features</Nav.Link>
                        <Nav.Link href="#pricing">pricing</Nav.Link>
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