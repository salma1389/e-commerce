import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categGet, onecategGet } from "../../redux/actions/actionCateg";
import CategoryCard from "./CategoryCard";
import "./Categorys.css"

const CategoryListMen = () => {
  const { category, loading } = useSelector((state) => state.categReducer);
//   console.log(category);


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categGet());
  }, []);

  return (
    <div className='categList'>
    {loading ? (
      <h1> loading...</h1>
    ) : (
      category &&
      React.Children.toArray(category.filter(el => el.categName === 'Men_clothes' ||  el.categName === 'Men_shoes').map((x) => <CategoryCard categ={x} />)
      )
    )}
  </div>
  )
};

export default CategoryListMen;