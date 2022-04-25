import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { productGet } from '../../redux/actions/actionProduct';
import ProductsCard from './ProductsCard';
import AddProducts from './AddProducts';

import "./Products.css"

const ProductsList = () => {
    const {product,loading} = useSelector( state => state.productReducer);
  const { user } = useSelector((state) => state.userReducer);
    
    

  // console.log(product)
  // console.log(user)


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productGet());
  }, [])
  return (
    <div>
      <div>
        {user && user.roles == "admin" ? 
        <AddProducts />
        : null}
      </div>
      
    <div className='prodList'>
         { loading?<h1> loading...</h1>:
      product && React.Children.toArray( product.map( el => < ProductsCard prod={el} />))
  
      }
    </div>
    </div>
  )
}

export default ProductsList
