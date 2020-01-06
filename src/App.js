import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Quotes from "./containers/Quotes/Quotes";
import AddNew from "./containers/AddNew/AddNew";
import Edit from "./containers/Edit/Edit";


const App = () => {
    return (
        <BrowserRouter>
            <Navigation/>
            <Switch>
                <Route path="/" exact component={Quotes}/>
                <Route path="/categories/:name" component={Quotes}/>
                <Route path="/quotes/new" component={AddNew}/>
                <Route path="/quotes/:id" component={Edit}/>
                <Route render={() => <h1>Not found</h1>}/>
            </Switch>
        </BrowserRouter>
    );
};

export default App;