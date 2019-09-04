import React from 'react';
import { Segment, Item, Button } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { deleteNote } from '../fetches/backend';
import ls from 'local-storage';

class Notes extends React.Component{
    handleDelete = () =>{
        const id = ls.get('id')
        const jwt = ls.get('jwt')
        const note = this.props.note
        const note_id = this.props.note.id
        // const a = this.props.herbs.indexOf(note)
        this.props.dispatch({type: 'DELETE_NOTE', note: note})
        deleteNote(id, jwt, note_id).then(console.log)
    }

    render(){
        return(
            <Segment>
                <Item>
                    <Item.Image size='tiny' src={this.props.note.image} />
                    <Item.Meta>{this.props.note.subject_name}</Item.Meta>
                    <Item.Content>
                        <Item.Header as='a'>{this.props.note.title}</Item.Header>
                        <Item.Meta>{this.props.note.date}</Item.Meta>
                        <Item.Description>
                        {this.props.note.content}
                        </Item.Description>
                        <Item.Extra>Additional Details</Item.Extra>
                        <Button content='Delete Note' onClick={this.handleDelete}/>
                    </Item.Content>
                </Item>
            </Segment>
        )
    }
}
const mapStateToProps = state => ({herbs: state.herbs.notes})
export default connect(mapStateToProps)(Notes);