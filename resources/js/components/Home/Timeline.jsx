import { Col, Row } from 'react-bootstrap';

function Timeline() {
    const dates=[
        {name:'Paper submission deadline (original)',date:'October 1, 2024',color:'#3949AB'},
        {name:'Paper submission deadline (extended)',date:'October 11, 2024',color:'rgb(39, 125, 161)'},
        {name:'Acceptance notification',date:'October 14, 2024',color:'rgb(67, 170, 139)'},
        {name:'Author registration deadline',date:'October 24, 2024',color:'rgb(249, 199, 79)'},
        {name:'Conference date',date:'November 8, 2024',color:'rgb(249, 132, 74)'},
    ]
    return (
        <div className='align-items-center bg-light' id='important-dates'>
            <div style={{paddingBottom:'100px',paddingTop:'100px'}} className='container'>
                <h1 style={{fontSize:'6vh',fontWeight:'bolder'}} className='text-center'>Important Dates</h1>
                <div style={{fontSize:'20pt',fontWeight:'bolder'}} className='mt-5 mx-5'>
                    {dates.map((item,i)=>(
                        <Row key={i}>
                            <Col className='text-center justify-content-center d-flex p-2'>
                                <div className='border rounded p-3 text-light' style={{width:'90%',backgroundColor:item.color}}>{item.date}</div>
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