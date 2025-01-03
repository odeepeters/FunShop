import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen.js';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/esm/Badge.js';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';
import { store } from './store';
import CartScreen from './screens/CartScreen.js';
import SigninScreen from './screens/SigninScreen.js';


function App() {
  const { state } = useContext(store);
  const { cart } = state;
   return (
    <BrowserRouter>
    <div className="d-flex flex-column site-container">
      <header> 
        <Navbar bg="dark" variant="dark">
          <Container>   
            <LinkContainer to="/">   
              <Navbar.Brand>FunShop</Navbar.Brand>
            </LinkContainer>
            <Nav className="me-auto">
              <Link to="/cart" className="nav-link">
              Cart
              {cart.cartItems.length > 0 && (
                <Badge pill bg="danger">
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0 )} 
                </Badge>
              )}
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container className='mt-3'>
        <Routes>
          <Route path="/product/:slug" element={<ProductScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/signin" element={<SigninScreen />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
        </Container>
      </main>
      <footer>
        <div className='text-center'>
          All rights reserved
        </div>
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
