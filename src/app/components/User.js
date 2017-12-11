import React, { Component } from 'react';

export class User extends Component{
    constructor(props){
        super(props);
        this.onNavigateHome = this.onNavigateHome.bind(this);
    }
    onNavigateHome(){
        this.props.history.push('/home'); {/* No need for BrowserHistory.push which is deprecated */}
    }
    render(){
        return (
            <div>
                <h3>The User Page</h3>
                <p>User ID: {this.props.match.params.id}</p> {/* For v4 react router 4*/}
                <button onClick={this.onNavigateHome} className="btn btn-primary">Home</button>
            </div>
        );
    }
}
