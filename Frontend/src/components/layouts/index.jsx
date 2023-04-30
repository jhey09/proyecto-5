import React, { useContext } from 'react'
import { Navbar, Container, Nav, Form } from 'react-bootstrap'
import { ThemeContext } from '../../context/ThemeContext';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const IndexLayout = ({ render }) => {
  console.log(render)
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { userData, logout } = useContext(UserContext)
  const navigation = useNavigate()

  const handleLogout = () =>{
    logout()
    navigation('/')
  }

  return (
    <>
      <Navbar bg={theme} variant={theme}>
        <Container>
          <Navbar.Brand href="/">TIENDA Fitness</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {!userData &&
              <Nav.Link href="/register">Registrarse</Nav.Link>
            }
            {!userData &&
              <Nav.Link href="/login">Iniciar sesion</Nav.Link>
            }
             {
              userData &&
              <Nav.Link onClick={handleLogout} >cerrar sesion</Nav.Link>
            },
            {
              userData &&
              <Nav.Link href="/profile">{userData.username}</Nav.Link>
            }
           
            <Nav.Link href="/checkout">Checkout</Nav.Link>
          </Nav>
          <Form>
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              onChange={() => toggleTheme()}
            />
          </Form>

        </Container>
      </Navbar>
      {render}
    </>
  )
}

export default IndexLayout