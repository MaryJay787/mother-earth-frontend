import React from 'react';
import { Grid, Menu, Segment, Header, Image, List, Divider, Container, Button} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import UserHerbCard from '../components/user-herb-card';
import UserRemedyCard from '../components/user-remedy-card';
import Notes from '../components/notes';
import { connect } from 'react-redux';
import ls from 'local-storage';
import { getUser, getUserHerbs, getUserRems, getUserNotes } from '../fetches/backend';

class UserProfile extends React.Component {
    handleItemClick = (e, { name }) => this.props.dispatch({type: 'CHANGE_ACTIVE', name })
    
    componentDidMount(){
        const jwt = ls.get('jwt')
        const id = ls.get('id')
        getUser(jwt).then(data => this.props.dispatch({ type: 'SAVE_USER', user: data.user}))
        getUserHerbs(id, jwt).then(data => this.props.dispatch({type: 'GET_USER_HERBS', data: data.usersherbs, user_herb_collects: data.userCollects}))
        getUserRems(id, jwt).then(data => this.props.dispatch({type: 'GET_USER_REMS', data: data.userRemedies, user_rem_collects: data.userRemsCollects}))
        getUserNotes(id, jwt).then(data => this.props.dispatch({type: 'GET_USER_NOTES', data: data.usernotes}))
    }

    handleLogout = () => {
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
            return this.props.userHerbs.map(herb => <UserHerbCard key={herb.id} herb={herb}/>);
        case 'my remedies':
            return this.props.userRems.map(rem => <UserRemedyCard key={rem.id} rem={rem}/>);
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
        .then(res => res.text())
        .then(data => {data ? alert('Account Deleted') : alert('Delete Attempt Failed')})
    }

    render() {
        return (
            <div>
                <Header as='h1' textAlign='left' style={{ fontFamily: 'Tangerine, cursive'}}> 
                    <Image src='https://www.nutramedix.com/media/wysiwyg/ingredients.png' />
                        Mother Earth 
                    <Image src='https://www.nutramedix.com/media/wysiwyg/ingredients.png' />
                </Header>
            <Segment style={{ marginTop: '1em',
                                 marginRight: '1em',
                                 marginLeft: '1em'
                            }} color='olive'>
                <Header as='h1' content='Profile' textAlign='center' style={{ fontFamily: 'Tangerine, cursive'}}/>
                <Link to='/'>
                    <Button color='olive' compact floated='right' style={{ marginBottom: '1em', fontFamily: 'Tangerine, cursive' }} onClick={this.handleLogout}>
                    Logout
                    </Button>
                </Link>
                <Link to='/new_herb_or_remedy'>
                    <Button color='olive' compact floated='right' style={{ marginBottom: '1em', fontFamily: 'Tangerine, cursive' }}>
                    New Herb/Remedy
                    </Button>
                </Link>
                <Link to='/herb_collection'>
                    <Button color='olive' compact floated='right' style={{ marginBottom: '1em', fontFamily: 'Tangerine, cursive' }}>
                    View Mother Earth
                    </Button>
                </Link>
            </Segment>
            <Divider/>
                <Grid style={{ marginTop: '1em',
                                 marginRight: '1em',
                                 marginLeft: '1em',
                                 marginBottom: '1em'
                            }}>
                    <Grid.Column stretched width={12}>
                    <Segment>
                    <Grid columns={2} relaxed='very'>
                <Grid.Column>
                    <p>
                    <Image src={this.props.user.image} />
                    </p>
                </Grid.Column>
                <Grid.Column>
                    <Container textAlign='center' style={{ marginTop: '1em',
                                 marginRight: '1em',
                                 marginLeft: '1em'
                            }}>
                    <List style={{fontFamily: 'Poiret One, cursive'}}>
                        <List.Item>
                        <List.Header style={{fontFamily: 'Poiret One, cursive'}} >Name</List.Header>
                        {this.props.user.name}
                        </List.Item>
                        <List.Item>
                        <List.Header style={{fontFamily: 'Poiret One, cursive'}}>Specialty</List.Header>
                        {this.props.user.specialty}
                        </List.Item>
                        <List.Item>
                        <List.Header style={{fontFamily: 'Poiret One, cursive'}}>Bio</List.Header>
                        {this.props.user.bio}
                        </List.Item>
                        <List.Item>
                        <List.Header style={{fontFamily: 'Poiret One, cursive'}}>Username</List.Header>{this.props.user.username}
                        </List.Item>
                    </List>
                    <Link to='/editprofile'>
                        <Button compact color='olive' content='Edit Profile' style={{marginTop: '7em', fontFamily: 'Tangerine, cursive'}}/>
                    </Link>
                    <Link to='/'>
                        <Button compact color='olive' content='Delete Account' style={{fontFamily: 'Tangerine, cursive'}} onClick={this.handleDeleteAct}/>
                    </Link>

                    </Container>
                </Grid.Column>
                </Grid>

                <Divider vertical >And</Divider>
                </Segment>
                </Grid.Column>

                <Grid.Column width={4}>
                <Menu fluid vertical tabular='right' style={{fontFamily: 'Tangerine, cursive'}}>
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
            <Segment style={{ marginTop: '1em',
                                 marginRight: '1em',
                                 marginLeft: '1em'
                            }}>
                    <Header as='h1' textAlign='center' content='My Earth' style={{fontFamily: 'Tangerine, cursive'}}/>
                    <Divider hidden/>
                    <Grid style={{ marginTop: '1em',
                                 marginRight: '1em',
                                 marginLeft: '1em'
                            }}>
                    {this.clicked ? this.showUserCollection() : null }
                    </Grid>
            </Segment>
            </div>

        )
    }
}

const mapStateToProps = state => ({ notes: state.herbs.notes ,user: state.herbs.user, active: state.herbs.activeItem, userHerbs: state.herbs.userHerbs, userRems: state.herbs.userRemedies})

export default connect(mapStateToProps)(UserProfile);