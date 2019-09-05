import React from 'react';
import {
    Button,
    Form,
    Input,
    TextArea,
    Container,
    Header
  } from 'semantic-ui-react';

class NewRemedy extends React.Component{
    render(){
        return(
            <Container style={{marginTop: '1em'}}>
            <Form >
                <Header as='h1' textAlign='center' content='New Remedy' />
                <Form.Group widths='equal'>
                <Form.Field
                    control={Input}
                    label='Image'
                    placeholder='Remedy Url'
                />
                <Form.Field
                    control={Input}
                    label='Ailment'
                    placeholder='Remedy Name'
                />
                </Form.Group>
                <Form.Field
                control={TextArea}
                label='Solution'
                placeholder='This remedy solution is...'
                />
                
                <Form.Field control={Button}>Submit</Form.Field>
            </Form>
            </Container>
        )
    }
}

export default NewRemedy;