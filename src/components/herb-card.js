import React from 'react';
import { Button, Card, Image, Divider} from 'semantic-ui-react';


class HerbCard extends React.Component{
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

export default HerbCard