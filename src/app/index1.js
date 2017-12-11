import React, { Component } from 'react';
import { render } from 'react-dom';

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends Component{
  constructor(){
      super();
      this.state = {
        homeLink: "Home",
        homeMounted: true
      };
  }
  onGreet(){
      alert("Hey There!");
  }

  onChangeLinkName(newName){
    this.setState({
        homeLink: newName
    });
  }

  onChangeHomeMounted(){
      this.setState({
          homeMounted: !this.state.homeMounted
      });
  }
  render(){
    /*var user = {
        name: "Qwerty",
        hobbies: ["Sports","Coding"]
    }*/
    let homeCmp = "";
    if(this.state.homeMounted){
        homeCmp = (<Home
                name={"Max"}
                age={22}
                greet={this.onGreet}
                changeLink={this.onChangeLinkName.bind(this)}
                initialLinkName={this.state.homeLink}
                />
            );
    }
    return ( // className is used here instead of class like in html
      <div className="container" >
          <div className="row">
              <div className="col-xs-10 col-xs-offset-1">
                  <Header homeLink={this.state.homeLink}/>
              </div>
          </div>
          <div className="row">
              <div className="col-xs-10 col-xs-offset-1">
                  {homeCmp}
                    {/*<p>This is check for children prop in React</p>*/}
              </div>
          </div>
          <div className="row">
              <div className="col-xs-10 col-xs-offset-1">
                  <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">(Un)mount Home Component
                  </button>
                    {/*<p>This is check for children prop in React</p>*/}
              </div>
          </div>
      </div>
    );
  }
}

render(<App />,window.document.getElementById('app'));
