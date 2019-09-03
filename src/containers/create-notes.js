import React from 'react';
import { Segment, Form, Header, Image, Grid, Card, Container, Divider} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import ls from 'local-storage';

class CreateNote extends React.Component{
    state = {herb: [], date: '', title: '', content: ''}
    
    componentDidMount(){
        console.log(this.props.herb_id)
        fetch(`http://localhost:3000/herbs/${this.props.herb_id}`)
        .then(res => res.json())
        .then(data => this.setState({herb: data.oneHerb}))
    }

    handleDChange = (e) => {
        console.log(e)
        this.setState({date: e.target.value})

    }

    handleTChange = (e) => {
        console.log(e)
        this.setState({title: e.target.value})
    }

    handleNChange = (e) => {
        console.log(e)
        this.setState({content: e.target.value})
    }

    handleSubmit = (e) => {
        console.log(e)
        const uID = ls.get('id')
        const jwt = ls.get('jwt')
        const new_note = {user_id: uID, herb_id: this.props.herb_id, 
            date: this.state.date, title: this.state.title, 
            content: this.state.content}
        console.log(new_note)
        fetch(`http://localhost:3000/users/${uID}/notes`, {
            method: 'POST',
            headers:{
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${jwt}`
            },
            body: JSON.stringify(new_note)
          })
          .then(res => res.json())
          .then(data => {
            if(data){
                alert('Note Successfully Created')
                this.props.history.push("/userprofile")
        }   else
                alert('Invalid Entries')
        })
    }
    
    render(){
        console.log(this.state.herb.image)
        return(
            <Segment >
                <Container >
                <Header as='h1' content='Create Note' textAlign='center'/>

                <Grid columns={2} padded='vertically'>
                    <Grid.Column>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group widths='equal'>
                            <Form.Input fluid label='Date' placeholder='Date' onChange={this.handleDChange}/>
                            <Form.Input fluid label='Title' placeholder='Title' onChange={this.handleTChange} />
                            </Form.Group>
                            <Form.TextArea label='Note' placeholder='This herb or remedy is...' onChange={this.handleNChange}/>
                            <Form.Button>Submit</Form.Button>
                        </Form>
                    </Grid.Column>
                <Grid.Column>
                    <Card>
                        <Card.Content>
                            <Image src={this.state.herb.image} floated='right' size='medium' circular/>
                            <Card.Header textAlign='center'>{this.state.herb.name}</Card.Header>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                </Grid>
                </Container>
            </Segment>
        )
    }
}

const mapStateToProps = state => ({ herb: state.herbs.one_herb, remedies: state.herbs.userRemedies.userRemedies, herb_id: state.herbs.herb_id})

export default connect(mapStateToProps)(withRouter(CreateNote));