import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar'
import Info from '../components/Info/Info'
import Email from '../components/Email/Email'
import Curso from '../components/Curso/Curso'
import Calendar from '../components/Calendar/Calendar'
import {Navigate } from 'react-router-dom';
import Helmet from 'react-helmet'


const Home = () => {

    const isAuthenticated = localStorage.getItem('isAuthenticated')
        
    return (
        <>
        {
            isAuthenticated === 'true' ? 
            <div className="relative min-h-screen md:flex">
                <Helmet>
                    <meta name="description" content="E-campus"/>
                    <title>E-campus - Área privada</title>
                </Helmet>
            <Sidebar/>
                <div className="grid lg:grid-cols-3 grid-cols-2 gap-2 mb-auto md:ml-52">
                    <Info/>
                    <Email/>
                    <Curso/>
                    <Calendar/>
                </div>   
        </div> :  <Navigate to='/login'/>

        }
    </> 
    );
};

export default Home;