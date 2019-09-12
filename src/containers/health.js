import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Segment, Card, Button, Divider, List, Image, Label } from 'semantic-ui-react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import '../App.css';



class Health extends React.Component{
    state={ foods: [], health_condition: [], 
            good_for: {}, selected: 0, fg_select: 0,
            health_select: 0, food_id: null, 
            health_id: null, clicked: false, 
            health: '', food_groups: [],
            fg_clicked: false, 
            good_foods: [], bad_foods: [],
            harmful: '', helpful: '',
            closeFoods: false, food_group_clicked: false }
    
    onSelect = key => {
        this.setState({ selected: key });
      }

      onHealthSelect = key => {
        this.setState({ health_select: key });
      }
    
      onFGSelect = key => {
          console.log(key)
        this.setState({ fg_select: key });
      }
    
    componentDidMount(){
        fetch(`https://api.nutridigm.com/api/v1/nutridigm/fooditems?subscriptionId=79c585f4-6c9b-4600-8772-db2103725cb2`)
        .then(res => res.json())
        .then(data => this.setState({foods: data}))

        fetch(`https://api.nutridigm.com/api/v1/nutridigm/healthconditions?subscriptionId=79c585f4-6c9b-4600-8772-db2103725cb2`)
        .then(res => res.json())
        .then(data => this.setState({health_condition: data}))
    }

    getResults = () => {
        const food_id = this.state.selected
        const health_id = this.state.health_select
        fetch(`https://api.nutridigm.com/api/v1/nutridigm/goodfor?subscriptionId=79c585f4-6c9b-4600-8772-db2103725cb2&itemID=${food_id}&problemId=${health_id}`)
        .then(res => res.json())
        .then(data => this.setState({good_for: data}))
        this.setState({ clicked: !this.state.clicked})
    }

    getFGResults = () => {
        const fg_id = this.state.fg_select
        const health_id = this.state.health_select
        fetch(`https://api.nutridigm.com/api/v1/nutridigm/detailedhelpfullist?subscriptionId=79c585f4-6c9b-4600-8772-db2103725cb2&problemId=${health_id}&fg1=${fg_id}`)
        .then(res => res.json())
        .then(data => this.setState({helpful: data}))
        this.setState({ fg_clicked: !this.state.fg_clicked})

        fetch(`https://api.nutridigm.com/api/v1/nutridigm/detailedHarmfulList?subscriptionId=79c585f4-6c9b-4600-8772-db2103725cb2&problemId=${health_id}&fg1=${fg_id}`)
        .then(res => res.json())
        .then(data => this.setState({harmful: data}))        
    }

    closeFoodWindows = () => {
        this.setState({closeFoods: true})
    }

    getTopGoodFoods = () => {
        const health_id = this.state.health_select
        fetch(`https://api.nutridigm.com/api/v1/nutridigm/topitemstoconsume?subscriptionId=79c585f4-6c9b-4600-8772-db2103725cb2&problemId=${health_id}`)
        .then(res => res.json())
        .then(data => this.setState({good_foods: data}))
    }

    getTopBadFoods = () => {
        const health_id = this.state.health_select
        fetch(`https://api.nutridigm.com/api/v1/nutridigm/topitemstoavoid?subscriptionId=79c585f4-6c9b-4600-8772-db2103725cb2&problemId=${health_id}`)
        .then(res => res.json())
        .then(data => this.setState({bad_foods: data}))
    }

    getFoodGroups = () => {
        this.setState({food_group_clicked: !this.state.food_group_clicked})
        fetch(`https://api.nutridigm.com/api/v1/nutridigm/foodgroups?subscriptionId=79c585f4-6c9b-4600-8772-db2103725cb2`)
        .then(res => res.json())
        .then(data => this.setState({food_groups: data}))
    }

    render(){
        const foods = this.state.foods;
        const foodGroups = this.state.food_groups;
        const healthConditions = this.state.health_condition;

        const MenuItem = ({ text, selected }) => {
            return (
                <div className="menu-item">{text} </div>
                );
        };


        const HealthMenuItem = ({ text, health_select }) => {
            return (
                <div className="menu-item">{text} </div>
                );
        };

        const FGMenuItem = ({ text, fg_select }) => {
            return (
                <div className="menu-item">{text} </div>
                );
        };


        const Menu = (foods) => foods.map(el => {
            const { fiDisplay, itemID } = el;
            return (
                <MenuItem text={fiDisplay} key={itemID} />
                );
        });

        const HealthMenu = (healthConditions) => healthConditions.map(el => {
            const { hcText, problemID } = el;
            return (
                <HealthMenuItem text={hcText} key={problemID} />
                );
        });

        const FGMenu = (foodGroups) => foodGroups.map(el => {
            const { fgDescription, foodGroupID } = el;
            return (
                <FGMenuItem text={fgDescription} key={foodGroupID} />
                );
        });

        const Arrow = ({ text, className }) => {
            return (
                <div className={className}>{text}</div>
                );
        };

        const HealthArrow = ({ text, className }) => {
            return (
                <div className={className}>{text}</div>
                );
        };

        const FGArrow = ({ text, className }) => {
            return (
                <div className={className}>{text}</div>
                );
        };

        const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
        const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
        const HealthArrowLeft = HealthArrow({ text: '<', className: 'arrow-prev' });
        const HealthArrowRight = HealthArrow({ text: '>', className: 'arrow-next' });
        const FGArrowLeft = FGArrow({ text: '<', className: 'arrow-prev' });
        const FGArrowRight = FGArrow({ text: '>', className: 'arrow-next' });

        const { selected } = this.state.selected;
        const { health_select } = this.state.health_select;
        const { fg_select } = this.state.fg_select;


        const menu = Menu(foods, selected);
        const health_menu = HealthMenu(healthConditions, health_select);
        const fg_menu = FGMenu(foodGroups, fg_select);


        return(
            <div>
                 <Header as='h1' textAlign='left' style={{ fontFamily: 'Tangerine, cursive'}}> 
                    <Image src='https://www.nutramedix.com/media/wysiwyg/ingredients.png' />
                        Mother Earth 
                    <Image src='https://www.nutramedix.com/media/wysiwyg/ingredients.png' />
                </Header>               
                <Link to='/userprofile'>
                    <Label content='Back to Profile' attached='top right' color='olive' style={{fontFamily: 'Tangerine, cursive' }}/>
                </Link>
                <Header as='h1' content='Healthy Information' color='olive' style={{fontFamily: 'Tangerine, cursive' }} textAlign='center' />
                    <Divider/>
                <Segment color='olive' style={{marginRight: '3em', marginLeft: '3em', fontFamily: 'Poiret One, cursive', fontSize: '20px'}}>
                    <Label style={{fontFamily: 'Tangerine, cursive' }} attached='top left' basic color='olive' content='Select A Food Item'/>
                    <Label style={{fontFamily: 'Tangerine, cursive' }} attached='bottom left' basic color='olive' content='Or A Food Group'/>
                <ScrollMenu
                    data={menu}
                    arrowLeft={ArrowLeft}
                    arrowRight={ArrowRight}
                    selected={selected}
                    onSelect={this.onSelect}
                    />
                    <Divider/>

                    {this.state.food_group_clicked ? (<ScrollMenu
                    data={fg_menu}
                    arrowLeft={FGArrowLeft}
                    arrowRight={FGArrowRight}
                    selected={fg_select}
                    onSelect={this.onFGSelect}
                    />) : null}
                </Segment>
              
                <Button compact color='olive' onClick={this.getFoodGroups} style={{fontFamily: 'Tangerine, cursive', marginLeft: '4.5em' }}>See Food Groups</Button>

                <Segment color='olive' style={{marginRight: '3em', marginLeft: '3em', fontFamily: 'Poiret One, cursive', fontSize: '20px'}}>
                <Label style={{fontFamily: 'Tangerine, cursive' }} attached='top left' basic color='olive' content='Select A Health Condition'/>
                <ScrollMenu
                    data={health_menu}
                    arrowLeft={HealthArrowLeft}
                    arrowRight={HealthArrowRight}
                    selected={health_select}
                    onSelect={this.onHealthSelect}
                    />
                </Segment>
                <Button color='olive' compact content='Food Results' onClick={this.getResults} style={{fontFamily: 'Tangerine, cursive'}}/>
                <Button color='olive' compact content='Food Group Results' onClick={this.getFGResults} style={{fontFamily: 'Tangerine, cursive'}}/>

                {this.state.closeFoods ? null : (<Segment style={{marginRight: '3em', marginLeft: '3em'}}>
                    {this.state.good_for.notes === undefined ? null : (
                    <Card.Group centered style={{fontFamily: 'Poiret One, cursive', fontSize: '15px'}}>
                    <Card textAlign='center' color='olive'>
                        <Card.Content >
                        <Header style={{fontFamily: 'Tangerine, cursive'}} textAlign='center'> 
                        <Card.Meta>Helpful or Harmful: </Card.Meta>
                            {this.state.good_for['factor description'] ? this.state.good_for['factor description'] : 'No Data Available'}
                            </Header>
                        </Card.Content>
                        <Card.Content>
                            Notes:
                            {this.state.good_for.notes ? this.state.good_for.notes : 'No Data Available'}
                        </Card.Content>
                        <Button onClick={this.getTopGoodFoods}>
                            See Top Foods For Selected Health Condition
                        </Button>
                        <Button onClick={this.getTopBadFoods}>
                            See Top Foods To Avoid For Selected health condition
                        </Button>
                        <Button content='Close Windows' onClick={this.closeFoodWindows}/>
                    </Card>
                    
                    <Card textAlign='center' color='olive'>
                        <Card.Content>
                            <Card.Header style={{fontFamily: 'Tangerine, cursive'}} textAlign='center'>
                                <Card.Meta>Helpful Foods</Card.Meta>
                                Suggested Foods
                            </Card.Header>
                            <Divider/>
                            <List>
                                {this.state.good_foods}
                            </List>
                        </Card.Content>
                    </Card>

                    <Card textAlign='center' color='olive'>
                        <Card.Content>
                            <Header style={{fontFamily: 'Tangerine, cursive'}} textAlign='center'>
                                <Card.Meta>Harmful Foods </Card.Meta>
                                Suggested Foods To Avoid
                            </Header>
                            <Divider/>
                            <List>
                                {this.state.bad_foods}
                            </List>
                        </Card.Content>
                        
                    </Card>
                    </Card.Group>
                )}
                </Segment>
                 )}
                <Segment style={{marginRight: '3em', marginLeft: '3em'}}>  
                {this.state.fg_clicked ? (
                    <Card centered style={{fontFamily: 'Poiret One, cursive', fontSize: '15px'}} color='olive' textAlign='center'>
                        <Card.Content>
                        <Header content='Food Group Results' style={{fontFamily: 'Tangerine, cursive'}} textAlign='center'/>
                        <Divider/>
                        <List>
                            <List.Header content='Helpful Foods: '/>
                            {this.state.helpful}
                        </List>
                        <List>
                        <List.Header content='Harmful Foods: '/>
                            {this.state.harmful}
                        </List>
                        </Card.Content>
                    </Card>
                ) : null }
                </Segment>
            </div>
        )
    }
}

export default Health