import React from 'react';
import { List, Image, Placeholder, Grid } from 'semantic-ui-react';

class PlantCardDetails extends React.Component {
    render(){
        // const data = this.props.oneplant === [] ? null: this.props.oneplant.genus.name
        // const idk = Object.keys(data)
        // console.log(data)

        return(
            <div>
                {console.log(this.props.oneplant['genus'])}
                {this.props.oneplant.duration === undefined ? null : (
                <div>
                    <Grid columns={2} divided>
                        <Grid.Row>  
                        <Grid.Column>
                            <List floated='right' style={{fontFamily: 'Poiret One, cursive'}}>
                                <List.Item >
                                <List.Header style={{fontFamily: 'Poiret One, cursive'}}>Common Name</List.Header>
                                {this.props.oneplant.common_name ? this.props.oneplant.common_name : 'Unknown'}
                                </List.Item>

                                <List.Item>
                                <List.Header style={{fontFamily: 'Poiret One, cursive'}}>Family Name</List.Header>
                                {this.props.oneplant.family ? this.props.oneplant.family.name : 'Unknown'}
                                </List.Item>

                                <List.Item>
                                <List.Header style={{fontFamily: 'Poiret One, cursive'}}>Family Common Name</List.Header>
                                {this.props.oneplant.family_common_name ? this.props.oneplant.family_common_name : 'Unknown'}
                                </List.Item>

                                <List.Item>
                                <List.Header style={{fontFamily: 'Poiret One, cursive'}}>Genus</List.Header>
                                {this.props.oneplant.genus ? this.props.oneplant.genus.name : 'Unknown'}
                                </List.Item>

                                <List.Item>
                                <List.Header style={{fontFamily: 'Poiret One, cursive'}}>Duration</List.Header>
                                {this.props.oneplant.duration ? this.props.oneplant.duration : 'Unknown'}
                                </List.Item>

                                <List.Item>
                                <List.Header style={{fontFamily: 'Poiret One, cursive'}}>Division</List.Header>
                                {this.props.oneplant.division ? this.props.oneplant.division.name : 'Unknown'}
                                </List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column>
                                {
                                this.props.oneplant.images[0] ? 
                                <Image src={this.props.oneplant.images[0].url} size='large' style={{marginRight: '15em'}}/> : 
                                <Placeholder inverted style={{ marginTop: '4em',marginLeft: '6em',height: 150, width: 150 }}>
                                    <Placeholder.Image />
                                </Placeholder>
                            }
                        </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
                )}
            </div>
        )
    }
}

export default PlantCardDetails;