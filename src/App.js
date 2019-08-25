import React from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import HomePage from './containers/homepage';
import LoginSignUp from './containers/login-signup';
import UserProfile from './containers/user-profile';
import Herbs from './containers/herbs-collection';
// import Remedies from './containers/remedies-collection';


class App extends React.Component {
  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/login' render={() => (<LoginSignUp />)}  />
          <Route exact path='/userprofile' render={() => (<UserProfile />)} />
          <Route exact path="/collection" render={() => (<Herbs />)}/>
          {/* <Route exact path="/cars" render={() => ( <Remedies addCar={this.addCar} user={this.state.currentUser} loginStatus={this.state.loggedInStatus} cars={this.state.cars}/>)}/> */}
        </Switch>
      </div>
    )
  }
}

export default App;
