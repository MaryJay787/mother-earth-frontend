import React from 'react';
import { Segment, Grid, List, Divider, Icon } from 'semantic-ui-react';
import PlantCardDetails from './plant-details';

class PlantCard extends React.Component{
    state={ clicked: false, plant: []}
    getPlant = () => {
        const plant_id = this.props.id
        fetch(`http://localhost:3000/plants/${plant_id}`)
        .then(res => res.json())
        .then(data => {
            if(data){
            this.setState({ clicked: !this.state.clicked})
            this.setState({ plant: data.oneplant})        
            }else
            return null
            })
    }

    render(){
        return(
            <div>
                <Segment style={{marginTop: '1em'}} color='olive'>
                   <Grid column={2}>
                   <Grid.Column floated='left' width={5}>
                        <List style={{fontFamily: 'Poiret One, cursive'}}>
                            <List.Item>Plant Name </List.Item>
                            <List.Item as='a' onClick={this.getPlant} > {this.props.scientific_name} <Icon name='hand point right' /></List.Item>
                        </List>
                    </Grid.Column>
                    <Divider vertical/>
                    <Grid.Column floated='right' width={8}>
                        {this.state.clicked ? <PlantCardDetails oneplant={this.state.plant}/> : null}
                    </Grid.Column>
                    </Grid>
                </Segment>
            </div>
        )
    }
}

export default PlantCard;