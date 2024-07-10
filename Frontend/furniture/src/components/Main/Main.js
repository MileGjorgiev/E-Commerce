import React from 'react'
import mainImg from './Photos/mainPhoto/mainPhoto.png'
import $ from 'jquery';
import './Main.css'
import NewProducts from './newProducts/NewProducts';
import img2 from "./Photos/photos/3.png"
import BestSellers from './BestSellers/BestSellers';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';



const Main = (props) => {
    const totalPrice = props.itemsInCart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const removeFromCart = (index) => {
      props.removeItem(index);
    };
  
    const clearCart = () => {
      props.removeAll();
    };

    
  

    return (
        <div  className='container-fluid main'>
            <div  className='image text-center'>
                <img src={mainImg} id="img-fluid" alt="..." />
            </div>
            <NewProducts getFurniture={props.getFurniture} fur={props.fur} addToCart={props.addToCart} />
            <div id='bestSellers' className='container-fluid ps-0 mt-5 text-center d-flex
             align-items-center justify-content-center'>
               
                <p className='fs-1 text-white fw-medium mt-3'><i>Најпродавано</i></p>
            </div>
            <BestSellers getFurniture={props.getFurniture} addToCart={props.addToCart} fur={props.fur}/>

            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Кошничка</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
            <div class="offcanvas-body">
            <div>
            <table className='table table-hover'>
        <thead>
          <tr>
            <td></td>
            <td>Име</td>
            <td>Цена</td>
            <td>Количина</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {props.itemsInCart.map((item,index) => (
            <tr key={index} >
              <td><img id='popupImg' src={item.image}/></td>
              <td className='fw-bold text-black align-middle'><i>{item.name}</i></td>
              <td className='text-black  align-middle'>{item.price} МКД</td>
              <td className='align-middle'>{item.quantity}</td>
              <td className='align-middle'><button className="btn btn-danger  btn-sm" onClick={() => removeFromCart(item.id)}>Одстрани</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-3 fs-6">Total: {totalPrice} МКД</p>
    </div>
    </div>
 </div>
    

        </div>
    );

   
    
}




export default Main;


