import React from 'react';
import '../assets/css/App.css';

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
            <div className="color">
               <h1>Lista de produtos</h1>                
               <strong>{this.state.produtos.length} PLANOS</strong>  
               {
                   this.state.produtos.map(function(produto, index){                                     
                       return(
                           <div >
                            <h2 className="title">{produto.nome}</h2>                                                                         
                            
                            {produto.pacote.map(function(pacote, index){                                
                                return (
                                    <div>
                                    {/* <h2>{this.somar(produto.pacote)}</h2> */}
                                        <p>{pacote.Name} - {pacote.Price},00</p>                                                                                
                                    </div> 
                                )}
                            )}
                            R$ <span style={{fontSize:'2.3em'}}>{produto.total}</span>,00                       
                        </div>                        
                    );
                })
                }
            </div>
        )
    }
}