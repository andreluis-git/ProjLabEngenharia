import React from 'react'
import NavBar from '../NavBar';
import './home.css'

export default class Home extends React.Component {
    render() {
        return (
                <div className=' backgroundH'>
                    <div className='headerH d-flex' style={{color:'white'}}>
                        <h3>Home</h3>
                    </div>
                    <div class='col-sm-2 gambi'>
                        <NavBar/>
                    </div>
                </div>
        );
    };
}

