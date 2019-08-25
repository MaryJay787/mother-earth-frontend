import React from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';
// import UserProfile from './containers/user-profile';
import LoginSignUp from './containers/login-signup';
import HomePage from './containers/homepage';
// import Herbs from './containers/herbs-collection';
// import Remedies from './containers/remedies-collection';


class App extends React.Component {
  render(){
    return(
      <div>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/login" render={() => (<LoginSignUp/>)}  />
          {/* <Route exact path="/signup" render={() => (<Herbs handleSignIChange={this.handleSignIChange} handleSignUChange={this.handleSignUChange} handleSignPChange={this.handleSignPChange} handleSignSubmit={this.handleSignSubmit} username={this.state.username} password={this.state.password}/>)}/>
          <Route exact path="/userprofile" render={() => (<UserProfile logoutBtn={this.handleLogout} removeCar={this.removeCar} user={this.state.currentUser}/>)}/>
          <Route exact path="/cars" render={() => ( <Remedies addCar={this.addCar} user={this.state.currentUser} loginStatus={this.state.loggedInStatus} cars={this.state.cars}/>)}/> */}
        </Switch>
      </div>
    )
  }
}

export default App;
