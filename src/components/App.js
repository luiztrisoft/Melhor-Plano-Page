import React from 'react';
import Menu from './Menu'
import '../assets/css/app.css';
import '../assets/css/grid.css';

export default class App extends React.Component{

    constructor(){
        super();
        // this.state = {};
        this.state = {
            produtos:[]
        };
    }
    
    componentWillMount(){
        // Called the first time the component is loaded right before the component is added to the page
        this.search();
    }

    search(){
        fetch('http://localhost:8080/list-all-broadband')
        .then(response => response.json())
        .then(response => {
            console.log(response)
            this.setState({
                produtos: response
            })
        }).catch(error =>{
            console.log(error)
        })
    }

    somar(pacote){
        var valor = 0;
        for (let index = 0; index < pacote.length; index++) {
            valor = valor + pacote[index].Price;
        }
        return valor
    }

    // m(){console.log('Mark I') }
    
    render(){
        return (
            <div>
            <Menu/>
            <div className="row">


               <h1 className="column column-12">Lista de produtos</h1>                
               <p>{this.state.produtos.length} PLANOS</p>  
             </div>  
               {
                   this.state.produtos.map(function(produto, index){                                     
                       return(
                        <div className="row plan">         
                        <div className="column column-6">
                            <h2 className="title">{produto.descricao}</h2>                                                                         
                        </div>
                        <div className="column column-2">                        
                            <div className="body-price">
                            R$ <span className="price">{produto.total}</span>,00
                            </div>
                               
                        </div>                         
                        <div className="column column-2"></div>                       
                        <div className="column column-2 text-left">                        
                        <p className="pacote-incluso">Pacotes inclusos</p>
                            {produto.pacote.map(function(pacote, index){                                
                                return (
                                    <div>                                   
                                        <label>{pacote.Name}</label>
                                    </div> 
                                )}
                            )}
                        </div>                        
                        </div>
                   );
                })
            }
            </div>                  
        )
    }
}