import React from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import HomePage from './containers/homepage';
import LoginSignUp from './containers/login-signup';
import UserProfile from './containers/user-profile';
import Herbs from './containers/herbs-collection';
// import ls from 'local-storage';
import { getHerbs } from './fetches/backend';
import { connect } from 'react-redux';
// import Remedies from './containers/remedies-collection';


class App extends React.Component {
  componentDidMount(){
    // const id = ls.get('id')
    // console.log(id)
    // const jwt = ls.get('jwt')
    getHerbs().then(herbs => this.props.dispatch({ type: 'GET_HERBS', herbs }))
    
  }
  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/login' render={() => (<LoginSignUp />)}  />
          <Route exact path='/userprofile' render={() => (<UserProfile />)} />
          <Route exact path="/herb_collection" render={() => (<Herbs />)}/>

          {/* <Route exact path="/cars" render={() => ( <Remedies addCar={this.addCar} user={this.state.currentUser} loginStatus={this.state.loggedInStatus} cars={this.state.cars}/>)}/> */}
        </Switch>
      </div>
    )
  }
}

export default connect()(App);
