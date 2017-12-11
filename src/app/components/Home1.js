import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Home extends Component{
    constructor(props){
        super();
        this.state = {
            age : props.age,
            homeLink: props.initialLinkName
        };
        console.log("constructor");
    }
    // Component LifeCycle Methods
    componentWillMount(){
        console.log("Component will mount");
    }
    componentDidMount(){
        console.log("Component Did Mount");
    }
    componentWillReceiveProps(nextProps){
        console.log("Component will receive props ", nextProps);
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("Should Component Update ",nextProps, nextState);
        return true;
    }
    componentWillUpdate(nextProps, nextState){
        console.log("Component Will Update ",nextProps, nextState);
    }
    componentDidUpdate(prevProps, prevState){
        console.log("Component Did Update ",prevProps, prevState);
    }
    componentWillUnmount(){
        console.log("Component will unmount");
    }

    onMakeOlder(){
            this.setState({
                age: this.state.age + 1
            });
    }

    onChangeLink(){
        this.props.changeLink(this.state.homeLink);
    }
    updateLinkName(event){
        this.setState({
            homeLink: event.target.value
        });
    }


    render(){
        return (
            <div>
                <p>In a new Component</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <br/>
                <button className="btn btn-primary" onClick={this.onMakeOlder.bind(this)}>Make me Older</button>
                {/*<p>User Object => Name: {this.props.user.name}</p>*/}
                {/*<div>*/}
                    {/*<ul>*/}
                        {/*this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)*/} {/* Iterating through list or array in ES6 */}
                    {/*</ul>*/}
                {/*<div>*/}
                {/*this.props.children*/}
                <hr/>
                <button className="btn btn-primary" onClick={this.props.greet}>Greet</button>
                <hr/>
                <input type="text" value={this.state.homeLink}
                onChange={(event) => this.updateLinkName(event)}/>
                <button className="btn btn-primary" onClick={this.onChangeLink.bind(this)}>Change Header Link</button>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object,
    greet: PropTypes.func,
    initialLinkName: PropTypes.string
    //children: PropTypes.element.isRequired
};
