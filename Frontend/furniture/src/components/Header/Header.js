
import React from 'react';
import './Header.css';
import logo from './svg/logo-color.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

const Header = (props) => {
  const { pathname } = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='container-fluid head1'>
      <nav className="navbar navbar-expand-lg ">
        <div className="container head">
          <img src={logo} alt="Logo" onClick={scrollToTop}></img>
          <Link to={'/'} className="navbar-brand text-white" id='text' >RattindoFurniture</Link>
          <button className="navbar-toggler" type="button" style={{backgroundColor: 'white'}} data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to={'/'} className={`nav-link text-white fs-5 ${pathname === '/' ? 'active' : ''}`} onClick={scrollToTop}>Дома</Link>
              </li>
              <li className="nav-item">
                <Link to={'/allProducts'} className="nav-link text-white fs-5">Производи</Link>
              </li>
              <li className="nav-item">
                <Link to={'/aboutUs'} className="nav-link text-white fs-5">За нас</Link>
              </li>
              <li className="nav-item">
                <Link to={'/shoppingCart'} className="nav-link text-white fs-5" onClick={scrollToTop}>
                  <FontAwesomeIcon icon={faCartShopping} />
                  <span className="badge text-bg-outline-dark">{props.items.length}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;





























