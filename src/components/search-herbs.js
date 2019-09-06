import React from 'react';
import { Button, Card, Image, Divider, Header} from 'semantic-ui-react';

class SearchHerbs extends React.Component{
    state = {herbToggle: false}

    render(){
        return(
            <div>
            <Header as='h1' content='Herbs'/>
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

export default SearchHerbs;