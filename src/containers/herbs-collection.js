import React from 'react';
import { connect } from 'react-redux';
import HerbCard from '../components/herb-card';
import RemedyCard from '../components/remedy-card';
import PlantCard from '../components/plant-card';
import { Grid, Segment, Header, Divider, Input, Menu, List} from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import ls from 'local-storage';


class Herbs extends React.Component{
    state = { activeItem: 'home', searchTerm: ''}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  herbsSwitch(){
        const act = this.state.activeItem
        switch(act){
        case 'herbs':
            return this.props.herbs.map(herb => <HerbCard key={herb.id} {...herb}/>);
        case 'remedies':
            return this.props.remedies.map(rem => <RemedyCard key={rem.id} {...rem}/>);
        default:
            return null;
        }
    }

    searching(){
        const term = this.state.searchTerm
        const searchArray = this.props.herbs.concat(this.props.remedies)
        if(searchArray === undefined || searchArray.length === 0 ){
            return searchArray.filter(el => el.name === term)
        } else 
            {searchArray.filter(el => el.ailment === term)}
    }

    handleSearch = (e) => {
        console.log(e.target.value)
       this.setState({searchTerm: e.target.value})
    }

    plantsSwitch(){
        const act = this.state.activeItem
        switch(act){
        case 'plants':
            return this.props.plants.map(plant => <PlantCard key={plant.id} {...plant}/>);
        default:
            return null;
                
            }
        }
    handleLogout = (e) => {
        ls.remove('jwt')
        ls.remove('id')
        this.props.dispatch({type: 'LOGOUT'})
    }
  
   
    render(){
        const { activeItem } = this.state

        return(
            <div>
                <Segment>
                    <Header as='h1' content='Mother Earth' textAlign='center'/>
                    <Grid textAlign='right'>
                    <Divider vertical hidden/>
                    <Link to='/' ><Header size='small' content='Logout' textAlign='right' onClick={this.handleLogout}/></Link>
                    <Link to='/userprofile' ><Header size='small' content='Back to Profile' textAlign='right'/></Link>
                    </Grid>
                </Segment>
                <Menu pointing>
                    <Menu.Item
                        name='plants'
                        active={activeItem === 'plants'}
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
                        <Input icon='search' placeholder='Search...' onChange={this.handleSearch}/>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
                
                <Segment placeholder >
                <Grid>
                    {this.herbsSwitch()}
                    {this.searching()}
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