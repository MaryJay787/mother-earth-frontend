import React from 'react';
import { Header, Button, Segment, Card, Form } from 'semantic-ui-react';
import ls from 'local-storage';

class EditProfile extends React.Component {
    state = {
        username: '',
        image: '',
        name: '',
        specialty: '',
        bio: '',
        password: ''
      }

    handlePChange = (e) => {
        this.setState({image: e.target.value})
    }
    handleUChange = (e) => {
        this.setState({username: e.target.value})
    }

    handleNChange = (e) => {
        this.setState({name: e.target.value})
    }

    handleSChange = (e) => {
        this.setState({specialty: e.target.value})
    }

    handleBChange = (e) => {
        this.setState({bio: e.target.value})
    }

    handlePaChange = (e) => {
        this.setState({password: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const values = {user: {username: this.state.username, 
            password: this.state.password, image: this.state.image, specialty: this.state.specialty,
            bio: this.state.bio, name: this.state.name }}
            console.log(values)
            const id = ls.get('id')
            const jwt = ls.get('jwt')
            console.log(id)
        fetch(`http://localhost:3000/users/${id}`, {
            method: 'PATCH',
            headers:{
                'Authorization': `Bearer ${jwt}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(values)})
            .then(res => res.text())
            .then(console.log)
            // .then(this.props.history.push("/userprofile"))

    }

    render(){
        return(
            <div>
                <Header as='h1' content='Edit Profile' textAlign='center' />

                <Segment>
                    <Card centered>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                    <label>Profile Picture</label>
                    <input placeholder='Image Url' onChange={this.handlePChange} />
                    </Form.Field>
                    <Form.Field>
                    <label>Username</label>
                    <input placeholder='Username' onChange={this.handleUChange} />
                    </Form.Field>
                    <Form.Field>
                    <label>Name</label>
                    <input placeholder='Name' onChange={this.handleNChange} />
                    </Form.Field>
                    <Form.Field>
                    <label>Specialty</label>
                    <input placeholder='Specialty' onChange={this.handleSChange} />
                    </Form.Field>
                    <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' onChange={this.handlePaChange} />
                    </Form.Field>
                    <Form.TextArea label='Bio' placeholder='Tell us more about you...' onChange={this.handleBChange} />
                    
                    <Button type='submit'>Submit</Button>
                </Form>
                </Card>
            </Segment>
            </div>
        )
    }
}

export default EditProfile;