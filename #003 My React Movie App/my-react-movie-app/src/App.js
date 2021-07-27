import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";

function App() {
    return <HashRouter>
        {/* 한개만 렌더하기 exact */}
        <Route path="/" exact={true} component={Home}/>
        <Route path="/about" component={About}/>
    </HashRouter>
}

export default App;