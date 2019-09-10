import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Header, Button, Segment, Form, Divider, Label, Image } from 'semantic-ui-react';
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
            const id = ls.get('id')
            const jwt = ls.get('jwt')
        fetch(`http://localhost:3000/users/${id}`, {
            method: 'PATCH',
            headers:{
                'Authorization': `Bearer ${jwt}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(values)})
            .then(res => res.text())
            .then(data => {
                if(data){
                    alert('Profile Updated Successfully')
                    this.props.history.push("/userprofile")
            }   else
                    alert('Invalid Entries')
            })

    }

    render(){
        return(
            <div>
                <Header as='h1' textAlign='left' style={{ fontFamily: 'Tangerine, cursive'}}> 
                    <Image src='https://www.nutramedix.com/media/wysiwyg/ingredients.png' />
                        Mother Earth 
                    <Image src='https://www.nutramedix.com/media/wysiwyg/ingredients.png' />
                </Header>
                <Segment color='olive' style={{marginRight: '3em', marginLeft: '3em', marginTop: '1em'}}>
                <Header as='h1' content='Edit Profile' textAlign='center' color='olive' style={{fontFamily: 'Tangerine, cursive'}}/>
                <Link to='/userprofile'>
                    <Label content='Back to Profile' attached='top right' color='olive' style={{fontFamily: 'Tangerine, cursive' }}/>
                </Link>
                <Divider/>
                <Form onSubmit={this.handleSubmit} style={{fontFamily: 'Poiret One, cursive'}}>
                    <Form.Group widths='equal'>
                        <Form.Field >
                        <label>Profile Picture</label>
                        <input placeholder='Image Url' onChange={this.handlePChange} />
                        </Form.Field>
                    </Form.Group>
                    
                    <Form.Group >
                        <Form.Field required>
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
                    </Form.Group>

                    <Form.Group >
                        <Form.Field required>
                        <label>Password</label>
                        <input placeholder='Password' onChange={this.handlePaChange} />
                        </Form.Field>
                    </Form.Group>
                    <Form.TextArea label='Bio' placeholder='Tell us more about you...' onChange={this.handleBChange} />


                    <Button type='submit' fluid compact color='olive' style={{fontFamily: 'Poiret One, cursive'}}>Submit</Button>
                </Form>
            </Segment>
            </div>
        )
    }
}

export default withRouter(EditProfile);