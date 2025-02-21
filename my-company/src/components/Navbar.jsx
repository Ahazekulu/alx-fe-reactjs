import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        display: 'flex', // Add display: flex to align items horizontally
        justifyContent: 'space-between', // Add justifyContent to space out the links
        backgroundColor: '#333',
        padding: '10px',
        color: 'white',
      }}
    >
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
        <Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</Link>
        <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
