import React from 'react';
import { Segment, Image, Item, Button } from 'semantic-ui-react';
import { connect } from 'react-redux'

class HerbNotes extends React.Component{
    state = {herb: [], date: '', title: '', content: ''}
    
    componentDidMount(){
        console.log(this.props.herb_id)
        fetch(`http://localhost:3000/herbs/${this.props.herb_id}`)
        .then(res => res.json())
        .then(data => this.setState({herb: data.oneHerb}))
    }
    render(){
        return(
            <Segment>
                <Item>
                    <Item.Image size='tiny' src={this.state.herb.image} />

                    <Item.Content>
                        <Item.Header as='a'>{this.props.title}</Item.Header>
                        <Item.Meta>{this.props.date}</Item.Meta>
                        <Item.Description>
                        {this.props.content}
                        </Item.Description>
                        <Item.Extra>Additional Details</Item.Extra>
                        <Button content='Delete Note'/>
                    </Item.Content>
                </Item>
            </Segment>
        )
    }
}

// const mapStateToProps = state => ({ herbNotes: state.herbs.herbNotes})

export default connect()(HerbNotes);