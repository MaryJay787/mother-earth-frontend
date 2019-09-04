import React from 'react';
import { Button, Card, Image, Divider} from 'semantic-ui-react';
import ls from 'local-storage';
import { connect } from 'react-redux'


class HerbCard extends React.Component{
    state = {herbToggle: false}
    handleAddHerb = (e) => {
        const user_id = ls.get('id')
        const herb_id = this.props.id
        const jwt = ls.get('jwt')
        this.setState({herbToggle: !this.state.herbToggle})
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
                    {this.state.herbToggle ? null : <Button basic color='green' onClick={this.handleAddHerb} content='Add To Collection'/>}
                    </div>
                </Card.Content>
            </Card>
            <Divider/>
            </div>
        )
    }
}

export default connect()(HerbCard);