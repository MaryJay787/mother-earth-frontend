import React from 'react';
import { Button, Card, Image, Divider, Icon } from 'semantic-ui-react';

class SearchHerbs extends React.Component{
    state = {herbToggle: false}

    render(){
        return(
            <div>
            <Card color='olive' style={{fontFamily: 'Poiret One, cursive'}}>
                <Card.Content>
                    <Image src={this.props.image}/>
                    <Divider/>
                    <Card.Header textAlign='center' style={{fontFamily: 'Poiret One, cursive'}}>{this.props.name}</Card.Header>
                    <Divider/>
                    <Card.Meta textAlign='center'>{this.props.aka}</Card.Meta>
                    <Card.Description>
                    <strong>Uses:</strong> {this.props.use}
                    Caution: <strong>{this.props.caution}</strong>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    {this.state.herbToggle ? null :  <Button compact animated='fade' basic color='olive' onClick={this.handleAddHerb}> 
                                                    <Button.Content visible><Icon name='thumbtack'/></Button.Content>
                                                    <Button.Content hidden style={{ fontFamily: 'Tangerine, cursive'}}>Add To Collection</Button.Content>
                                                    </Button> }
                    </div>
                </Card.Content>
            </Card>
            <Divider/>
            </div>
        )
    }

}

export default SearchHerbs;