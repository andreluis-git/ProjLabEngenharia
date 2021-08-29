import React from 'react';

import Header from './components/Header'
import SideMenu from './components/SideMenu'
import ContentPage from './components/ContentPage';

import './App.css'

export default function App() {
    return (
        <div className="container-fluid">
            <div className="row">
                <Header/>
            </div>
            <div className="row">
                <div className="col-2 p-0" style={{backgroundColor: 'red'}}>
                    <SideMenu />
                </div>
                <div className="col-9">
                    <ContentPage/>
                </div>
            </div>
        </div>
    );
}