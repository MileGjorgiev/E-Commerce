import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import './ShoppingCart.css'
import shoppingPanda from './image/panda-shoppingCart.jpeg'


const ShoppingCart = (props) => {


  

  const totalPrice = props.itemsInCart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const removeFromCart = (index,color) => {
    props.removeItem(index,color);
  };

  const clearCart = () => {
    props.removeAll();
  };


  const noItemsInCart = (
    <div className='text-center mt-2'>
      <h1>Вашата кошничка е празна!</h1>
      <img id='cartPanda' src={shoppingPanda} />
      <div className='mt-3'>
        <Link className='btn' id='back' to='/'>Вратете се назад</Link>
      </div>
    </div>
  );


  return (
    <div className="container">
      <div className='mt-4'>
        <nav aria-label="breadcrumb mt-3">
           <ol class="breadcrumb">
             <li class="breadcrumb-item"><a className='text-secondary text-decoration-none fs-4' href="/">Home</a></li>
             <li class="breadcrumb-item active fs-4" aria-current="page">Кошничка</li>
            </ol>
        </nav>
      </div>

      {props.itemsInCart.length > 0 ? (
        <h2 className="mt-5 mb-4">Кошничка</h2>
      ): null}
      
      {props.itemsInCart.length > 0 ? (
        <div>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th></th>
                <th>Име</th>
                <th>Цена</th>
                <th>Количина</th>
                <th>Боја</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {props.itemsInCart.map((item, index) => (
                <tr key={index}>
                  <td><img id='prodImg' src={item.image} alt={item.name} /></td>
                  <td className='fw-bold text-black align-middle'><i>{item.name}</i></td>
                  <td className='text-black align-middle'>{item.price}ДЕН.</td>
                  <td className='align-middle'>{item.quantity}</td>
                  <td className='align-middle text-capitalize'>{item.color}</td>
                  <td className='align-middle'>
                    <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id,item.color)}>X</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="mt-3 fs-4">Вкупно: {totalPrice}ДЕН.</p>

          <div className='d-flex justify-content-end'>
            <div>
              <button className="btn btn-danger me-3" onClick={clearCart}>Одстрани се</button>
              <Link to={'/checkout'} id='checkoutShoppingCartButton' className="btn">Комплетирај ја нарачката</Link>
            </div>
          </div>
        </div>
      ) : (
        
        <div>{noItemsInCart}</div>
      )}
    </div>
  );
};

export default ShoppingCart;

