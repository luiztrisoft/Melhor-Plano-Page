import React from 'react';
import Menu from './Menu';
import Rodape from './Rodape';
import '../assets/css/app.css';
import '../assets/css/grid.css';
import icon from '../assets/img/icon.png';
import plan from '../assets/img/plan.png';

export default class App extends React.Component{

    constructor(){
        super();
        this.state = {
            produtos:[]
        };
    }
    
    componentWillMount(){
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
     
    render(){
        return (
            <div>
            <Menu/>
            <div className="row">
               <p className="column column-12 choose">Escolha o melhor plano que se adequa as suas necessidades</p>
             </div>  
               {
                   this.state.produtos.map(function(produto, index){                            

                        return(
                        <div className="row plan">         
                        <div className="column column-3">
                            <img src={plan} alt="Plano"/> 
                            <h2 className="title">{produto.descricao} {index + 1}</h2>                                                                         
                        </div>
                        <div className="column column-4">                        
                            <div className="body-price">
                            R$ <span className="price">{produto.total}</span>,00
                            <br/>
                            <span className="mensalidade">por mês</span>
                            </div>                              
                        </div>                                                 
                        <div className="column column-3 text-left">                        
                        <p className="pacote-incluso">PACOTES INCLUSOS</p>
                            {produto.pacote.map(function(pacote, index){                                
                                return (
                                    <div> 
                                        <img src={icon} width='20' alt=""/>                                         
                                        <label className="included-bundle">{pacote.name}</label> 
                                    </div> 
                                )}
                            )}
                        </div>                        
                        <div className="column column-2">
                            <button className="btn">Quero este</button>
                        </div>                       
                        </div>
                   );
                })
            }
            <Rodape/>
            </div>                  
        )
    }
}