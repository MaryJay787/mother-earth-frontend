import React from 'react';
import { Grid, Menu, Segment, Header, Image, List, Divider, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import {connect } from 'react-redux';
import ls from 'local-storage';

const user_herbs = `http://localhost:3000/user_herbs/:user_id`
const add_herb = `http://localhost:3000/add_herb/:user_id/:herb_id`
const remove_herb = `http://localhost:3000/remove_herb/:user_id/:herb_id`

const user_remedies = `http://localhost:3000/user_remedies/:user_id`
const add_remedy = `http://localhost:3000/add_remedy/:user_id/:remedy_id`
const remove_remedy = `http://localhost:3000/remove_remedy/:user_id/:remedy_id`



class UserProfile extends React.Component {
    state = { activeItem: 'bio' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    
    componentDidMount(){
        const jwt = ls.get('jwt')
        console.log(jwt)

        fetch("http://localhost:3000/profile", {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        })
        .then(res => res.json())
        .then(data => { ls.set('username', data.user.username) 
                        ls.set('name', data.user.name) 
                        ls.set('image', data.user.image) 
                        ls.set('bio', data.user.bio) 
                        ls.set('id', data.user.id)
                        ls.set('specialty', data.user.specialty)
                     })
    }
    
    handleLogout = (e) => {
        ls.remove('jwt')
        this.props.dispatch({type: 'LOGOUT'})
    }


    render() {
        const { activeItem } = this.state
        const username = ls.get('username')
        const name = ls.get('name')
        const image = ls.get('image')
        const specialty = ls.get('specialty')
        const bio = ls.get('bio')
        
        return (
            <div>
            <Segment>
                <Header as='h1' content='User Profile' />
                <Link to='/'><Header size='small' content='Logout' textAlign='right' onClick={this.handleLogout} /></Link>
            </Segment>
            <Link to='/collection'><Header size='small' content='View Mother Earth' textAlign='right'/></Link>
            <Divider/>
                <Grid>
                    <Grid.Column stretched width={12}>
                    <Segment>
                    <Grid columns={2} relaxed='very'>
                <Grid.Column>
                    <p>
                    <Image src={image} />
                    </p>
                </Grid.Column>
                <Grid.Column>
                    <Container textAlign='center'>
                    <List>
                        <List.Item>
                        <List.Header>Username</List.Header>{username}
                        </List.Item>
                        <List.Item>
                        <List.Header>Name</List.Header>
                        {name}
                        </List.Item>
                        <List.Item>
                        <List.Header>Specialty</List.Header>
                        {specialty}
                        </List.Item>
                        <List.Item>
                        <List.Header>Bio</List.Header>
                        {bio}
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
                    active={activeItem === 'profile'}
                    onClick={this.handleItemClick}
                    />
                    <Menu.Item
                    name='my herbs'
                    active={activeItem === 'my herbs'}
                    onClick={this.handleItemClick}
                    />
                    <Menu.Item
                    name='my remedies'
                    active={activeItem === 'my remedies'}
                    onClick={this.handleItemClick}
                    />
                    <Menu.Item
                    name='herbal notes'
                    active={activeItem === 'herbal notes'}
                    onClick={this.handleItemClick}
                    />
                    <Menu.Item
                    name='remedy notes'
                    active={activeItem === 'remedy notes'}
                    onClick={this.handleItemClick}
                    />
                </Menu>
                </Grid.Column>
            </Grid>
            </div>

        )
    }
}

export default connect()(UserProfile);