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
        const rc_id = this.props.rc.filter(rc => rc.remedy_id === rem_id)[0].id  
        this.props.dispatch({type: 'DELETE_REM', remedy: remedy})
        deleteRemedy(id, jwt, rc_id).then(data => {
            if(data) {
                window.location.assign('/userprofile')
            }
        })
    }

    render(){
        return(
            <div>
            <Card style={{fontFamily: 'Poiret One, cursive'}}>
                <Card.Content>
                    <Image src={this.props.rem.image}/>
                    <Divider/>
                    <Card.Header style={{fontFamily: 'Poiret One, cursive'}}  textAlign='center'>{this.props.rem.ailment}</Card.Header>
                    <Divider/>
                    <Card.Meta textAlign='center'>Remedy</Card.Meta>
                    <Card.Description>
                    {this.props.rem.solution}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    <Button.Group>
                        <Button basic color='black' style={{fontFamily: 'Tangerine, cursive'}} onClick={this.handleDelete}>Delete</Button>
                        <Button.Or />
                        <Link to='/create_note'>
                            <Button basic color='olive' style={{fontFamily: 'Tangerine, cursive'}} onClick={() => this.props.dispatch({type: 'TRACK_REM_NOTE', rem_id: this.props.rem.id})}>
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
const mapStateToProps = state => ({rc: state.herbs.user_rem_collections})
export default connect(mapStateToProps)(UserRemedyCard);