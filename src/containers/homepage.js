import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Divider, Header} from 'semantic-ui-react';
import "../../././node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel }  from  'react-responsive-carousel';



class HomePage extends React.Component{
    
    render(){
        return(
            <Segment>
                 <Header as='h1' textAlign='center'>Mother Earth</Header>
                 <Link to='/login'><Header size='small' textAlign='right' content='Login/SignUp'/></Link>
                 <Divider/>
                 <Carousel autoPlay infiniteLoop transitionTime={5} >
                    <div>
                    <img src='https://assets.epicurious.com/photos/57b34461df05218810c52123/16:9/w_1280%2Cc_limit/54-Herbs_Dark.jpg' alt='' />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                    <img src='https://ticotimes.net/wp-content/uploads/2017/10/171021ChancaPiedras.jpg' alt='' />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                    <img src='https://www.betterhealth.vic.gov.au/-/media/bhc/images/healthy-living/herbs_1050x600.jpg?la=en&hash=8B7CF656405714AF29F33DD7611ECC33D1A0CF4E' alt='' />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
            </Segment>
        )
    }
}
export default HomePage;