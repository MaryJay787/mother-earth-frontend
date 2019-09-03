import React from 'react';
import { Segment, Item, Button } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { deleteNote } from '../fetches/backend';
import ls from 'local-storage';

class Notes extends React.Component{
    handleDelete = () =>{
        const id = ls.get('id')
        const jwt = ls.get('jwt')
        const note_id = this.props.id
        // console.log(id, jwt, note_id)
        this.props.dispatch({type: 'DELETE_NOTE', id: note_id})
        deleteNote(id, jwt, note_id).then(console.log)
    }

    render(){
        return(
            <Segment>
                <Item>
                    <Item.Image size='tiny' src={this.props.image} />
                    <Item.Meta>{this.props.subject_name}</Item.Meta>
                    <Item.Content>
                        <Item.Header as='a'>{this.props.title}</Item.Header>
                        <Item.Meta>{this.props.date}</Item.Meta>
                        <Item.Description>
                        {this.props.content}
                        </Item.Description>
                        <Item.Extra>Additional Details</Item.Extra>
                        <Button content='Delete Note' onClick={this.handleDelete}/>
                    </Item.Content>
                </Item>
            </Segment>
        )
    }
}

export default connect()(Notes);