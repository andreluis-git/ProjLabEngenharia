
import React, { Fragment } from 'react';
import HeaderService from './HeaderService';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logo: '',
            logoTeste: 'https://images.pexels.com/photos/2235130/pexels-photo-2235130.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
            temLogo: false
        }
    }

    componentWillMount() {
        let logo = HeaderService.getLogo()
        this.setState({
            logo: logo
        })
    }
    
    search = () => {
        return (
            <Fragment>
                <input
                    type='text'
                    placeholder="Pesquisar"
                    size={50}
                />
                <button>
                    <img src="https://img.icons8.com/material-rounded/24/000000/search.png" alt="https://img.icons8.com/material-rounded/24/000000/search.png"/>
                </button>
            </Fragment>
        );
    }

    contatos = () => {
        return (
            <Fragment>
                <a href="/">
                    <img 
                        src="https://img.icons8.com/ios/50/000000/facebook--v1.png"
                        alt="https://img.icons8.com/ios/50/000000/facebook--v1.png"
                    />
                </a>
                <a href="/">
                    <img 
                        src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png"
                        alt="https://img.icons8.com/ios/50/000000/instagram-new--v1.png"
                    />
                </a>
                <a href="/">
                    <img
                        src="https://img.icons8.com/ios/50/000000/whatsapp--v1.png"
                        alt="https://img.icons8.com/ios/50/000000/whatsapp--v1.png"
                    />
                </a>
            </Fragment>
        );
    }
    
    render() {
        return (
            <div className='container-fluid bg-secondary'>
                <div className='row'>
                    <div className='col-3 p-0'>
                        <img src={ this.state.temLogo ? this.state.logo : this.state.logoTeste } alt={ this.state.logo } width='100%' height='100px'/>
                    </div>
                    <div className='col-6 align-self-center'>
                        { this.search() }                    
                    </div>
                    <div className='col-3 align-self-center'>
                        { this.contatos() }
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;