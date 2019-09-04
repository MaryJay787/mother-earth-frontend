import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    Button,
    Divider,
    Grid,
    Header,
    Form,
    Segment,
    Container
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
            <Segment placeholder>
                {/* <Header
                  as='h1'
                  inverted
                  style={{
                    backgroundImage: `url(${'https://www.purelyb.com/images/easyblog_shared/Copy-of-bigstock--202339081_20190227-023026_1.jpg'})`,
                    backgroundSize: 'cover',
                    fontWeight: 'normal',
                    marginBottom: 0
                                  }}
                  /> */}
              <Container>
              <Grid columns={2} stackable textAlign='center'>
                <Divider vertical>Or</Divider>
                {/* <Image src='https://www.purelyb.com/images/easyblog_shared/Copy-of-bigstock--202339081_20190227-023026_1.jpg' fluid /> */}
                <Grid.Row verticalAlign='middle'>
                  <Grid.Column>
                
                      <Header as='h1' content='Sign Up'/>
                      <Form onSubmit={this.handleSubmit}>
                          <Form.Field>
                          <label>Username</label>
                          <input onChange={this.handleUChange} placeholder='Username' type='text'/>
                          </Form.Field>
                          <Form.Field>
                          <label>Password</label>
                          <input onChange={this.handlePChange} placeholder='Password' type='password' />
                          </Form.Field>
                          <Form.Field>
                          </Form.Field>
                          <Button type='submit'>Submit</Button>
                      </Form>
                  </Grid.Column>

                  <Grid.Column>
                      <Header as='h1' content='Login'/>
                      <Form onSubmit={this.handleLoginSubmit}>
                          <Form.Field>
                          <label>Username</label>
                          <input onChange={this.handleUsChange} placeholder='Username' type='text' />
                          </Form.Field>
                          <Form.Field>
                          <label>Password</label>
                          <input onChange={this.handlePaChange} placeholder='Password' type='password' />
                          </Form.Field>
                          <Form.Field>
                          </Form.Field>
                          <Button type='submit'>Submit</Button>
                      </Form>
                  </Grid.Column>
                </Grid.Row>
              </Grid>

              </Container>
            </Segment>
        )
    }
}

export default connect()(withRouter(LoginSignUp));
