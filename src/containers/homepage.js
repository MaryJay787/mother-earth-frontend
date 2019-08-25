import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Container, Image, Button, Header, Divider } from 'semantic-ui-react';
import  Carousel  from  'semantic-ui-carousel-react';



class HomePage extends React.Component{
    
    render(){
        let  elements  = [
            {
                render:()=>{
                    return (
                        <Container>
                        <Image src='https://assets.epicurious.com/photos/57b34461df05218810c52123/16:9/w_1280%2Cc_limit/54-Herbs_Dark.jpg' />
                        <Button  fluid>One</Button>
                        </Container>
                    )
                }
            },
            {
                render:()=>{
                    return (
                        <Container>
                        <Image src='https://www.betterhealth.vic.gov.au/-/media/bhc/images/healthy-living/herbs_1050x600.jpg?la=en&hash=8B7CF656405714AF29F33DD7611ECC33D1A0CF4E' />
                        <Button  fluid>Two</Button>
                        </Container>
                    )
                }
            },
            {
                render:()=>{
                    return (
                        <Container>
                        <Image src='https://ticotimes.net/wp-content/uploads/2017/10/171021ChancaPiedras.jpg' />
                        <Button  fluid>Three</Button>
                        </Container>
                    )
                }
            },
        ]
        return(
            <Segment>
                 <Header as='h1' textAlign='center'>Mother Earth</Header>
                 <Link to='/login'><Header size='small' content='Login/SignUp' textAlign='right'/></Link>
                 <Divider/>
                <Container>
                    <Carousel
                    elements  =  {  elements  }
                    duration  ={3000}
                    animation  ='slide left'
                    showNextPrev  =  {false}
                    showIndicators  ={true}
                    />
                </Container>
            </Segment>
        )
    }
}
export default HomePage;