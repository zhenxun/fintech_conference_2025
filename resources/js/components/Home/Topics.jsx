import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

function Topics() {
    const topic = [
        'Innovative FinTech Application',
        'Sustainable Finance',
        'ESG Management Strategy',
        'Transition Finance',
        'Green Supply Chain Management & Finance',
        'Climate Finance',
        'Intelligence Sustainability Risk Management',
        'Circular Economy',
        'Financial Digital Transformation',
        'Artificial Intelligence Finance',
        'Smart Wealth Management and Robo-Advisor Development',
        'Anti-Money Laundering (AML), Financial Supervision and Legal Compliance',
        'Financial Forecast Analysis',
        'Financial Big Data Analysis and Application',
        'Digital Currency & DeFi (Decentralized Finance)',
        'Fraud and Financial Credit Investigation',
        'Cybersecurity and Financial Information Security',
        'Alternative Finance Technology',
        'Application of quantum computing in finance',
        'Application of edge computing  in FinTech',
        'Other FinTech, RegTech & ESG Related Issues'
    ];

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
                        {topic.map((item,i)=>(
                            <Col as={'li'} md={6}>{item}</Col>
                        ))}
                    </Row>
                </div>
            </div>
        </div>
    );
}
export default Topics;