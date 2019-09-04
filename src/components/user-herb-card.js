import React from 'react';
import { Button, Card, Image, Divider, Header} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class UserHerbCard extends React.Component{
    state = {herbToggle: false}

    render(){
        return(
            <div>
            <Card>
                <Card.Content>
                    <Link to='/create_note'><Header size='small' textAlign='right' content='Make Note' onClick={(e) => this.props.dispatch({type: 'TRACK_HERB_NOTE', herb_id: this.props.id})}/></Link>
                    <Image src={this.props.image}/>
                    <Divider/>
                    <Card.Header textAlign='center'>{this.props.name}</Card.Header>
                    <Divider/>
                    <Card.Meta textAlign='center'>{this.props.aka}</Card.Meta>
                    <Card.Description>
                    <strong>Uses:</strong> {this.props.use}
                    Caution: <strong>{this.props.caution}</strong>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    {this.state.herbToggle ? null : <Button basic color='red' content='Delete'/> }
                    
                    </div>
                </Card.Content>
            </Card>
            <Divider/>
            </div>
        )
    }
}

export default connect()(UserHerbCard);