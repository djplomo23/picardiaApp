import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { productListReducer, productDetailsReducer, productSaveReducer, productDeleteReducer, productCategoryReducer, productSearchReducer } from './reducers/productReducers';
import {cartReducer} from './reducers/cartReducers';
import { userSigninReducer, userRegisterReducer } from './reducers/userReducers';
import { offerDeleteReducer, offerListReducer, offerSaveReducer } from './reducers/offerReducers';

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;


const initialState= { cart: { cartItems }, userSignin: {userInfo} };
const reducer = combineReducers({
    productList: productListReducer,
    productCategory: productCategoryReducer,
    offerList: offerListReducer,
    productDetails: productDetailsReducer,
    productSearchs: productSearchReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer,
    offerSave: offerSaveReducer,
    offerDelete: offerDeleteReducer
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;