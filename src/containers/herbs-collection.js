import React from 'react';
import { connect } from 'react-redux';
import HerbCard from '../components/herb-card';
import RemedyCard from '../components/remedy-card';
import PlantCard from '../components/plant-card';
import { Grid, Segment, Header, Divider, Input, Menu, List} from 'semantic-ui-react';
import { Link } from 'react-router-dom'
// import userProfile from './user-profile';
// import ls from 'local-storage';


class Herbs extends React.Component{
    state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  herbsSwitch(){
        // return this.props.herbs.map(herb => <HerbCard key={herb.id} {...herb}/>)
        const act = this.state.activeItem
        switch(act){
        case 'herbs':
            return this.props.herbs.map(herb => <HerbCard key={herb.id} {...herb}/>);
        case 'remedies':
            return this.props.remedies.map(rem => <RemedyCard key={rem.id} {...rem}/>);
        // case 'home':
        //     return this.props.plants.map(plant => <PlantCard key={plant.id} {...plant}/>);
        default:
            return null;
        }
    }

    plantsSwitch(){
        const act = this.state.activeItem
        switch(act){
        case 'home':
            return this.props.plants.map(plant => <PlantCard key={plant.id} {...plant}/>);
        default:
            return null;
                
            }
        }
  
   
    render(){
        const { activeItem } = this.state

        return(
            <div>
                <Segment>
                    <Header as='h1' content='Mother Earth' textAlign='center'/>
                    <Grid textAlign='right'>
                    <Divider vertical hidden/>
                    <Link to='/' ><Header size='small' content='Logout' textAlign='right'/></Link>
                    <Link to='/userprofile' ><Header size='small' content='Back to Profile' textAlign='right'/></Link>
                    </Grid>
                </Segment>
                <Menu pointing>
                    <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='herbs'
                        active={activeItem === 'herbs'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='remedies'
                        active={activeItem === 'remedies'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
                
                <Segment>
                <Grid>
                    {this.herbsSwitch()}
                </Grid>
                <List>
                    {this.plantsSwitch()}
                </List>
                </Segment>
            </div>
        )
    }
}

const mapStateToProps = state => ({herbs: state.herbs.herbs.allherbs, plants: state.herbs.plants.allplants, remedies: state.herbs.remedies.allremedies})

export default connect(mapStateToProps)(Herbs);