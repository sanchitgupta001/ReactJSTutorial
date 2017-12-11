import React, { Component } from "react";
import {render} from "react-dom";
import {BrowserRouter, Route} from "react-router-dom";

import {Root} from "./components/Root";
import {Home} from "./components/Home";
import {User} from "./components/User";

class App extends Component{
    render(){
        return (
            <BrowserRouter>
            <div>{/* No need of history prop here*; Router is deprecated*/}
                <Root>{/* Directly specifying component name here*/}
                    <Route exact path="/" component={Home}/> {/* Alternative for IndexRoute in v4 */}
                    <Route path={"/user/:id"} component={User}/>
                    <Route path={"/home"} component={Home}/>
                </Root>
            </div>
            </BrowserRouter>
        );
    }
}

render(<App />, window.document.getElementById('app'));
