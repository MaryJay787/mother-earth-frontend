import React from 'react';
import {
    Button,
    Form,
    Input,
    TextArea,
    Container,
    Header
  } from 'semantic-ui-react';

class NewHerb extends React.Component{
    render(){
        return(
            <Container style={{marginTop: '1em'}}>
            <Form >
                <Header as='h1' textAlign='center' content='New Herb' />
                <Form.Group widths='equal'>
                <Form.Field
                    control={Input}
                    label='Herb Name'
                    placeholder='Name'
                />
                <Form.Field
                    control={Input}
                    label='Herb Latin Name'
                    placeholder='A.K.A'
                />
                <Form.Field
                    control={Input}
                    label='Image'
                    placeholder='Image Url'
                />
                <Form.Field
                    control={Input}
                    label='Caution'
                    placeholder='Herb Caution'
                />
                </Form.Group>
                <Form.Field
                control={TextArea}
                label='Herb Benefits'
                placeholder='Herb benefits and Uses...'
                />
                
                <Form.Field control={Button}>Submit</Form.Field>
            </Form>
            </Container>
        )
    }
}

export default NewHerb;