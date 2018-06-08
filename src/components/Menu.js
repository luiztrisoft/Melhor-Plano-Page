import React from 'react';
import '../assets/css/menu.css';
import '../assets/css/grid.css';
import logo from '../assets/img/logo.png';

export default class App extends React.Component{

    constructor(){
        super();
        this.state = {};
     
    }

    render(){
        return (   
            <div className="menu-content ">    
                <img className="img" src={logo} height="50" alt="Trisoft"/>
                <label className="title-content">PLANOS DE INTERNET, TELEFONIA E CANAIS DE TV
                </label>
            </div>
        );
    }

}   