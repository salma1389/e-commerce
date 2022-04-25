import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { productGet } from '../../../redux/actions/actionProduct';
import ProductsCard from '../ProductsCard';
// import AddProducts from './AddProducts';

import "../Products.css"
import AddProducts from '../AddProducts';

const ProductsListMenS = () => {
    const {product,loading} = useSelector( state => state.productReducer);
  const { user } = useSelector((state) => state.userReducer);

    
    // console.log(product)

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
         { loading?<h1> loading...</h1>: (
      product && React.Children.toArray(product.filter(el => el.category === 'men' && el.subcategory === 'Men_shoes').map((x) => <ProductsCard prod={x} />))
    
         )}
    </div>
    </div>
  )
}

export default ProductsListMenS ;