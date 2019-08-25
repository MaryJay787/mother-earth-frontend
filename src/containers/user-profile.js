import React from 'react';
import { Grid, Menu, Segment, Header, Image, List, Divider, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class UserProfile extends React.Component {
    state = { activeItem: 'bio' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <div>
            <Segment>
                <Header as='h1' content='User Profile' />
                <Link to='/logout'><Header size='small' content='Logout' textAlign='right'/></Link>
            </Segment>
            <Link to='/collection'><Header size='small' content='View Mother Earth' textAlign='right'/></Link>
            <Divider/>
                <Grid>
                    <Grid.Column stretched width={12}>
                    <Segment>
                    <Grid columns={2} relaxed='very'>
                <Grid.Column>
                    <p>
                    <Image src='https://cdn3.movieweb.com/i/article/AhBmYOoJsiQX68W6wJlk03y9BslvoZ/738:50/Gotham-City-Sirens-Art-Stone-Dushku-Poison-Ivy.jpg' />
                    </p>
                </Grid.Column>
                <Grid.Column>
                    <Container textAlign='center'>
                    <List>
                        <List.Item>
                        <List.Header>Name</List.Header>Poison Ivy
                        </List.Item>
                        <List.Item>
                        <List.Header>Location</List.Header>
                        Chicago quite a lovely city
                        </List.Item>
                        <List.Item>
                        <List.Header>Specialty</List.Header>
                        Herbalist
                        </List.Item>
                        <List.Item>
                        <List.Header>Bio</List.Header>
                        Since I was a child I loved plants and growing up I gained
                        a stronger love for them, I then got an education in herbology
                        and now am proud to call myself an herbalist today.
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

export default UserProfile;