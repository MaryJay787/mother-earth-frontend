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
        const hc_id = this.props.hc.filter(hc => hc.herb_id === herb_id)[0].id
        this.props.dispatch({type: 'DELETE_HERB', herb: herb})
        deleteHerb(id, jwt, herb_id, hc_id).then(data => {
            if(data) {
                window.location.assign('/userprofile')
            }
        })
    }

    render(){
        return(
            <div>
            <Card style={{fontFamily: 'Poiret One, cursive'}} >
                <Card.Content>
                    <Image src={this.props.herb.image}/>
                    <Divider/>
                    <Card.Header style={{fontFamily: 'Poiret One, cursive'}} textAlign='center'>{this.props.herb.name}</Card.Header>
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
                        <Button basic color='black' style={{fontFamily: 'Tangerine, cursive'}} onClick={this.handleDelete}>Delete</Button>
                        <Button.Or />
                        <Link to='/create_note'>
                            <Button  basic color='olive' style={{fontFamily: 'Tangerine, cursive'}} onClick={() => this.props.dispatch({type: 'TRACK_HERB_NOTE', herb_id: this.props.herb.id})}>
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
const mapStateToProps = state => ({hc: state.herbs.user_herb_collections})
export default connect(mapStateToProps)(UserHerbCard);