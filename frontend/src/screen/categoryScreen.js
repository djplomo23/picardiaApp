import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';  
import { useSelector, useDispatch } from 'react-redux';
import { categoryProducts } from '../actions/productActions';







 function CategoryScreen(props) {
  const productCategory = useSelector((state) => state.productCategory);
  const { productsCategory, loading, error } = productCategory; 
  const dispatch = useDispatch();

  
 
  useEffect(() => {
    
    dispatch(categoryProducts(props.match.params.category));
   
    return () => {
      //
    };
  }, [])

  
      return(   

       
        loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          
        <ul className="products">
          {productsCategory.map((product)  => (
            <li key={product._id}>
              <div className="product">
                <Link to={'/product/' + product._id}>
                  <img
                    className="product-image"
                    src={product.image}
                    alt="product"
                  />
                </Link>
                <div className="product-name">
                  <Link to={'/product/' + product._id}>{product.name}</Link>
                </div>
                <div className="product-category">
                  <Link to={'/products/' + product.category}>{product.category}</Link>
                </div>
                <div className="product-brand">{product.brand}</div>
                <div className="product-price">${product.price}</div>
                <div className="product-rating">
                  
                </div>
                
              </div>
            </li>
            
          ))}
        </ul>
        
        
      ) 
       ) }
       
  


 


  


    
export default CategoryScreen;