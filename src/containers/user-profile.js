import React from 'react';
import { Grid, Menu, Segment, Header, Image, List, Divider, Container, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import HerbCard from '../components/herb-card';
import RemedyCard from '../components/remedy-card';
import PlantCard from '../components/plant-card';
import {connect } from 'react-redux';
import ls from 'local-storage';
import { getUser, getUserHerbs, getUserRems, getUserRemNotes, getUserHerbNotes } from '../fetches/backend';
import {} from ''
class UserProfile extends React.Component {
    // state = { activeItem: 'bio' }

    handleItemClick = (e, { name }) => this.props.dispatch({type: 'CHANGE_ACTIVE', name })
    
    componentDidMount(){
        const jwt = ls.get('jwt')
        const id = ls.get('id')
        console.log(jwt)
        getUser(jwt).then(data => this.props.dispatch({ type: 'SAVE_USER', user: data.user}))
        getUserHerbs(id).then(data => this.props.dispatch({type: 'GET_USER_HERBS', data}))
        getUserRems(id).then(data => this.props.dispatch({type: 'GET_USER_REMS', data}))
        // getUserHerbNotes(id).then(data => this.props.dispatch({type: 'GET_USER_HERB_NOTES', data}))
        // getUserRemNotes(id).then(data => this.props.dispatch({type: 'GET_USER_REMS_NOTES', data}))

    }

    handleLogout = (e) => {
        ls.remove('jwt')
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
            return this.props.remedies.map(rem => <RemedyCard key={rem.id} {...rem}/>);
        case 'my remedies':
            return this.props.plants.map(plant => <PlantCard key={plant.id} {...plant}/>);
        case 'herbal notes':
            return this.props.plants.map(plant => <PlantCard key={plant.id} {...plant}/>);
        case 'remedy notes':
            return this.props.plants.map(plant => <PlantCard key={plant.id} {...plant}/>);
        default:
            return null;
        }
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
                    <Link to='/editprofile'><Button content='Edit Profile'/></Link>
                    </Container>
                </Grid.Column>
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
                    name='herbal notes'
                    active={this.props.active === 'herbal notes'}
                    onClick={this.handleItemClick}
                    />
                    <Menu.Item
                    name='remedy notes'
                    active={this.props.active === 'remedy notes'}
                    onClick={this.handleItemClick}
                    />
                </Menu>
                </Grid.Column>
            </Grid>
            <Segment>
                <Container>
                    {this.clicked ? this.showUserCollection() : null }
                </Container>
            </Segment>
            </div>

        )
    }
}

const mapStateToProps = state => ({ user: state.herbs.user, active: state.herbs.activeItem })

export default connect(mapStateToProps)(UserProfile);