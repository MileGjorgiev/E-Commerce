import React from "react";
import Card from "../Card/Card";
import '../newProducts/newProducts.css'


const BestSellers = (props) => {
    
    const displayedFurniture = props.fur.slice(0, 4);

    return (
        <div className="container text-center mt-4">
            <div className="row">
                {displayedFurniture.map((term, index) => (
                    <div key={index} className="col-lg-3 col-md-6 d-flex justify-content-center">
                        <div>
                            <Card getFurniture={props.getFurniture} addToCart={props.addToCart} furniture={term} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default BestSellers;