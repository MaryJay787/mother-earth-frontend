import React from 'react';
import { Button, Card, Image, Divider, Icon } from 'semantic-ui-react';

class SearchRemedies extends React.Component{
    state = {remToggle: false}

    render(){
        return(
            <div>
            <Card color='olive' style={{fontFamily: 'Poiret One, cursive'}}>
                {console.log(this.props.ailment)}
                <Card.Content>
                    <Image src={this.props.image}/>
                    <Divider/>
                    <Card.Header textAlign='center' style={{fontFamily: 'Poiret One, cursive'}}>{this.props.ailment}</Card.Header>
                    <Divider/>
                    <Card.Meta textAlign='center'>Remedy</Card.Meta>
                    <Card.Description>
                    {this.props.solution}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    {this.state.remToggle ? null : <Button compact animated='fade' basic color='olive' onClick={this.handleAddRem}> 
                                                    <Button.Content visible><Icon name='thumbtack'/></Button.Content>
                                                    <Button.Content hidden style={{ fontFamily: 'Tangerine, cursive'}}>Add To Collection</Button.Content>
                                                    </Button>}
                    </div>
                </Card.Content>
            </Card>
            <Divider/>
            </div>
        )
    }

}

export default SearchRemedies;