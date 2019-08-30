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
                    <Card.Header textAlign='center'>{this.props.ailment}</Card.Header>
                    <Divider/>
                    <Card.Meta textAlign='center'>Remedy</Card.Meta>
                    <Card.Description>
                    {this.props.solution}
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