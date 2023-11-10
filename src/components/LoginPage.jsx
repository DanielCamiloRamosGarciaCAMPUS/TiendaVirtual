// Pagina de Logeo

import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      {/* ... (otros elementos) */}
      <Nav className="ml-auto">
        <Link to="/login" className="nav-link text-light">
          <FaUser size={24} />
        </Link>
        <Link to="/carrito" className="nav-link text-light">
          <FaShoppingCart size={24} />
        </Link>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
