import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({id,name,price,description,image}) => {
  // const [count,setCount] = useState(0);
  const {cartItems , addtoCart,removeCart} = useContext(StoreContext)
  // onClick={() => setCount(prev => prev+1)} 
  return (
    <div className='food-item'>
    <div className='food-item-img-container'> 
    <img className='food-item-image' src={image}/>
    {!cartItems[id] ? <img className='add' onClick={() => addtoCart(id)} src={assets.add_icon_white} /> 
    : <div className='food-item-counter'>
      <img  onClick={() => removeCart(id)} src={assets.remove_icon_red}/>
      <p>{cartItems[id]}</p>
      <img  onClick={() => addtoCart(id)} src={assets.add_icon_green}/>
    </div>

    }
    </div>
    <div className='food-item-info'>
        <div className='food-item-name-rating'>
       <p>{name}</p>
       <img src={assets.rating_starts} alt="" />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>${price}</p>

    </div>
    </div>
  )
}

export default FoodItem