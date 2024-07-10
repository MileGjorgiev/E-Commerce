import React from "react";
import Card from "../Card/Card";
import './newProducts.css'

const NewProducts = (props) => {

    return (
        <div className="container text-center mt-4">
            <p className="fs-1">Нови производи</p>
            <p className="fs-3">Освежете го вашиот дом ова лето со нашата нова колекција од бамбус мебел.</p>
            
            <div className="sliderr" style={{height: '22rem'}}>
                <div className="slide-trackk">
                {props.fur.map((term, index) => {
                    return (
                        <div className="slidee" key={index}>
                            <Card className getFurniture={props.getFurniture} addToCart={props.addToCart} newClassSecond={'visually-hidden'} newClassFirst={'position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2'} furniture={term} />
                        </div>
                    );
                })}
                {props.fur.map((term, index) => {
                    return (
                        <div className="slidee" key={index}>
                            <Card getFurniture={props.getFurniture} addToCart={props.addToCart} newClassSecond={'visually-hidden'} newClassFirst={'position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2'} furniture={term} />
                        </div>
                    );
                })}
                </div>
            </div>
        </div>
    );
}


export default NewProducts;



