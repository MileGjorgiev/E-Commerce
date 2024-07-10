import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Service from '../../repository/service';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import './Product.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Product = ({ addToCart, itemsInCart, removeItem }) => {
  const { id } = useParams();
  const [furniture, setFurniture] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [colors, setColors] = useState([]);

 

  useEffect(() => {
    const fetchFurniture = async () => {
      try {
        const response = await Service.getFurniture(id);
        setFurniture(response.data);

        if (response.data.furnitureColor) {
          setColors(response.data.furnitureColor.split(','));
        }

      } catch (error) {
        console.error('Error fetching furniture data:', error);
      }
    };

    fetchFurniture();
  }, [id]);



  const totalPrice = itemsInCart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const removeFromCart = (index,color) => {
    removeItem(index,color);
  };

  const handleAddToCart = () => {
    if (selectedColor) {
      addToCart(furniture, selectedColor);
    } else {
      alert('Please select a color before adding to cart.');
    }
  };

  if (!furniture) {
    return <div>Loading...</div>;
  }

  

  

    return (
        <div className='container'>

          <div className='mt-4'>
              <nav aria-label="breadcrumb mt-3">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a className='text-secondary text-decoration-none fs-4' href="/">Почетна</a></li>
                  <li class="breadcrumb-item active fs-4" aria-current="page">{furniture.name}</li>
                </ol>
              </nav>
          </div>

            <div class="card mb-3 mt-5 border-0" style={{maxwidth: "600px", width: "70%",margin: 'auto'}}>
                <div class="row g-0">
                  <div class="col-md-12 col-lg-5 col-sm-12">
                    <img src={furniture.image} class="img-fluid rounded-start" alt="..."/>
                  </div>
                  <div class="col-md-12 col-lg-7 col-sm-12 px-5">
                    <div class="card-body d-flex flex-column p-1 " style={{height: "100%"}}>
                      <p class="card-title fs-3">{furniture.name}</p>
                      <p class="card-text ">{furniture.description}</p>
                      
                      <div className="color-selection">
                  {colors.map(color => (
                    <OverlayTrigger
                    key={color}
                    placement="bottom"
                    overlay={
                      <Popover id={`popover-${color}`} className="p-2 text-capitalize">
                        {color}
                      </Popover>
                    }
                  >
                      <label style={{display: 'inline'}} className="color-radio">
                        <input type="radio" name="color" value={color} onChange={() => setSelectedColor(color)} />
                        <span className="checkmark" style={{ backgroundColor: color }}></span>
                      </label>
                    </OverlayTrigger>
                  ))}
                 
                </div>
                {!selectedColor && <p className="text-danger card-text fst-italic fw-light ">Мора да изберете боја!</p>}
                      <div className='mt-auto '>
                        <p  class="card-text  fs-3 fw-medium "><i>{furniture.price}ДЕН.</i></p>
                        <button  onClick={handleAddToCart} disabled={!selectedColor}  data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" className='btn btn-outline-dark ms-auto'>Add to cart</button>
                        
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className='container mt-4'>
                <div style={{width: "71.5%", margin: 'auto'}}>
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button class="nav-link active text-black" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Детали</button>
                  </div>
                </nav>
                <div class="tab-content mt-3" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">{furniture.description}</div>
                </div>
                </div>
            </div>
















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
          {itemsInCart.map((item,index) => (
            <tr key={index} >
              <td><img id='popupImg' src={item.image}/></td>
              <td className='fw-bold text-black align-middle'><i>{item.name}</i></td>
              <td className='text-black  align-middle'>{item.price} МКД</td>
              <td className='align-middle'>{item.quantity}</td>
              <td className='align-middle'><button className="btn btn-danger  btn-sm" onClick={() => removeFromCart(item.id,item.color)}>Одстрани</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-3 fs-6">Total: {totalPrice} МКД</p>
    </div>
    </div>
 </div>
        </div>
    )
}


export default Product;