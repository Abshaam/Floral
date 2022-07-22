import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Search } from 'react-bootstrap-icons';
import React,{ Outlet} from "react-router-dom"
import Badge from 'react-bootstrap/Badge'
import './App.css';

function App() {
  return (
    <>
    
    <Navbar bg="light" expand="lg" >
    
      <Container fluid  
      // style={{ paddingLeft: 400, paddingRight: 200 }}
      >
     
    
        {/* <Navbar.Brand href="#">FLORAL</Navbar.Brand> */}
        <h1>
        <Badge bg="secondary">Floral</Badge>
       </h1>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' , marginLeft: 20}}
            navbarScroll
          >
            <Nav.Link href="/home"> Home </Nav.Link>
            <Nav.Link href="/about"> About </Nav.Link>
            <NavDropdown title=" Categories " id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Annual </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Perennial
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
               All
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success"><Search/></Button>
          </Form>
        </Navbar.Collapse>
      </Container>

    </Navbar>

    <Outlet/>

    </>
  );
}

export default App;
