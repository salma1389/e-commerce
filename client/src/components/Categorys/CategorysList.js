import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categGet } from "../../redux/actions/actionCateg";
import CategoryItems from "../Home/CategItems";
import CategoryCard from "./CategoryCard";

const CategorysList = () => {
  const { category, loading } = useSelector((state) => state.categReducer);
  // console.log(category);

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
      React.Children.toArray(category.filter(el => el.categName === 'women' || el.categName === 'men' || el.categName === 'kids').map((x) => <CategoryItems categ={x} />)
      )
    )}
  </div>
  )
};

export default CategorysList;
