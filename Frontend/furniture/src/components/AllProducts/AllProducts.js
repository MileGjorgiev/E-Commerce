import React from "react";
import NewCard from './newCard/NewCard'
import './AllProducts.css'
import Card from "../Main/Card/Card"
const AllProducts = (props) => {
    return(
        <div className="container-fluid">

        <div className='mt-4 container'>
            <nav aria-label="breadcrumb mt-3">
               <ol class="breadcrumb">
                 <li class="breadcrumb-item"><a className='text-secondary text-decoration-none fs-4' href="/">Home</a></li>
                 <li class="breadcrumb-item active fs-4" aria-current="page">Сите продукти</li>
                </ol>
            </nav>
        </div>
        <div id="chairs" className='container ps-0 mt-1  text-center d-flex
             align-items-center justify-content-center'>

                <p className='fs-1 text-white fw-medium mt-3'><i>Bamboo indoor furniture</i></p>
             </div>
        <div className=" d-flex justify-content-center">
        <div className="container row d-lg-flex justify-content-center">                
                {props.fur.map((term, index) => {
                   
                    if (term.category === "COUCH") {
                        return (
                            <div className="col-xl-3 col-md-4 col-6 d-flex justify-content-center" key={index}>
                                <Card getFurniture={props.getFurniture} furniture={term} />
                            </div>
                        );
                    } else {
                        return null; 
                    }
                })}
            </div>
        </div>
        <div id="chairs" className='container ps-0 mt-1  text-center d-flex         
             align-items-center justify-content-center'>

                <p className='fs-1 text-white fw-medium mt-3'><i>Bamboo outdoor furniture</i></p>
             </div>
             <div className=" d-flex justify-content-center">
             <div className="container row d-lg-flex justify-content-center">
                    {props.fur.map((term, index) => {

                        if (term.category === "CHAIR") {
                            return (
                                <div className="col-xl-3 col-md-4 col-6 d-flex justify-content-center" key={index}>
                                    <Card getFurniture={props.getFurniture} furniture={term} />
                                </div>
                            );
                        } else {
                            return null; 
                        }
                    })}
                </div>
        </div>   
        </div>
    )
}

export default AllProducts;