import React from 'react';
import { Segment, Item, Button, Container } from 'semantic-ui-react';
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
        deleteNote(id, jwt, note_id).then(data => {
            if(data) {
                window.location.assign('/userprofile')
            }
        })
    }

    render(){
        return(
            <Segment>
                <Container>
                <Item style={{fontFamily: 'Poiret One, cursive'}}>
                    <Item.Image size='small' src={this.props.note.image} />
                    <Item.Meta>Note Topic: {this.props.note.subject_name}</Item.Meta>
                    <Item.Content>
                        <Item.Header as='a'> Title: {this.props.note.title}</Item.Header>
                        <Item.Meta>Date: {this.props.note.date}</Item.Meta>
                        <Item.Description> Note:
                         {this.props.note.content}
                        </Item.Description>
                        <Button basic color='olive' content='Delete Note' style={{fontFamily: 'Tangerine, cursive'}} onClick={this.handleDelete}/>
                    </Item.Content>
                </Item>
                </Container>
            </Segment>
        )
    }
}
const mapStateToProps = state => ({herbs: state.herbs.notes})
export default connect(mapStateToProps)(Notes);