import './NavBar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import TankLogo from '../../images/tank.png'
export function NavBarComponent(){
    return (
        <Navbar bg="dark" expand="lg" variant='dark'>
        <Container>
          <Navbar.Brand href="#home">Video Game Tracker <img class="tanksLogo" src={TankLogo} alt=''/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">All Video Games</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href="#deets">Login</Nav.Link>
          </Nav>
        
        </Container>
      </Navbar>  
    );
}