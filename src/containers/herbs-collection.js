import React from 'react';
import { connect } from 'react-redux';
import HerbCard from '../components/herb-card';
import RemedyCard from '../components/remedy-card';
import PlantCard from '../components/plant-card';
import { Grid, Segment, Header, Divider, Input, Menu, List, Image, Label } from 'semantic-ui-react';
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
        const newHerbArray = this.props.herbs.filter(herb => herb.name.toLowerCase().includes(this.state.searchTerm))
        this.setState({herbsSearched: newHerbArray})
     }
    
    handleRemedyFilter = () => {
        const newRemedyArray = this.props.remedies.filter(remedy => remedy.ailment.toLowerCase().includes(this.state.searchTerm))
        this.setState({ remediesSearched: newRemedyArray})
    }
  
    render(){
        const { activeItem } = this.state

        return(
            <div>
                <Segment style={{marginTop: '1em', marginRight: '1em', marginLeft: '1em'}}>
                    <Header as='h1' textAlign='center' style={{fontFamily: 'Tangerine, cursive'}}>
                        <Image src='https://www.nutramedix.com/media/wysiwyg/ingredients.png' />
                            Mother Earth 
                        <Image src='https://www.nutramedix.com/media/wysiwyg/ingredients.png' />
                    </Header>
                    <Grid >
                        <Divider vertical hidden/>
                        <Link to='/' >
                            <Label attached='bottom right' color='olive' content='Logout' style={{fontFamily: 'Tangerine, cursive'}} onClick={this.handleLogout}/>
                        </Link>
                        <Link to='/userprofile' >
                            <Label attached='bottom left' color='olive' style={{fontFamily: 'Tangerine, cursive'}}>
                                Back to Profile
                                <Image avatar spaced='right' src='http://almalife.in/img/ayur.png' />
                            </Label>
                            
                        </Link>
                    </Grid>
                </Segment>
                <Menu pointing style={{marginRight: '1em', marginLeft: '1em', fontFamily: 'Tangerine, cursive'}}>
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
                        <Menu.Item>
                        <Input icon='search' placeholder='Search Remedies...' onChange={this.handleRemedySearch} onClick={this.handleRemedyClick} onMouseLeave={this.handleRemedyFilter}/>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
                
                <Segment placeholder style={{marginRight: '1em', marginLeft: '1em'}}>
                <Link to='/health'>
                    <Label attached='top left' color='olive' style={{fontFamily: 'Tangerine, cursive'}} content='Healthy Information'/>
                </Link>
                <Grid style={{marginTop: '2em', marginLeft: '4em'}}>
                    {this.herbsSwitch()}
                    {this.state.searchHerbChange ? this.state.herbsSearched.map(herb => <SearchHerbs key={herb.id}{...herb}/>) : null}
                    {this.state.searchRemedyChange ? this.state.remediesSearched.map(remedy => <SearchRemedies key={remedy.id} {...remedy}/>) : null}
                </Grid>
                <List style={{marginTop: '1em'}}>
                    {this.plantsSwitch()}
                </List>
                </Segment>
            </div>
        )
    }
}

const mapStateToProps = state => ({herbs: state.herbs.herbs.allherbs, plants: state.herbs.plants.allplants, remedies: state.herbs.remedies.allremedies})

export default connect(mapStateToProps)(Herbs);