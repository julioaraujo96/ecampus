import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar'
import Anuncio from '../components/Anuncios/Anuncio'
import {Navigate } from 'react-router-dom';
import Helmet from 'react-helmet'


const Anuncios = () => {

    const isAuthenticated = localStorage.getItem('isAuthenticated')
    console.log(isAuthenticated)
        
    return (
        <>
        {
            isAuthenticated === 'true' ? 
            <div className="relative min-h-screen md:flex">
            <Helmet>
                <meta name="description" content="E-campus"/>
                <title>E-campus - Anuncios</title>
            </Helmet>
            <Sidebar/>
                <div className="grid lg:grid-cols-3 grid-cols-2 gap-2 mb-auto md:ml-52">
                    <Anuncio/>
                </div>   
        </div> :  <Navigate to='/login'/>

        }
    </> 
    );
};

export default Anuncios;