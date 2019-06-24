import React, { Component } from 'react';
import Home from './pages/Home/Home';
import Rooms from './pages/Rooms/Rooms';
import SingleRoom from './pages/SingleRoom/SingleRoom';
import Error from './pages/Error/Error';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';



class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props}/>} />
          <Route exact path="/rooms" render={(props) => <Rooms {...props}/>} />
          <Route exact path="/rooms/:slug" render={(props) => <SingleRoom {...props}/>} />
          <Route exact render={() =>  <Error/>} />
        </Switch>

        
        
        
       
      </div>
    )
  }
}

export default App;
