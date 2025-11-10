import { Avatar, Card, Divider, Grid, Text } from '@mantine/core';
import { useEffect, useState } from 'react';

function Committee() {
    return (
        <div
            style={{
                textAlign: 'justify',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundImage: 'url(/assets/bg1.jpg)',
            }}
            className='align-items-center'
            id='organizing-committee'
        >
            <div style={{paddingBottom:'100px',paddingTop:'100px'}} className='container text-light'>
                <h1 style={{fontSize:'6vh',fontWeight:'bolder'}} className='text-center'>Organizing Committee</h1>
                <Chair title={'Chair'} type={'chair'} />
                <Divider />
                <Chair title={'Co-Chair'} type={'co-chair'} />
                <Divider />
                <CommitteeList title={'Program Committee (alphabetically)'} type={'speaker'} />
                <Divider />
                <CommitteeList title={'Executives of Committee'} type={'fintech'} />
            </div>
        </div>
    );
}

function Chair({title,type}){
    const [speaker,setSpeaker]=useState([])
    function getSpeaker() {
        fetch(`https://admin.conference.hub-fintech-ncku.tw/api/speaker?year=2025&type=${type}`, {
            method: 'GET',
        })
        .then((response) => response.json())
        .then((res) => {
            if (res.result) {
                setSpeaker(res.items)
            }
        });
    }
        
    useEffect(()=>{
        getSpeaker()
    },[])
    return(
        <Grid className='my-5' justify="center">
            <Grid.Col span={{ base: 12, xs: 12 }}>
                <h1 style={{fontSize:'4vh',fontWeight:'bolder'}} className='text-center'>{title}</h1>
            </Grid.Col>
            {speaker.map((item,i)=>(
                <Grid.Col key={i} span={{ base: 12, md: 4, xs: 12}}>
                    <Info item={item} />
                </Grid.Col>
            ))}
        </Grid>
    )
}

function CommitteeList({title,type}){
    const [speaker,setSpeaker]=useState([])
    function getSpeaker() {
        fetch(`https://admin.conference.hub-fintech-ncku.tw/api/speaker?year=2025&type=${type}`, {
            method: 'GET',
        })
        .then((response) => response.json())
        .then((res) => {
            if (res.result) {
                setSpeaker(res.items)
            }
        });
    }
        
    useEffect(()=>{
        getSpeaker()
    },[])
    return(
        <Grid className='my-5' justify="center">
            <Grid.Col span={{ base: 12, xs: 12 }}>
                <h1 style={{fontSize:'4vh',fontWeight:'bolder'}} className='text-center'>{title}</h1>
            </Grid.Col>
            {speaker.map((item,i)=>(
                <Grid.Col key={i} span={{ base: 12, md: 3, xs: 12}}>
                    <Info item={item} />
                </Grid.Col>
            ))}
        </Grid>
    )
}

function Info({item}) {
    return(
    <div>
        <Card withBorder padding="xl" radius="md" style={{minHeight:'400px'}}  className='d-flex justify-content-center align-items-center'>
            <Card.Section
                h={140}
                style={{
                    // backgroundImage:'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80)',
                    backgroundColor: 'transparent',
                }}
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
export default Committee;