import React from 'react';
import { Grid, Menu, Segment, Header, Image, List, Divider, Container, Button} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import UserHerbCard from '../components/user-herb-card';
import UserRemedyCard from '../components/user-remedy-card';
// import PlantCard from '../components/plant-card';
import Notes from '../components/notes';
import { connect } from 'react-redux';
import ls from 'local-storage';
// import { getUser, getUserHerbs, getUserRems, getUserRemNotes, getUserHerbNotes } from '../fetches/backend';
import { getUser, getUserHerbs, getUserRems, getUserNotes } from '../fetches/backend';
class UserProfile extends React.Component {
    // state = { activeItem: 'bio' }

    handleItemClick = (e, { name }) => this.props.dispatch({type: 'CHANGE_ACTIVE', name })
    
    componentDidMount(){
        const jwt = ls.get('jwt')
        const id = ls.get('id')
        console.log(jwt)
        getUser(jwt).then(data => this.props.dispatch({ type: 'SAVE_USER', user: data.user}))
        getUserHerbs(id, jwt).then(data => this.props.dispatch({type: 'GET_USER_HERBS', data}))
        getUserRems(id, jwt).then(data => this.props.dispatch({type: 'GET_USER_REMS', data}))
        getUserNotes(id, jwt).then(data => this.props.dispatch({type: 'GET_USER_NOTES', data: data.usernotes}))
        // getUserRemNotes(id, jwt).then(data => this.props.dispatch({type: 'GET_USER_REMS_NOTES', data}))

    }

    handleLogout = (e) => {
        ls.remove('jwt')
        ls.remove('id')
        this.props.dispatch({type: 'LOGOUT'})
    }

    clicked(){
        this.props.dispatch({type: 'COLLECTION_CLICKED'})
    }

    showUserCollection(){
        const act = this.props.active
        switch(act){
        case 'profile':
            return null;
        case 'my herbs':
            return this.props.userHerbs.map(herb => <UserHerbCard key={herb.id} {...herb}/>);
        case 'my remedies':
            return this.props.userRems.map(rem => <UserRemedyCard key={rem.id} {...rem}/>);
        case 'notes':
            return this.props.notes.map(note => <Notes key={note.id} note={note}/>);
        default:
            return null;
        }
    }

    handleDeleteAct = () => {
        const id = ls.get('id')
        const jwt = ls.get('jwt')
        fetch(`http://localhost:3000/users/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        })
        .then(res => res.json())
        .then(console.log)
    }

    render() {
        
        return (
            <div>
            <Segment>
                <Header as='h1' content='User Profile' />
                <Link to='/'><Header size='small' content='Logout' textAlign='right' onClick={this.handleLogout} /></Link>
            </Segment>
            <Link to='/herb_collection'><Header size='small' content='View Mother Earth' textAlign='right'/></Link>
            <Divider/>
                <Grid>
                    <Grid.Column stretched width={12}>
                    <Segment>
                    <Grid columns={2} relaxed='very'>
                <Grid.Column>
                    <p>
                    <Image src={this.props.user.image} />
                    </p>
                </Grid.Column>
                <Grid.Column>
                    <Container textAlign='center'>
                    <List>
                        <List.Item>
                        <List.Header>Username</List.Header>{this.props.user.username}
                        </List.Item>
                        <List.Item>
                        <List.Header>Name</List.Header>
                        {this.props.user.name}
                        </List.Item>
                        <List.Item>
                        <List.Header>Specialty</List.Header>
                        {this.props.user.specialty}
                        </List.Item>
                        <List.Item>
                        <List.Header>Bio</List.Header>
                        {this.props.user.bio}
                        </List.Item>
                    </List>
                    </Container>
                </Grid.Column>
                <Link to='/editprofile'><Button content='Edit Profile'/></Link>
                <Link to='/'><Button content='Delete Account' onClick={this.handleDeleteAct}/></Link>

                </Grid>

                <Divider vertical>And</Divider>
                </Segment>
                </Grid.Column>

                <Grid.Column width={4}>
                <Menu fluid vertical tabular='right'>
                    <Menu.Item
                    name='profile'
                    active={this.props.active === 'profile'}
                    onClick={this.handleItemClick}
                    />
                    <Menu.Item
                    name='my herbs'
                    active={this.props.active === 'my herbs'}
                    onClick={this.handleItemClick}
                    />
                    <Menu.Item
                    name='my remedies'
                    active={this.props.active === 'my remedies'}
                    onClick={this.handleItemClick}
                    />
                    <Menu.Item
                    name='notes'
                    active={this.props.active === 'notes'}
                    onClick={this.handleItemClick}
                    />
                </Menu>
                </Grid.Column>
            </Grid>
            <Segment>
                    <Header as='h1' textAlign='center' content='My Earth'/>
                    <Divider hidden/>
                    <Grid>
                    {this.clicked ? this.showUserCollection() : null }
                    </Grid>
            </Segment>
            </div>

        )
    }
}

const mapStateToProps = state => ({ notes: state.herbs.notes ,user: state.herbs.user, active: state.herbs.activeItem, userHerbs: state.herbs.userHerbs.usersherbs, userRems: state.herbs.userRemedies.userRemedies})

export default connect(mapStateToProps)(UserProfile);