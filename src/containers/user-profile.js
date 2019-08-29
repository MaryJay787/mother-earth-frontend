import React from 'react';
import { Grid, Menu, Segment, Header, Image, List, Divider, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import {connect } from 'react-redux';
import ls from 'local-storage';
import { getUser, getHerbs } from '../fetches/backend';

const user_herbs = `http://localhost:3000/user_herbs/:user_id`
const add_herb = `http://localhost:3000/add_herb/:user_id/:herb_id`
const remove_herb = `http://localhost:3000/remove_herb/:user_id/:herb_id`
const user_remedies = `http://localhost:3000/user_remedies/:user_id`
const add_remedy = `http://localhost:3000/add_remedy/:user_id/:remedy_id`
const remove_remedy = `http://localhost:3000/remove_remedy/:user_id/:remedy_id`



class UserProfile extends React.Component {
    // state = { activeItem: 'bio' }

    handleItemClick = (e, { name }) => this.props.dispatch({type: 'CHANGE_ACTIVE', name })
    
    componentDidMount(){
        const jwt = ls.get('jwt')
        console.log(jwt)
        getUser(jwt).then(data => this.props.dispatch({ type: 'SAVE_USER', user: data.user}))
        // getHerbs(jwt).then(herbs => this.props.dispatch({ type: 'GET_HERBS', herbs }))

    }
    
    handleLogout = (e) => {
        ls.remove('jwt')
        this.props.dispatch({type: 'LOGOUT'})
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
            </div>

        )
    }
}

const mapStateToProps = state => ({ user: state.herbs.user, active: state.herbs.activeItem })

export default connect(mapStateToProps)(UserProfile);