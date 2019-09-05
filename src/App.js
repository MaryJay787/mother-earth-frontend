import React from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import HomePage from './containers/homepage';
import LoginSignUp from './containers/login-signup';
import UserProfile from './containers/user-profile';
import EditProfile from './containers/edit-profile';
import Herbs from './containers/herbs-collection';
import CreateNote from './containers/create-notes';
import NewHerbOrRemedy from './containers/new-herb-or-remedy';
import { getHerbs, getPlants, getRemedies } from './fetches/backend';
import { connect } from 'react-redux';


class App extends React.Component {
  componentDidMount(){
    // const id = ls.get('id')
    // console.log(id)
    // const jwt = ls.get('jwt')
    getHerbs().then(herbs => this.props.dispatch({ type: 'GET_HERBS', herbs }))
    getPlants().then(plants => this.props.dispatch({ type: 'GET_PLANTS', plants }))
    getRemedies().then(remedies => this.props.dispatch({ type: 'GET_REMS', remedies }))
  }
  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/login' render={() => (<LoginSignUp />)}  />
          <Route exact path='/userprofile' render={() => (<UserProfile />)} />
          <Route exact path='/herb_collection' render={() => (<Herbs />)}/>
          <Route exact path='/editprofile' render={() => (<EditProfile />)}/>
          <Route exact path='/create_note' render={() => (<CreateNote />)}/>
          <Route exact path='/new_herb_or_remedy' render={() => (<NewHerbOrRemedy />)}/>
        </Switch>
      </div>
    )
  }
}

export default connect()(App);
