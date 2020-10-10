import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from '../../screen/HomeScreen';
import ProductScreen from '../../screen/ProductScreen';
import CartScreen from '../../screen/CartScreen';
import SigninScreen from '../../screen/SigninScreen';
import offersScreen from '../../screen/offersScreen';
import superProductosScreen from '../../screen/superProductosScreen';
import callToAction from '../../screen/callToActionScreen';
import callToActionEmail from '../../screen/callToActionEmail';
import envioSeccion from '../../screen/envioSeccionScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from '../../screen/RegisterScreen';
import reviewScreen from '../../screen/ReviewScreen';
import productosDestacados from '../../screen/DestacadoProductScreen';
import ProductsScreen from '../../screen/ProductsScreen';
import ShippingScreen from '../../screen/ShippingScreen';
import PaymentScreen from '../../screen/PaymentScreen';
import DashboardScreen from '../../screen/DashbhoardScreen';
import MainContainetHomeLayout from '../homeLayout/mainContainet.home.layout';
import LeftNavHomeLayout from '../homeLayout/leftNav.home.layout';
import FooterHomeLayout from '../homeLayout/footer.home.layout';
import MainContentHomeLayout from '../homeLayout/mainContent.home.layout';
import Headerhome from '../homeLayout/header.home.layout';
import OffersUploader from '../../screen/OffersUploader';
import CategoryScreen from '../../screen/categoryScreen';






function AppLayout() {


    

    return (
        <BrowserRouter>
            <MainContainetHomeLayout className="grid-container">
                <Headerhome/>
                <LeftNavHomeLayout />
                <MainContentHomeLayout className="main" >
                    <div className="content">

                        <Route path="/products" exact={true} component={ProductsScreen} />
                        <Route path="/shipping" exact={true} component={ShippingScreen} />
                        <Route path="/payment" exact={true} component={PaymentScreen} />
                        <Route path="/signin" exact={true} component={SigninScreen} />
                        <Route path="/register" exact={true} component={RegisterScreen} />
                        <Route path="/product/:id" exact={true} component={ProductScreen} />
                        <Route path="/cart/:id?" exact={true} component={CartScreen} />
                        
                        <Route path="/" exact={true} component={HomeScreen} />
                        <Route path="/" exact={true} component={callToAction} />
                        <Route path="/" exact={true} component={productosDestacados} />
                        <Route path="/" exact={true} component={reviewScreen} />
                        <Route path="/" exact={true} component={envioSeccion} />
                        <Route path="/" exact={true} component={callToActionEmail} />
                        <Route path="/offers" exact={true} component={OffersUploader} />
                        <Route path="/products/category" exact={true} component={CategoryScreen} />
                        


                    </div>
                </MainContentHomeLayout>
                <FooterHomeLayout />
            </MainContainetHomeLayout>
        </BrowserRouter>
    );

}

export default AppLayout;
