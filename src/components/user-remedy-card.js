import React from 'react';
import { Button, Card, Image, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteRemedy } from '../fetches/backend';
import ls from 'local-storage';

class UserRemedyCard extends React.Component{
    handleDelete = () =>{
        const id = ls.get('id')
        const jwt = ls.get('jwt')
        const remedy = this.props.rem
        const rem_id = this.props.rem.id       
        this.props.dispatch({type: 'DELETE_REM', remedy: remedy})
        deleteRemedy(id, jwt, rem_id).then(alert('Remedy Deleted'))
    }

    render(){
        return(
            <div>
            <Card>
                <Card.Content>
                    <Image src={this.props.rem.image}/>
                    <Divider/>
                    <Card.Header textAlign='center'>{this.props.rem.ailment}</Card.Header>
                    <Divider/>
                    <Card.Meta textAlign='center'>Remedy</Card.Meta>
                    <Card.Description>
                    {this.props.rem.solution}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    <Button.Group>
                        <Button basic color='red' onClick={this.handleDelete}>Delete</Button>
                        <Button.Or />
                        <Link to='/create_note'>
                            <Button basic color='green' positive onClick={() => this.props.dispatch({type: 'TRACK_REM_NOTE', rem_id: this.props.rem.id})}>
                                Make A Note
                            </Button>
                        </Link>
                    </Button.Group>
                    </div>
                </Card.Content>
            </Card>
            <Divider/>
            </div>
        )
    }
}

export default connect()(UserRemedyCard);