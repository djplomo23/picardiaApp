import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS, PRODUCT_SAVE_FAIL, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_FAIL, PRODUCT_CATEGORY_REQUEST, PRODUCT_CATEGORY_SUCCESS, PRODUCT_CATEGORY_FAIL  } from '../constants/productConstants';
import { axios } from '../axios';




const listProducts = () => async (dispatch) => {
try{
    dispatch({ type: PRODUCT_LIST_REQUEST});
    const { data } = await axios.get('/api/products');
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
}
catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });

    }
    
};


const categoryProducts = (productsCategory) => async (dispatch) => {
    try{
        dispatch({ type: PRODUCT_CATEGORY_REQUEST });
        const { data } = await axios.get('/api/products/' + productsCategory );
        dispatch({ type: PRODUCT_CATEGORY_SUCCESS, payload: data });
        
    }
    catch (error) {
        dispatch({ type: PRODUCT_CATEGORY_FAIL, payload: error.message });
    
        }
        
    };

const saveProduct = (product) => async (dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_SAVE_REQUEST, payload: product });
        const { userSignin: {userInfo} } = getState();
        if(!product._id){
            const {data} = await axios.post('/api/products', product, {headers:{
                Authorizatio: userInfo.token,
            },});
            dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });

        } else {
            const { data } = await axios.put(
                '/api/products/' + product._id, product, { 
                headers: {
                Authorization: userInfo.token,
                
                
            },
        }
        );
            dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
        }
        
       
    } catch(error){

        dispatch({ type: PRODUCT_SAVE_FAIL, payload: error.message });

    }
};

const detailsProduct = (product) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: product });
        const { data } = await axios.get("/api/products/" + product);
        dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error){
        dispatch({type: PRODUCT_DETAILS_FAIL, payload: error.message });
    }
};

const deleteProduct = (productId) => async (dispatch, getState) => {
    try {
        const {userSignin: { userInfo },} = getState();
        dispatch({ type: PRODUCT_DELETE_REQUEST, payload: productId });
        const { data } = await axios.delete("/api/products/" + productId, { headers: {
            Authorization: userInfo.token
        }});
        dispatch({type: PRODUCT_DELETE_SUCCESS, payload: data, success: true });
    } catch (error){
        dispatch({type: PRODUCT_DELETE_FAIL, payload: error.message });
    }
};
export { listProducts,  detailsProduct, saveProduct, deleteProduct, categoryProducts }