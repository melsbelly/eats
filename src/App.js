import React from 'react';
import {Route} from "react-router-dom";
import {ConnectedRouter} from "connected-react-router";
import {Home} from "./components/Home";
import {history} from "./store";

export default function App() {
    return (
        <ConnectedRouter history={history}>
            <Route exact path="/" component={Home}/>
        </ConnectedRouter>
    );
};
