import React from 'react';
import { Button, Card, Image, Divider, Icon } from 'semantic-ui-react';
import ls from 'local-storage';
import { connect } from 'react-redux'
import { addHerbToCollection } from '../fetches/backend';


class HerbCard extends React.Component{
    state = {herbToggle: false}
    handleAddHerb = (e) => {
        const user_id = ls.get('id')
        const herb_id = this.props.id
        const jwt = ls.get('jwt')
        const array = this.props.userHerbs
        const herb_included = array.filter(herb => herb.id === herb_id)
        if(herb_included === undefined  || herb_included.length === 0){
            this.setState({herbToggle: !this.state.herbToggle})
            alert('Herb Added To Collection')
            return addHerbToCollection(user_id, herb_id, jwt)
        }else{ 
            alert('Herb Currently In Collection')  
            return null
        }
        
       
    }
    render(){
        return(
            <div>
            <Card color='olive'>
                <Card.Content>
                    <Image src={this.props.image}/>
                    <Card.Header textAlign='center'>{this.props.name}</Card.Header>
                    <Divider />
                    <Card.Meta textAlign='center'>{this.props.aka}</Card.Meta>
                    <Card.Description>
                    <strong>Uses:</strong> {this.props.use}
                       Caution: <strong>{this.props.caution}</strong>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    {this.state.herbToggle ? null : <Button compact animated='fade' basic color='olive' onClick={this.handleAddHerb}> 
                                                    <Button.Content visible><Icon name='thumbtack'/></Button.Content>
                                                    <Button.Content hidden>Add To Collection</Button.Content>
                                                    </Button> }
                    </div>
                </Card.Content>
            </Card>
            <Divider hidden/>
            </div>
        )
    }
}

const mapStateToProps = state => ({userHerbs: state.herbs.userHerbs.usersherbs})

export default connect(mapStateToProps)(HerbCard);