import React from 'react';
import {
    Button,
    Form,
    Input,
    TextArea,
    Container,
    Header,
    Grid,
    Divider,
    Label,
    Image
  } from 'semantic-ui-react';
import { newHerb, newRemedy } from '../fetches/backend';
import { withRouter, Link } from 'react-router-dom';

class NewHerbOrRemedy extends React.Component{
    state = {
        herb_image: '',
        herb_name: '',
        herb_aka: '',
        herb_use: '',
        herb_caution: '',
        remedy_image: '',
        remedy_ailment: '',
        remedy_solution: ''
    }
    handleHerbName = (e) => {
        this.setState({ herb_name: e.target.value})
    }

    handleAka = (e) => {
        this.setState({ herb_aka: e.target.value})
    }

    handleImage = (e) => {
        this.setState({ herb_image: e.target.value})
    }

    handleCaution = (e) => {
        this.setState({ herb_caution: e.target.value})
    }

    handleUse = (e) => {
        this.setState({ herb_use: e.target.value})
    }

    handleRemUrl = (e) => {
        this.setState({ remedy_image: e.target.value})
    }

    handleRemName = (e) => {
        this.setState({ remedy_ailment: e.target.value})
    }

    handleSolution = (e) => {
        this.setState({ remedy_solution: e.target.value})
    }

    handleHerbSubmit = () => {
        const herb_values = {name: this.state.herb_name, aka: this.state.herb_aka,
                            image: this.state.herb_image, use: this.state.herb_use,
                            caution: this.state.herb_caution}
        newHerb(herb_values).then(data => {
                                    if(data){
                                        alert('Herb Successfully Created')
                                        this.props.history.push("/herb_collection")
                                    } else
                                        alert('Invalid Entries')
                                    })
    }

    handleRemedySubmit = () => {
        const remedy_values = {image: this.state.remedy_image, ailment: this.state.remedy_ailment,
                                solution: this.state.remedy_solution}
        newRemedy(remedy_values).then(data => {
                                        if(data){
                                            alert('Remedy Successfully Created')
                                            this.props.history.push("/herb_collection")
                                        } else
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
                <Container style={{marginTop: '1em'}} >
                    <Link to='/userprofile'>
                        <Label attached='top right' color='olive' content='Back to Profile' style={{fontFamily: 'Poiret One, cursive'}}/>
                    </Link>

                    <Divider/>

                    <Grid columns={2}>
                        <Grid.Column>
                            <Form onSubmit={this.handleHerbSubmit} style={{marginRight: '9em', fontFamily: 'Poiret One, cursive'}}>
                                <Header as='h1' color='olive' textAlign='center' content='New Herb' style={{fontFamily: 'Tangerine, cursive' }} />
                                <Form.Group widths='equal'>
                                <Form.Field
                                    required
                                    control={Input}
                                    label='Herb Name'
                                    placeholder='Name'
                                    onChange={this.handleHerbName}
                                />
                                <Form.Field
                                    required
                                    control={Input}
                                    label='Herb Latin Name'
                                    placeholder='A.K.A'
                                    onChange={this.handleAka}
                                />
                                </Form.Group>
                                <Form.Field
                                    required
                                    control={Input}
                                    label='Image'
                                    placeholder='Herb Url'
                                    onChange={this.handleImage}
                                />
                                <Form.Field
                                    required
                                    control={Input}
                                    label='Caution'
                                    placeholder='Herb Caution'
                                    onChange={this.handleCaution}
                                />
                                <Form.Field
                                required
                                control={TextArea}
                                label='Herb Benefits'
                                placeholder='Herb benefits and Uses...'
                                onChange={this.handleUse}
                                />
                                
                                <Form.Field control={Button} fluid compact color='olive' style={{fontFamily: 'Poiret One, cursive'}}>Submit</Form.Field>
                            </Form>

                        </Grid.Column>
                        <Grid.Column>
                                <Form onSubmit={this.handleRemedySubmit} style={{marginLeft: '9em', fontFamily: 'Poiret One, cursive'}}>
                                    <Header as='h1' color='olive' textAlign='center' content='New Remedy' style={{fontFamily: 'Tangerine, cursive' }}/>
                                    <Form.Group widths='equal'>
                                    <Form.Field
                                        required
                                        control={Input}
                                        label='Image'
                                        placeholder='Remedy Url'
                                        onChange={this.handleRemUrl}
                                    />
                                    <Form.Field
                                        required
                                        control={Input}
                                        label='Ailment'
                                        placeholder='Remedy Name'
                                        onChange={this.handleRemName}
                                    />
                                    </Form.Group>
                                    <Form.Field
                                    required
                                    control={TextArea}
                                    label='Solution'
                                    placeholder='This remedy solution is...'
                                    onChange={this.handleSolution}
                                    />
                                    
                                    <Form.Field control={Button} fluid compact color='olive' style={{fontFamily: 'Poiret One, cursive'}}>Submit</Form.Field>
                                </Form>
                        </Grid.Column>
                    </Grid>
                    
                    <Divider vertical hidden/>
                </Container>
            </div>
        )
    }
}

export default (withRouter(NewHerbOrRemedy));