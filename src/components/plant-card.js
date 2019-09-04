import React from 'react';
import { Segment, Grid, List, Divider } from 'semantic-ui-react';
import PlantCardDetails from './plant-details';

class PlantCard extends React.Component{
    state={ clicked: false, plant: []}
    getPlant = () => {
        const plant_id = this.props.id
        fetch(`http://localhost:3000/plants/${plant_id}`)
        .then(res => res.json())
        .then(data => {if(data){
            this.setState({ clicked: !this.state.clicked})
            this.setState({ plant: data.oneplant})        
        }else
        return null
    })
        // .then(console.log)
    }

    // showPlant(data){
    //     return <PlantCardDetails oneplant={data}/>
    // }
    render(){
        return(
            <div>
                <Segment>
                   <Grid column={2}>
                   <Grid.Column floated='left' width={5}>
                        <List>
                            <List.Item>Plant Name</List.Item>
                            {/* <List.Item as='https://trefle.io/api/plants/#{@id}?token=Z1hJeEd2T2MrSzczQ1JicFppSFFwdz09'>{this.props.scientific_name}</List.Item> */}
                            <List.Item as='a' onClick={this.getPlant} > {this.props.scientific_name} </List.Item>
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