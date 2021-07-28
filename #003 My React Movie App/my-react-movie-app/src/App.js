import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from './components/Navigation';
import Detail from "./routes/Detail";

function App() {
    /* BrowserRouter는 주소에 #이 없지만, gh-page 설정이 복잡하다.*/
    return <HashRouter>
        {/* Router 안에 있어야, Navigation 의 Link가 작용한다.*/}
        <Navigation/> {/* 한개만 렌더하기 exact */}
        <Route path="/" exact={true} component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/movie/:id" component={Detail}/>
    </HashRouter>
}

export default App;