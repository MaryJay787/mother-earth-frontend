import React from 'react';
import { Segment, Form, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';

class CreateNote extends React.Component{
    
    
    render(){
        const herb_names = this.props.herbs.map(h => h.name)
        const rem_names = this.props.remedies.map(r => r.ailment)
        console.log(herb_names)
        console.log(rem_names)
        return(
            <Segment>
                <Header as='h1' content='Create Note' textAlign='center'/>
                <Form>
                    <Form.Group widths='equal'>
                    <Form.Input fluid label='Date' placeholder='Date' />
                    <Form.Select
                        fluid
                        label='Herbs'
                        options={herb_names}
                        placeholder='Herbs'
                    />
                    <Form.Select
                        fluid
                        label='Remedies'
                        options={rem_names}
                        placeholder='Remedies'
                    />
                    </Form.Group>
                    <Form.Group inline>
                    
                    </Form.Group>
                    <Form.TextArea label='Note' placeholder='This herb or remedy is...' />
                    <Form.Button>Submit</Form.Button>
                </Form>
            </Segment>
        )
    }
}

const mapStateToProps = state => ({ herbs: state.herbs.userHerbs.usersherbs, remedies: state.herbs.userRemedies.userRemedies})

export default connect(mapStateToProps)(CreateNote);