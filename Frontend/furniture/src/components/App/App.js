
import './App.css';
import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Service from '../../repository/service';
import Footer from '../Footer/Footer';
import {BrowserRouter as Router, Redirect, Route, Routes} from 'react-router-dom'
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import { useEffect } from 'react';
import Order from '../Order/Order';
import OrderConfirmation from '../Order/OrderConfirmation';
import $, { data } from 'jquery';
import AboutUs from '../AboutUs/AboutUs';
import Product from '../Product/Product';
import { useLocation } from 'react-router-dom';
import AllProducts from '../AllProducts/AllProducts';


const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      furniture: [],
      cartItems: JSON.parse(localStorage.getItem('cart')) || [],
      selectedFurniture: {},
    }
  }


  render(){
      return(

        <Router>
        <ScrollToTop />
        <div className='containerr'>
          <Header items={this.state.cartItems}/>
          <div className='mainDiv'>
            <Routes>
              <Route path={'/'} element={<Main getFurniture={this.getFurniture} fur={this.state.furniture} addToCart={this.addToCart} removeItem={this.removeFromCart} removeAll={this.removeAllFromCart} itemsInCart={this.state.cartItems} />}/>
              <Route path={'/shoppingCart'} element={<ShoppingCart removeItem={this.removeFromCart} removeAll={this.removeAllFromCart} itemsInCart={this.state.cartItems}/>} />
              <Route path={'/checkout'} element={<Order clearAll={this.removeAllFromCart} itemsInCart={this.state.cartItems}/>}/>
              <Route path={'/orderConfirmed'} element={<OrderConfirmation removeAll={this.removeAllFromCart}/>}/>
              <Route path={'/aboutUs'} element={<AboutUs/>}/>
              <Route path={'/furniture/:id'} element={<Product addToCart={this.addToCart} furniture={this.state.selectedFurniture} removeItem={this.removeFromCart} itemsInCart={this.state.cartItems}/>}/>
              <Route path={'/allProducts'} element={<AllProducts getFurniture={this.getFurniture} fur={this.state.furniture}/>}/>
            </Routes>
            <div class="loader-wrapper">
                <span class="loader"><span class="loader-inner"></span></span>
              </div>
          </div>
          <Footer/>
        </div>
      </Router>
      )
  }

  loadFurniture = () => {
    Service.fetchFurniture()
        .then((data) => {
            this.setState({
              furniture: data.data
            })
        });
}



addToCart = (product, selectedColor) => {
  this.setState((prevState) => {
    const existingIndex = prevState.cartItems.findIndex(
      item => item.id === product.id && item.color === selectedColor
    );
    const updatedCartItems = [...prevState.cartItems];

    if (existingIndex !== -1) {
      updatedCartItems[existingIndex] = {
        ...updatedCartItems[existingIndex],
        quantity: updatedCartItems[existingIndex].quantity + 1
      };
    } else {
      updatedCartItems.push({ ...product, quantity: 1, color: selectedColor });
    }

    localStorage.setItem("cart", JSON.stringify(updatedCartItems));

    return { cartItems: updatedCartItems };
  });
}



removeFromCart = (productIdToRemove, colorToRemove) => {
  this.setState((prevState) => {
    const updatedCartItems = prevState.cartItems.map(item => {
      if (item.id === productIdToRemove && item.color === colorToRemove) {
     
        return { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 0 };
      }
      return item; 
    }).filter(item => item.quantity > 0); 

   
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));

    
    return { cartItems: updatedCartItems };
  });
}






removeAllFromCart = () => {
  this.setState({
    cartItems: [],
  }, () => {
    localStorage.removeItem("cart");
  });
}

getFurniture = (id) => {
  Service.getFurniture(id)
  .then((data) => {
    this.setState({
      selectedFurniture: data.data
    })
  })
}


componentDidMount() {
  this.loadFurniture();

  $(window).on('load', function () {
    $('.loader-wrapper').fadeOut('slow');
  });
}

componentWillUnmount() {
  $(window).off('load');
}

}

export default App;
