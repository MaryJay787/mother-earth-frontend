import React from 'react';
import { connect } from 'react-redux';
import HerbCard from '../components/herb-card';
import RemedyCard from '../components/remedy-card';
import PlantCard from '../components/plant-card';
import { Grid, Segment, Header, Divider, Input, Menu, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import ls from 'local-storage';
import SearchHerbs from '../components/search-herbs';
import SearchRemedies from '../components/search-remedies';

class Herbs extends React.Component{
    state = { activeItem: 'home', searchHerbChange: false, searchRemedyChange: false, searchTerm: '', herbsSearched: [], remediesSearched: []}

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

    handleHerbSearch = (e) => {
        this.setState({ searchTerm: e.target.value})
    }

    handleRemedySearch = (e) => {
        this.setState({ searchTerm: e.target.value})
    }
    
    handleHerbClick = () => {
        this.setState({ searchHerbChange: !this.state.searchHerbChange})
    }
    handleRemedyClick = () => {
        this.setState({ searchRemedyChange: !this.state.searchRemedyChange})
    }

    handleHerbFilter = () => {
         console.log(this.props.herbs)
         console.log(this.state.searchTerm)
        const newHerbArray = this.props.herbs.filter(herb => herb.name.toLowerCase().includes(this.state.searchTerm))
        this.setState({herbsSearched: newHerbArray})
     }
    
    handleRemedyFilter = () => {
        console.log(this.props.remedies)
        console.log(this.state.searchTerm)
        const newRemedyArray = this.props.remedies.filter(remedy => remedy.ailment.toLowerCase().includes(this.state.searchTerm))
        this.setState({ remediesSearched: newRemedyArray})
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
                        <Input icon='search' placeholder='Search Herbs...' onChange={this.handleHerbSearch} onClick={this.handleHerbClick} onMouseLeave={this.handleHerbFilter}/>
                        </Menu.Item>
                    </Menu.Menu>
                    <Menu.Menu position='right'>
                        <Menu.Item>
                        <Input icon='search' placeholder='Search Remedies...' onChange={this.handleRemedySearch} onClick={this.handleRemedyClick} onMouseLeave={this.handleRemedyFilter}/>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
                
                <Segment placeholder >
                <Grid>
                    {this.herbsSwitch()}
                    {this.state.searchHerbChange ? this.state.herbsSearched.map(herb => <SearchHerbs key={herb.id}{...herb}/>) : null}
                    {this.state.searchRemedyChange ? this.state.remediesSearched.map(remedy => <SearchRemedies key={remedy.id} {...remedy}/>) : null}
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