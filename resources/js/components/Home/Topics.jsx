import { useEffect, useState } from 'react';
import { Col, Image, Row } from 'react-bootstrap';

function Topics() {
    const [topic,setTopic]=useState([])
    function getTopic() {
        fetch('https://admin.conference.hub-fintech-ncku.tw/api/topic?year=2025', {
            method: 'GET',
        })
        .then((response) => response.json())
        .then((res) => {
            if (res.result) {
                setTopic(res.items)
            }
        });
    }

    useEffect(()=>{
        getTopic()
    },[])

    return (
        <div style={{backgroundColor:'rgba(255,255,255)'}} className='align-items-center' id='topics-of-interests'>
            <div style={{paddingBottom:'100px',paddingTop:'100px'}} className='container'>
                <h1 style={{fontSize:'6vh',fontWeight:'bolder'}} className='text-center'>Topics of Interests</h1>
                <div style={{fontSize:'2.5vh'}} className='mt-5 mx-md-5'>
                    <div className='text-center'>
                        <Image style={{maxHeight:'700px'}} fluid src='/assets/img/ESGFT2024.png' />
                    </div>
                    <p className='mt-5'>Authors are asked to submit articles describing research results, projects, survey work, industrial experience, and creative ideas that elaborate significant advances in the following areas:</p>
                    <Row className='mt-3' as={'ul'}>
                        {topic.map((item)=>(
                            <Col as={'li'} key={item.id} md={6}>{item.name}</Col>
                        ))}
                    </Row>
                </div>
            </div>
        </div>
    );
}
export default Topics;