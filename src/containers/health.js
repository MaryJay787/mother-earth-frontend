import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Segment, Card, Button, Divider, List } from 'semantic-ui-react';
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
            harmful: '', helpful: ''}
    
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
        this.setState({ clicked: !this.state.clicked})

        fetch(`https://api.nutridigm.com/api/v1/nutridigm/detailedHarmfulList?subscriptionId=79c585f4-6c9b-4600-8772-db2103725cb2&problemId=${health_id}&fg1=${fg_id}`)
        .then(res => res.json())
        .then(data => this.setState({harmful: data}))        
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
        this.setState({fg_clicked: !this.state.fg_clicked})
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
                <Link to='/health'><Header as='h1' content='Health Page' textAlign='center' /></Link>
                    <Divider/>
                <Segment>
                <ScrollMenu
                    data={menu}
                    arrowLeft={ArrowLeft}
                    arrowRight={ArrowRight}
                    selected={selected}
                    onSelect={this.onSelect}
                    />
                </Segment>

                {this.state.fg_clicked ? null : (<ScrollMenu
                    data={fg_menu}
                    arrowLeft={FGArrowLeft}
                    arrowRight={FGArrowRight}
                    selected={fg_select}
                    onSelect={this.onFGSelect}
                />)}
                <Button onClick={this.getFoodGroups}>See Food Groups</Button>

                <Segment>
                <ScrollMenu
                    data={health_menu}
                    arrowLeft={HealthArrowLeft}
                    arrowRight={HealthArrowRight}
                    selected={health_select}
                    onSelect={this.onHealthSelect}
                    />
                </Segment>
                <Button content='Food Results' onClick={this.getResults}/>
                {this.state.fg_clicked ? <Button content='Food Group Results' onClick={this.getFGResults}/> : null}

                <Segment>
                    {this.state.good_for.notes === undefined ? null : (
                    <Card.Group>
                    <Card>
                        <Card.Content >
                        <Header> <Card.Meta>Helpful or Harmful: </Card.Meta>
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
                    </Card>
                    
                    <Card>
                        <Header content='Suggested Foods'/>
                    <List>
                        {this.state.good_foods}
                    </List>
                    </Card>

                    <Card>
                    <Header content='Suggested Foods To Avoid'/>
                    <List>
                        {this.state.bad_foods}
                    </List>
                    </Card>
                    </Card.Group>
                )}
                {this.state.clicked ? (
                    <Card>
                        <Header content='Food Group Results'/>
                        <List>
                            <List.Header content='Helpful Foods'/>
                            {this.state.helpful}
                        </List>
                        <List>
                        <List.Header content='Harmful Foods'/>
                            {this.state.harmful}
                        </List>
                    </Card>
                ) : null }

                </Segment>
            </div>
        )
    }
}

export default Health