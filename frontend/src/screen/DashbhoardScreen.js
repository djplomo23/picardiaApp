import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../img/LOGO-PICARDIA-NEGRO.png';
import FooterLayout from '../layout/dashboard/footer.layout';
import HeaderLayout from '../layout/dashboard/header.layout';
import LeftNavLayout from '../layout/dashboard/leftNav.layout';
import MainContainetLayout from '../layout/dashboard/mainContainet.layout';
import MainContentLayout from '../layout/dashboard/mainContent.layout';
import RightNavLayout from '../layout/dashboard/right.Nav.layout'





function DashboardScreen (props) {

    return (
        
        <MainContainetLayout>
            <HeaderLayout/>
            <RightNavLayout/>
            <LeftNavLayout/>
            <MainContentLayout>

            </MainContentLayout>
            <FooterLayout/>
        </MainContainetLayout>
    )
}

export default DashboardScreen;