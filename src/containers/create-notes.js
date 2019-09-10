import React from 'react';
import { Segment, Form, Header, Image, Grid, Card, Container, Button, Label, Divider} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
import ls from 'local-storage';

class CreateNote extends React.Component{
    state = {herb: [], rem: [], date: '', title: '', content: '', showHerb: false, showRem: false}


    handleDChange = (e) => {
        this.setState({date: e.target.value})
    }

    handleTChange = (e) => {
        this.setState({title: e.target.value})
    }

    handleNChange = (e) => {
        this.setState({content: e.target.value})
    }

    handleSubmit = (e) => {
        const uID = ls.get('id')
        const jwt = ls.get('jwt')
        const new_herb_note = this.state.showHerb ? {user_id: uID, herb_id: this.props.herb_id, subject_name: this.state.herb.name,
            image: this.state.herb.image,
            date: this.state.date, title: this.state.title, 
            content: this.state.content} : null

        const new_rem_note = this.state.showRem ? {user_id: uID, remedy_id: this.props.rem_id, subject_name: this.state.rem.ailment,
            image: this.state.rem.image,
            date: this.state.date, title: this.state.title, 
            content: this.state.content} : null
        
        if (this.state.showHerb){
            fetch(`http://localhost:3000/users/${uID}/notes`, {
                method: 'POST',
                headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${jwt}`
                },
                body: JSON.stringify(new_herb_note)
            })
            .then(res => res.json())
            .then(data => {
                if(data){
                    alert('Note Successfully Created')
                    this.props.dispatch({type: 'CLR_HERB_TRACKER'})
                    this.props.history.push("/userprofile")
                }else
                    alert('Invalid Entries')
                })
        }else if (this.state.showRem){
            fetch(`http://localhost:3000/users/${uID}/notes`, {
                method: 'POST',
                headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${jwt}`
                },
                body: JSON.stringify(new_rem_note)
            })
            .then(res => res.json())
            .then(data => {
                if(data){
                    alert('Note Successfully Created')
                    this.props.dispatch({type: 'CLR_REM_TRACKER'})
                    this.props.history.push("/userprofile")
                }else
                    alert('Invalid Entries')
                })
            }
        }

    handleClick = (e) => {
        const herb_or_rem = e.target.id
        if (herb_or_rem === '1'){
            this.setState({showHerb: true})
           return fetch(`http://localhost:3000/herbs/${this.props.herb_id}`)
            .then(res => res.json())
            .then(data => this.setState({herb: data.oneHerb}))
        }else if (herb_or_rem === '2'){
            this.setState({showRem: true})
           return fetch(`http://localhost:3000/remedies/${this.props.rem_id}`)
            .then(res => res.json())
            .then(data => this.setState({rem: data.oneRemedy}))
        }
    }
     
    render(){
        return(
            <Segment color='olive'>
                <Container >
                <Header as='h1' color='olive' content='Create Note' textAlign='center'/> 
                <Divider/>                   
                <Link to='/userprofile'>
                    <Label attached='bottom right' color='olive' content='Back to Profile' onClick={() => this.props.dispatch({type: 'CLR_HERB_&_REM_TRACKER'})}/>
                </Link>
                <Grid columns={2} padded='vertically'>
                    <Grid.Column >
                        <Form onSubmit={this.handleSubmit} style={{marginLeft: '10em'}}>
                            <Form.Group widths='equal'>
                            <Form.Input required fluid label='Date' placeholder='Date' onChange={this.handleDChange}/>
                            <Form.Input required fluid label='Title' placeholder='Title' onChange={this.handleTChange} />
                            </Form.Group>
                            <Form.TextArea required label='Note' placeholder='This herb or remedy is...' onChange={this.handleNChange}/>
                            <Form.Button color='olive' compact style={{marginLeft: '11.5em'}}>Submit</Form.Button>
                        </Form>
                    </Grid.Column>
                <Grid.Column>
                    <Card style={{marginLeft: '8em'}}>
                        {this.props.herb_id ? <Button color='olive' content='See Selected Herb' id='1' onClick={this.handleClick}/> : null}
                        {this.props.rem_id ? <Button color='olive' content='See Selected Remedy' id='2' onClick={this.handleClick}/> : null}
                        <Card.Content>
                            <Image src={this.state.showHerb ? this.state.herb.image : null} floated='right' size='medium' circular/>
                            <Image src={this.state.showRem ? this.state.rem.image : null} floated='right' size='medium' circular/>
                            <Card.Header textAlign='center'>{this.state.showHerb ? this.state.herb.name : null}</Card.Header>
                            <Card.Header textAlign='center'>{this.state.showRem ? this.state.rem.ailment : null}</Card.Header>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                </Grid>
                </Container>
            </Segment>
        )
    }
}

const mapStateToProps = state => ({ herb: state.herbs.one_herb, remedies: state.herbs.userRemedies.userRemedies, herb_id: state.herbs.herb_id, rem_id: state.herbs.rem_id})

export default connect(mapStateToProps)(withRouter(CreateNote));