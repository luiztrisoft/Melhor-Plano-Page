import React from 'react';
import Request from 'superagent';

export default class App extends React.Component{

    constructor(){
        super();
        this.state = {};
    }

    componentWillMount(){
        // Called the first time the component is loaded right before the component is added to the page
        this.search();
    }

    search(){
        var url = 'http://localhost:3000/list-all-broadband';
        Request.get(url).then((response) => {
            console.log('Mark I', response);
          this.setState({
            
          });
        });
    }

    render(){
        return (
            <div>
                <h1>HelloWorld</h1>                
            </div>
        )
    }
}