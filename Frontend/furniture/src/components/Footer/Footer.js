import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return (
        <div class="container-fluid  footer">
    
          <div class="container">
            <footer class="py-3 mt-5">
              <ul class="nav justify-content-center pb-1 ">
                <li class="nav-item"><Link to={'/'} class="nav-link px-2 text-white">Дома</Link></li>
                <li class="nav-item"><Link to={'/allProducts'} class="nav-link px-2 text-white">Производи</Link></li>
                <li class="nav-item"><Link to={'/aboutUs'} class="nav-link px-2 text-white">За нас</Link></li>
              </ul>
              <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><Link to="https://www.instagram.com/rattindofurniture/" className="nav-link px-2 text-white"><FontAwesomeIcon className="fs-3" icon={faInstagram} /></Link></li>
                <li class="nav-item"><Link to="https://www.facebook.com/profile.php?id=100063648264209" class="nav-link px-2 text-white"><FontAwesomeIcon className="fs-3" icon={faSquareFacebook} /></Link></li>
                <li class="nav-item"><Link to="mailto:proba0801002@gmail.com" class="nav-link px-2 text-white"><FontAwesomeIcon className="fs-3" icon={faEnvelope} /></Link></li>
              </ul>
              <p class="text-center text-white">&copy; 2024 Rattindo Furniture</p>
            </footer>
          </div>
        </div>


    )
}


export default Footer;