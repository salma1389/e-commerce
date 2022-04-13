import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { categGet } from '../../redux/actions/actionCateg';
import CategoryCard from './CategoryCard';

const CategorysList = () => {
  const {category,loading} = useSelector( state => state);
  console.log(loading)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categGet());
  }, [dispatch])
  return (
    <div>
      { loading?<h1> loading...</h1>:
      category && React.Children.toArray( category.map( el => < CategoryCard categ={el} />))}

    </div>
  )
}

export default CategorysList

