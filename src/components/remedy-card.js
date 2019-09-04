import React from 'react';
import { Button, Card, Image, Divider} from 'semantic-ui-react';
import ls from 'local-storage';
import { connect } from 'react-redux';


class HerbCard extends React.Component{
    state = {herbToggle: false}
    handleAddRem = (e) => {
        console.log(e, 'add btn clicked')
        const user_id = ls.get('id')
        const rem_id = this.props.id
        const jwt = ls.get('jwt')
        console.log('uid', user_id, 'rid', rem_id, jwt)
        fetch(`http://localhost:3000/add_remedy/${user_id}/${rem_id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
            body: JSON.stringify({user_id: user_id, remedy_id: rem_id})
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
                    <Card.Header textAlign='center'>{this.props.ailment}</Card.Header>
                    <Divider/>
                    <Card.Meta textAlign='center'>Remedy</Card.Meta>
                    <Card.Description>
                    {this.props.solution}
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