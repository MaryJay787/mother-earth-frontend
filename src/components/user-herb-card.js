import React from 'react';
import { Button, Card, Image, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteHerb } from '../fetches/backend';
import ls from 'local-storage';

class UserHerbCard extends React.Component{
    handleDelete = () =>{
        const id = ls.get('id')
        const jwt = ls.get('jwt')
        const herb = this.props.herb
        const herb_id = this.props.herb.id       
        this.props.dispatch({type: 'DELETE_HERB', herb: herb})
        deleteHerb(id, jwt, herb_id).then(alert('Herb Deleted'))
    }

    render(){
        return(
            <div>
            <Card>
                <Card.Content>
                    <Image src={this.props.herb.image}/>
                    <Divider/>
                    <Card.Header textAlign='center'>{this.props.herb.name}</Card.Header>
                    <Divider/>
                    <Card.Meta textAlign='center'>{this.props.herb.aka}</Card.Meta>
                    <Card.Description>
                    <strong>Uses:</strong> {this.props.herb.use}
                    Caution: <strong>{this.props.herb.caution}</strong>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    <Button.Group>
                        <Button basic color='red' onClick={this.handleDelete}>Delete</Button>
                        <Button.Or />
                        <Link to='/create_note'><Button basic color='green' positive>Make A Note</Button></Link>
                    </Button.Group>
                    </div>
                </Card.Content>
            </Card>
            <Divider/>
            </div>
        )
    }
}

export default connect()(UserHerbCard);