import React from 'react';
import Request from 'superagent';

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
        this.search2();
    }

    search(){
        var url = 'http://localhost:8080/list-all-broadband';
        Request.get(url).then((response) => {
            console.log('Mark I', response);
            // this.setState({      });
        });
    }

    search2(){
        fetch('http://localhost:8080/list-all-broadband')
        .then(response => response.json())
        .then(response => {
            this.setState({
                produtos: response
            })
        }).catch(error =>{
            console.log(error)
        })
    }

    render(){
        return (
            <div >
               
                <h1>Lista de produtos</h1>                
                 {this.state.produtos.length}
                {
                    this.state.produtos.map(function(p, index){
                    return(
                        <tr>
                        <td>{p.Name}</td>
                        <td>{p.Price}</td>
                        <td>{p.Type}</td>
                        </tr>
                    );
                })
                }
            </div>
        )
    }
}