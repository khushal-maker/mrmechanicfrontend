import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Navbar from "./component/Navbar";
//import Card from "./component/Sample";
import Home from "./pages/Home";
//import Feature from './pages/Feature'
import Login from "./pages/Login";
import Info from "./component/Info";
//import { FooterContainer } from "./container/footer";
// import { GlobalStyles } from "./global-styles";
import Tyer from './component/Tyer'
import Battery from './component/Battery'
import Routine from './component/Routine'
import Washing from './component/Washing'
import Denting from './component/Denting'
import Custom from './component/Custom'
import Accessories from './component/Accessories'
import ImageCard from './component/ImageCard'
import Add from './component/Add'
import Chat from './component/chat/Chat'
import Join from './component/join/Join'



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
         
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/Info" component={Info} />
            <Route path='/add' component={Add}/>
            <Route path="/tyer" component={Tyer}/>
            <Route path='/battery' component={Battery}/>
            <Route path='/routine' component={Routine}/>
            <Route path='/washing' component={Washing}/>
            <Route path='/denting' component={Denting}/>
            <Route path='/custom' component={Custom}/>
            <Route path='/accessories' component={Accessories}/>
            <Route path='/imagecard' component={ImageCard}/>
            <Route path='/chat' component={Chat}/>
            <Route path='/join' component={Join}/>
          </Switch>
            {/* <Card/> */}
          {/* <GlobalStyles /> */}
          {/* <FooterContainer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
