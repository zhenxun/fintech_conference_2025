import { Avatar, Card, Text } from '@mantine/core';
import { Col, Row } from 'react-bootstrap';

function Speaker() {
    const speaker=[
        {
            name:'Jason Potts',
            title:'Distinguished Professor ,Co-Director,',
            school:'RMIT Blockchain Innovation Hub RMIT University',
            img:'/assets/Organizing/Jason-Potts.png'
        }
    ]

    return (
        <div style={{textAlign: 'justify',backgroundAttachment:'fixed',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundImage:'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80)'}} className='align-items-center' id='keynote-speaker'>
            <div style={{paddingBottom:'100px',paddingTop:'100px',backgroundColor:'rgba(0,0,0,0.8)'}} >
                <h1 style={{fontSize:'6vh',fontWeight:'bolder'}} className='text-center text-light'>Keynote Speakers</h1>
                <Row className='my-5' justify="center">
                    {speaker.map((item,i)=>(
                        <Col key={i} span={{ base: 12, md: 3, xs: 12}}>
                            <Info item={item} />
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}

function Info({item}) {
    return(
    <div className='d-flex justify-content-center py-2'>
        <Card withBorder padding="xl" radius="md">
            <Card.Section
                h={140}
            />
            <Avatar
                src={item.img}
                size={130}
                radius={80}
                mx="auto"
                mt={-100}
            />
            <Text ta="center" fz="lg" fw={500} mt="md">
                {item.name}
            </Text>
            <Text ta="center" fz="sm" c="dimmed" mt="sm">
                {item.title}
            </Text>
            <Text ta="center" fz="sm" mt="sm">
                {item.school}
            </Text>
        </Card>
    </div>
    )
}
export default Speaker;