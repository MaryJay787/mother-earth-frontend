import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Divider, Button, Header} from 'semantic-ui-react';
import "../../././node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel }  from  'react-responsive-carousel';



class HomePage extends React.Component{
    
    render(){
        return(
            <Segment style={{marginTop: '1em'}}>
                 <Header as='h1' textAlign='center'>Mother Earth</Header>
                 <Link to='/login'><Button size='small' color='black' floated='right' content='Login/SignUp'/></Link>
                 <Divider/>
                 <Carousel autoPlay infiniteLoop transitionTime={5} style={{marginTop: '10em'}}>
                    <div>
                    <img src='https://assets.epicurious.com/photos/57b34461df05218810c52123/16:9/w_1280%2Cc_limit/54-Herbs_Dark.jpg' alt='' />
                    </div>
                    <div>
                    <img src='https://cms.splendidtable.org/sites/default/files/styles/w2000/public/herbs_c_Foxys_forest_manufacture-iSTock-GettyImagesPlus-919410030.jpg?itok=XTp2ZSsb' alt='' />
                    </div>
                    <div>
                    <img src='https://herb-society-wisconsin.org/wp-content/uploads/2018/02/herb_photo4-1-e1566762762851.jpg' alt='' />
                    </div>
                </Carousel>
            </Segment>
        )
    }
}
export default HomePage;