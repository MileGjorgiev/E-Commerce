
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Order.css'

const Order = (props) => {
  
  const totalPrice = props.itemsInCart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const filteredProducts = props.itemsInCart.map(({ name, price, quantity, color }) => ({
    name,
    price,
    quantity,
    color
  }));


  const products = JSON.stringify(filteredProducts);


  return (
    <div className="container mt-5">
      <div className="row">
        {/* Form Section */}
        <div className="col-md-6">
          <form action="https://formsubmit.co/proba0801002@gmail.com" method="POST" className="order-form">
            <div className="mb-3">
              <label htmlFor="inputName" className="form-label">Име</label>
              <input type="text" name='name' className="form-control" id="inputName"  required/>
            </div>
            <div className="mb-3">
              <label htmlFor="inputSurname" className="form-label">Презиме</label>
              <input type="text" name='surname' className="form-control" id="inputSurname" required />
            </div>
            <div className="mb-3">
              <label htmlFor="inputEmail4" className="form-label">Емаил адреса</label>
              <input type="email" name='email' className="form-control" id="inputEmail4" required/>
            </div>
            <div className="mb-3">
              <label htmlFor="inputPhoneNumber" className="form-label">Телефонски број</label>
              <input type="text" name='phoneNumber' className="form-control" id="inputPhoneNumber"  required/>
            </div>
            <div className="mb-3">
              <label htmlFor="inputAddress" className="form-label">Адреса</label>
              <input type="text" name='address' className="form-control" id="inputAddress" required/>
            </div>
            <div className="mb-3">
              <label htmlFor="inputCity" className="form-label">Град</label>
              <select id="inputCity" name='city' className="form-select" required>
                <option selected>Избери</option>
                <option>Strumica/Струмица</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="inputZip" className="form-label">Zip</label>
              <input type="text" name='zip' className="form-control" id="inputZip" required/>
            </div>
            <div className="mb-3">
              <button type="submit" id="checkoutBtn" className="btn btn-primary">Комплетирај ја нарачката</button>
            </div>
            <input type="hidden" name="_next" value="http://localhost:3000/orderConfirmed" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table"/>
            
                <input type="hidden" name="products" value={products}/>

                <input type="hidden" name="total" value={totalPrice}/>
          </form>
        </div>
        
        {/* Order Summary Section */}
        <div className="col-md-6">
          <div className="order-summary">
            <table className='table table-hover'>
              <thead>
                <tr>
                  <th></th>
                  <th>Име</th>
                  <th>Цена</th>
                  <th>Количина</th>
                </tr>
              </thead>
              <tbody>
                {props.itemsInCart.map((item, index) => (
                  <tr key={index}>
                    <td><img id='popupImg' src={item.image} alt={item.name} /></td>
                    <td className='fw-bold text-black align-middle'><i>{item.name}</i></td>
                    <td className='text-black align-middle'>{item.price} МКД</td>
                    <td className='align-middle'>{item.quantity}</td>
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

export default Order;
