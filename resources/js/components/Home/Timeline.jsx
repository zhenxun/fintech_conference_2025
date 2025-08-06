import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

function Timeline() {
    const [date,setDate]=useState([])
    function getDate() {
        fetch('https://admin.conference.hub-fintech-ncku.tw/api/timeline?year=2025', {
            method: 'GET',
        })
        .then((response) => response.json())
        .then((res) => {
            if (res.result) {
                setDate(res.items)
            }
        });
    }
    
    useEffect(()=>{
        getDate()
    },[])
    return (
        <div className='align-items-center bg-light' id='important-dates'>
            <div style={{paddingBottom:'100px',paddingTop:'100px'}} className='container'>
                <h1 style={{fontSize:'6vh',fontWeight:'bolder'}} className='text-center'>Important Dates</h1>
                <div style={{fontSize:'20pt',fontWeight:'bolder'}} className='mt-5 mx-5'>
                    {date.map((item)=>(
                        <Row key={item.id}>
                            <Col className='text-center justify-content-center d-flex p-2'>
                                <div className='border rounded p-3 text-light' style={{width:'90%',backgroundColor:item.color}}>{item.time}</div>
                            </Col>
                            <Col className='p-3 text-center justify-content-start align-items-center d-flex'>{item.name}</Col>
                        </Row>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Timeline;