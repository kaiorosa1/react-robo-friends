import React from 'react';


class ErrorBoundary extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            hasError: false
        }
    }
    componentDidCatch(){
        this.setState({hasError: true});
    }
    render(){
        if(this.state.hasError){
            return(
                <div>
                    <h1>Ooops... this is not good!!</h1>
                </div>
            )
        }else{
            return this.props.children;
        }
    }
}

export default ErrorBoundary;