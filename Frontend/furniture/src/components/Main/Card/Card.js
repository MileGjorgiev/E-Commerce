import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom';

const Card = (props) => {

    const cardStyle = {
        width: props.id ? "10rem" : "14rem", 
        marginTop: "15px",
    };

    return (
        <Link to={`/furniture/${props.furniture.id}`} className='d-flex justify-content-center text-decoration-none slideImgg' onClick={() => props.getFurniture(props.furniture.id)}>
        <div id={props.id} className="card position-relative box" style={cardStyle}>
            <img src={props.furniture.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-center">{props.furniture.name}</h5>
                <h6 className="card-text text-center">{props.furniture.price} МКД</h6>
            </div>
            <span className={props.newClassFirst}>New<span className={props.newClassSecond}></span></span>
        </div>
        </Link>


    );
}



export default Card;

