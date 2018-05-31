import React from 'react';
import '../assets/css/menu.css';
import '../assets/css/grid.css';
export default class App extends React.Component{

    constructor(){
        super();
        this.state = {};
     
    }

    render(){
        return (       
            <h1 className="menu-content">Planos de internet, telefonia e canais de TV</h1>
        );
    }

}   