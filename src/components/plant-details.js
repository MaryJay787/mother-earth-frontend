import React from 'react';
import { Card, List, Image } from 'semantic-ui-react';

class PlantCardDetails extends React.Component {
    render(){
        // const data = this.props.oneplant === [] ? null: this.props.oneplant.genus.name
        // const idk = Object.keys(data)
        // console.log(data)

        return(
            <Card centered>
                {console.log(this.props.oneplant['genus'])}
                {this.props.oneplant.duration === undefined ? null : (
                
                <Card.Content>
                    {this.props.oneplant.images[0] ? <Image src={this.props.oneplant.images[0].url} size='small' floated='right'/> : 'No Image'}
                    <List>
                        <List.Item>
                        <List.Header>Common Name</List.Header>
                        {this.props.oneplant.common_name ? this.props.oneplant.common_name : 'Unknown'}
                        </List.Item>

                        <List.Item>
                        <List.Header>Family Name</List.Header>
                        {this.props.oneplant.family.name ? this.props.oneplant.family.name : 'Unknown'}
                        </List.Item>

                        <List.Item>
                        <List.Header>Family Common Name</List.Header>
                        {this.props.oneplant.family_common_name ? this.props.oneplant.family_common_name : 'Unknown'}
                        </List.Item>

                        <List.Item>
                        <List.Header>Genus</List.Header>
                        {this.props.oneplant.genus.name ? this.props.oneplant.genus.name : 'Unknown'}
                        </List.Item>

                        <List.Item>
                        <List.Header>Duration</List.Header>
                        {this.props.oneplant.duration ? this.props.oneplant.duration : 'Unknown'}
                        </List.Item>

                        <List.Item>
                        <List.Header>Division</List.Header>
                        {this.props.oneplant.division.name ? this.props.oneplant.division.name : 'Unknown'}
                        </List.Item>

                    </List>
                </Card.Content>
                )}
            </Card>
        )
    }
}

export default PlantCardDetails;