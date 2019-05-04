import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search/Search.js";
import Saved from "./pages/Saved/Saved.js";
import API from "./utils/API";

class App extends Component {

    state = {
        books:[]
    }



    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path = "/" component = {Saved} />
                    <Route exact path = "/search" component = {Search} />
                </Switch>
            </Router>
        );
    }
}

export default App;