import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';  
import { useSelector, useDispatch } from 'react-redux';
import { searchProducts } from '../actions/productActions';







 function SearchScreen(props) {

  
      return(   

  
          <ul>
              <li>
                <input type="text" name="search" id="search" value={ ''}  />
              </li>  
                     
              
          </ul>

     
        
        
      ) 
       }
       
  


 


  


    
export default SearchScreen;