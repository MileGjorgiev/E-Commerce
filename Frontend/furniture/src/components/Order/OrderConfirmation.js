import React from "react";
import { Link } from "react-router-dom";
import './OrderConfirmation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck  } from '@fortawesome/free-solid-svg-icons';
import panda from './orderConfirmationPhoto/panda.jpeg'
import { useEffect } from "react";

const OrderConfirmation = (props) => {

    useEffect(() => {
        props.removeAll(); 
      }, []);


    return (
        <div className="order mt-5 me-5 d-flex justify-content-center">
            <div className="order1">
                <p className="fs-1">Нарачката е процесирана</p>
                <p className="fs-3">Ви благодариме на довербата!</p>
                
                <div className="mb-3">
                    <img id="pandaImage" src={panda}/>
                </div>
                
                <Link to={'/'} className="btn btn-secondary">Назад кон почетна</Link>
            </div>
               
        </div>
    )
}


export default OrderConfirmation;