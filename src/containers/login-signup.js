import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    Button,
    Divider,
    Grid,
    Header,
    Form,
    Segment,
    Container, Image
  } from 'semantic-ui-react';
import { connect } from 'react-redux'
import ls from 'local-storage';

class LoginSignUp extends React.Component{
  state = {
    username: '',
    password: ''
  }

  handleUChange = (e) => {
    this.setState({username: e.target.value})
  }

  handlePChange = (e) => {
    this.setState({password: e.target.value})
  }

  handleUsChange = (e) => {
    this.setState({username: e.target.value})

  }

  handlePaChange = (e) => {
    this.setState({password: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const values = {user: {username: this.state.username, password: this.state.password}}
    fetch("http://localhost:3000/users", {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(values)
    })
    .then(res => res.json())
    .then(data => {
      if (data.jwt){
        ls.set('jwt', data.jwt)
        ls.set('id', data.user.id)
        this.props.dispatch({type: 'LOGIN'})
        this.props.history.push("/userprofile")
      } else
      alert('Invalid Entry')
    })
  }

  handleLoginSubmit = (e) => {
    e.preventDefault()
      const values = {user: {username: this.state.username, password: this.state.password}}
    fetch("http://localhost:3000/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(values)
    })
    .then(res => res.json())
    .then(data => {
      if(data.jwt){
        ls.set('jwt', data.jwt)
        ls.set('id', data.user.id)
        this.props.dispatch({type: 'LOGIN'})
        this.props.history.push("/userprofile")
      } else 
      alert('Incorrect Username or Password')
    })
  }


    render(){
        return(
          <div>
            <Segment placeholder color='green' padded='very' style={{marginTop: '1em', marginLeft: '2em', marginRight: '2em'}}>
              <Container style={{marginTop: '1em', marginLeft: '2em', marginRight: '2em'}} >
              <Grid columns={2} stackable textAlign='center'>
                <Divider vertical>Or</Divider>
                <Grid.Row verticalAlign='middle'>
                  <Grid.Column>
                      <Header as='h1' style={{fontFamily: 'Tangerine, cursive' }}>
                        Sign Up<Image src='https://www.alvita.com/media/catalog/product/g/r/greentea.png'/>
                        </Header>
                      <Form onSubmit={this.handleSubmit} style={{marginRight: '9em', marginBottom: '3em', fontFamily: 'Poiret One, cursive'}}>
                          <Form.Field required>
                          <label>Username</label>
                          <Form.Input icon='user' iconPosition='left' onChange={this.handleUChange} placeholder='Username' type='text'/>
                          </Form.Field>
                          <Form.Field required>
                          <label>Password</label>
                          <Form.Input icon='lock' iconPosition='left' onChange={this.handlePChange} placeholder='Password' type='password' />
                          </Form.Field>
                          <Button type='submit' color='green' fluid  style={{fontFamily: 'Poiret One, cursive'}}>Sign Up</Button>
                      </Form>
                  </Grid.Column>

                  <Grid.Column>
                      <Header as='h1' style={{marginLeft: '6em', fontFamily: 'Tangerine, cursive'}}>
                        Login<Image src='https://img.pngio.com/herb-hedgerow-lemon-balm-skincare-herb-png-500_542.png' /> 
                      </Header>
                      <Form onSubmit={this.handleLoginSubmit} style={{marginLeft: '9em', marginBottom: '3em', fontFamily: 'Poiret One, cursive'}}>
                          <Form.Field required>
                          <label>Username</label>
                          <Form.Input onChange={this.handleUsChange} placeholder='Username' type='text' icon='user' iconPosition='left' />
                          </Form.Field>
                          <Form.Field required>
                          <label>Password</label>
                          <Form.Input onChange={this.handlePaChange} placeholder='Password' type='password' icon='lock' iconPosition='left' />
                          </Form.Field>
                          <Button type='submit' color='green' fluid style={{fontFamily: 'Poiret One, cursive'}}>Login</Button>
                      </Form>
                  </Grid.Column>
                </Grid.Row>
              </Grid>

              </Container>
            </Segment>
            </div>
        )
    }
}

export default connect()(withRouter(LoginSignUp));
