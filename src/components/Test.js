import React, { Component } from 'react'

class Test extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {
            a: 10
        }
        console.log('contructor');
    }
    componentDidMount(){
        console.log('componentDidMount');
        // API deyisiklikleri
        this.setState({
            a:20,
        })
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }
 
    
    render() {
        console.log('Render');
        return (
            <div>
                
            </div>
        )
    }
}

export default Test;
