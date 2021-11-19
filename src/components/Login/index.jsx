import React from 'react'
import './Login.css'

export default class LoginScreen extends React.Component {
    render() {
        return (
                <div className='containerD labels '>
                    <form className='centraliza col-sm-4 containerform container'>
                        <h2 className='forms2'>Login</h2>
                        <div class="form-group forms2">
                            <label for="exampleInputEmail1">Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Insira seu e-mail"/>
                        </div>
                        <div class="form-group forms2">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <div className='containercad'>
                            <a class='labelcad' href='/cadastro'>Cadastrar-se</a>
                        </div>
                        <div class="d-flex justify-content-center forms2">
                            <button type="submit" class="btn btn-secondary" style={{backgroundColor:'#2c2d33'}}>Entrar</button>
                        </div>
                        </form>
                </div>
        );
    };
}
