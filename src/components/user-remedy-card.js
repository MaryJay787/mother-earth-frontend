import React from 'react';
import { Button, Card, Image, Divider, Header} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteRemedy } from '../fetches/backend';
import ls from 'local-storage';

class UserRemedyCard extends React.Component{
    state = {remToggle: false}
    handleDelete = () =>{
        const id = ls.get('id')
        const jwt = ls.get('jwt')
        const remedy = this.props.rem
        const rem_id = this.props.rem.id
        // const a = this.props.herbs.indexOf(note)
        this.props.dispatch({type: 'DELETE_REM', remedy: remedy})
        deleteRemedy(id, jwt, rem_id).then(console.log)
    }

    render(){
        return(
            <div>
            <Card>
                <Card.Content>
                    <Link to='/create_note'><Header size='small' textAlign='right' content='Make Note' onClick={(e) => this.props.dispatch({type: 'TRACK_HERB_NOTE', rem_id: this.props.rem.id})}/></Link>
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
                    {this.state.remToggle ? null : <Button basic color='red' content='Delete' onClick={this.handleDelete}/> }
                    
                    </div>
                </Card.Content>
            </Card>
            <Divider/>
            </div>
        )
    }
}

export default connect()(UserRemedyCard);