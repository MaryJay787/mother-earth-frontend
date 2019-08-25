import React from 'react';
import HerbCard from '../components/herb-card'

class Herbs extends React.Component{
    render(){
        return(
            <div>
                {/* send herbs to herb card */}
                {this.props.herbs.map(herb => <HerbCard {...herb}/>)}
            </div>
        )
    }
}

export default Herbs;