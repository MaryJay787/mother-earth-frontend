import React from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Divider,
    Grid,
    Header,
    Form,
    Segment,
  } from 'semantic-ui-react'

class LoginSignUp extends React.Component{
    render(){
        return(
            <Segment placeholder>
    <Grid columns={2} stackable textAlign='center'>
      <Divider vertical>Or</Divider>

      <Grid.Row verticalAlign='middle'>
        <Grid.Column>
            <Header as='h1' content='Sign Up'/>
            <Form>
                <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' />
                </Form.Field>
                <Form.Field>
                </Form.Field>
                <Link to="/userprofile"><Button type='submit'>Submit</Button></Link>
            </Form>
        </Grid.Column>

        <Grid.Column>
            <Header as='h1' content='Login'/>
            <Form>
                <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' />
                </Form.Field>
                <Form.Field>
                </Form.Field>
                <Link to="/userprofile"><Button type='submit'>Submit</Button></Link>
            </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
        )
    }
}

export default LoginSignUp;