import React from 'react';
import { Button, Card, Image, Divider} from 'semantic-ui-react';

class PlantCard extends React.Component{
    render(){
        return(
            <div>
            <Card>
                <Card.Content>
                    <p>{this.props.link}</p>
                    <Divider/>
                    <Card.Header textAlign='center'>{this.props.scientific_name}</Card.Header>
                    <Divider/>
                    <Card.Meta textAlign='center'>Plant</Card.Meta>
                    <Card.Description>
                    <strong>Uses:</strong> Plant Info
                    Caution: <strong>PlantDangers</strong>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    <Button basic color='green'>
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

export default PlantCard