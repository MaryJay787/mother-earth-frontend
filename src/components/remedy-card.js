import React from 'react';
import { Button, Card, Image, Divider} from 'semantic-ui-react';
import ls from 'local-storage';
import { connect } from 'react-redux';
import { addRemedyToCollection } from '../fetches/backend';


class RemedyCard extends React.Component{
    state = {remToggle: false}
    handleAddRem = (e) => {
        const user_id = ls.get('id')
        const rem_id = this.props.id
        const jwt = ls.get('jwt')
        const array = this.props.userRemedies
        const remedy_included = array.filter(remedy => remedy.id === rem_id)
        if(remedy_included === undefined  || remedy_included.length === 0){
            this.setState({remToggle: !this.state.remToggle})
            alert('Remedy Added To Collection')
            return addRemedyToCollection(user_id, rem_id, jwt).then(console.log)
        }else{ 
            alert('Remedy Currently In Collection')  
            return null
        }
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
                    {this.state.remToggle ? null : <Button basic color='green' onClick={this.handleAddRem} content='Add To Collection'/>}
                    </div>
                </Card.Content>
            </Card>
            <Divider/>
            </div>
        )
    }
}
const mapStateToProps = state => ({userRemedies: state.herbs.userRemedies.userRemedies})

export default connect(mapStateToProps)(RemedyCard);