import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { productGet } from '../../../redux/actions/actionProduct';
import ProductsCard from '../ProductsCard';
// import AddProducts from './AddProducts';

import "../Products.css"

const ProductsListKidsC = () => {
    const {product,loading} = useSelector( state => state.productReducer);
    
    // console.log(product)

  // console.log(product)
  // console.log(user)


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productGet());
  }, [])
  return (
    <div>
      {/* <AddProducts /> */}
    <div className='prodList'>
         { loading?<h1> loading...</h1>: (
      product && React.Children.toArray(product.filter(el => el.category === 'kids' && el.subcategory === 'kids_clothes').map((x) => <ProductsCard prod={x} />))
    
         )}
    </div>
    </div>
  )
}

export default ProductsListKidsC ;