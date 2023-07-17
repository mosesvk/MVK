import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
            <Container>
                <Navbar.Brand href='/'>MERN App</Navbar.Brand>
                <Navbar.Toggle></Navbar.Toggle>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header