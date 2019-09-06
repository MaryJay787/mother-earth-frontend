import React from 'react';
import { Button, Card, Image, Divider, Header} from 'semantic-ui-react';

class SearchRemedies extends React.Component{
    state = {remToggle: false}

    render(){
        return(
            <div>
                <Header as='h1' content='Remedies'/>
            <Card>
                {console.log(this.props.ailment)}
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
                    {this.state.remToggle ? null : <Button basic color='green' onClick={this.handleAddRem} content='Add To Collection'/>}
                    </div>
                </Card.Content>
            </Card>
            <Divider/>
            </div>
        )
    }

}

export default SearchRemedies;