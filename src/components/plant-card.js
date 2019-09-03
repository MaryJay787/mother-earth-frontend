import React from 'react';
import { Segment, Grid, List, Divider, Placeholder} from 'semantic-ui-react';

class PlantCard extends React.Component{
    render(){
        return(
            <div>
                <Segment>
                   <Grid>
                    <List>
                        <List.Item as='a'>Plant Name</List.Item>
                        {/* <List.Item as='https://trefle.io/api/plants/#{@id}?token=Z1hJeEd2T2MrSzczQ1JicFppSFFwdz09'>{this.props.scientific_name}</List.Item> */}
                        <List.Item as='a'>{this.props.scientific_name}</List.Item>

                    </List>
                    <Divider/>
                    <Placeholder>
                        <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line />
                        </Placeholder.Header>
                        <Placeholder.Paragraph>
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                        </Placeholder.Paragraph>
                    </Placeholder>
                  
                    
                    </Grid>
                   </Segment>
            </div>
        )
    }
}

export default PlantCard