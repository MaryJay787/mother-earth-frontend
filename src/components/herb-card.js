import React from 'react';
import { Button, Card, Image, Divider, Header} from 'semantic-ui-react';
import ls from 'local-storage';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class HerbCard extends React.Component{

    handleAddHerb = (e) => {
        console.log(e, 'add btn clicked')
        const user_id = ls.get('id')
        const herb_id = this.props.id
        const jwt = ls.get('jwt')
        console.log('uid', user_id, 'hid', herb_id, jwt)
        fetch(`http://localhost:3000/add_herb/${user_id}/${herb_id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
            body: JSON.stringify({user_id: user_id, herb_id: herb_id})
        })
        .then(res => res.json())
        .then(console.log)
    }
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
                    <Button basic color='green' onClick={this.handleAddHerb}>
                        Add to Collection
                    </Button>
                    <Button basic color='red'>
                        Decline
                    </Button>
                    </div>
                </Card.Content>
            </Card>
            <Divider/>
            </div>
        )
    }
}

export default connect()(HerbCard);