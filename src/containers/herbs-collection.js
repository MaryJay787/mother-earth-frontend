import React from 'react';
import HerbCard from '../components/herb-card'

class Herbs extends React.Component{
    componentDidMount(){
        fetch('http://localhost:3000/herbs')
        .then(res => res.json())
        .then(console.log)
    }
    render(){
        return(
            <div>
                {/* send herbs to herb card */}
                {/* {this.props.herbs.map(herb => <HerbCard {...herb}/>)} */}
            </div>
        )
    }
}

export default Herbs;