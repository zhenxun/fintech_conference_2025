import { Timeline } from '@mantine/core';
import { Card } from 'antd';
import { useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Menu from '../Menu';

function Agenda() {
    const [agenda,setAgenda]=useState(1)

    const returnResult=(result)=>{
        setAgenda(result)
    }

    const link=[
        {
            name:'Keynote<br/>Speaker',
            href:'/#keynote-speaker'
        },{
            name:'Organizing<br/>Committee',
            href:'/#organizing-committee'
        },{
            name:'Topics of<br/>Interests',
            href:'/#topics-of-interests'
        },{
            name:'Paper Submission<br/>& Publication',
            href:'/#paper-submission-and-publication'
        },{
            name:'Important<br/>Dates',
            href:'/#important-dates'
        },{
            name:'Registration<br/>& Payment',
            href:'/#registration'
        },{
            name:'Agenda',
            href:'#agenda'
        },{
            name:'Contact',
            href:'/#contact'
        }
        
    ]

    return (
        <div id='body'>
            <Menu link={link} />
            {/* {agenda==1?(<Time1 result={returnResult} />):null} */}
            <div className="page-section p-3 justify-content-center align-items-center d-flex" id='content' style={{minHeight:'80vh',paddingTop:'120px'}}>
            <Container style={{paddingTop:'200px'}} id='agenda'>
                <Card className='text-center'>
                    <Image fluid style={{maxHeight:'90%'}} src='/assets/img/coming-soon.png' />
                </Card>
            </Container>
            </div>
        </div>
    );
}

function Time1({result}){
    const timeline=[
        {
            'title':'Guest Check-in',
            'subtitle':null,
            'time':'08:50-09:00',
            'member':null
        },{
            'title':'Opening Remarks',
            'subtitle':null,
            'time':'09:00-09:10',
            'member':[
                {
                    'title':null,
                    'speaker':[{
                        'src':'/assets/speaker/沈孟儒.jpeg',
                        'name':'Dr. Meng-Ru, Shen',
                        'detail':'President, National Cheng Kung University',
                        'topic':null
                    },{
                        'src':'https://conference.hub-fintech-ncku.tw/storage/images/1-1%20%E4%B8%BB%E5%B8%AD%20-%20%E6%88%90%E5%8A%9F%E5%A4%A7%E5%AD%B8%E7%AE%A1%E9%99%A2%E9%99%A2%E9%95%B7%E6%9A%A8FinTech%E5%95%86%E5%89%B5%E7%A0%94%E7%A9%B6%E4%B8%AD%E5%BF%83%E9%BB%83%E5%AE%87%E7%BF%94%E4%B8%BB%E4%BB%BB.jpg',
                        'name':'Dr. Yeu-Shiang Huang',
                        'detail':'Dean, College of Management at NCKU. And, Director, Center for Innovative FinTech Business Models',
                        'topic':null
                    }]
                },
            ]
        },{
            'title':'Keynote Speech:',
            'subtitle':'<span style="font-style:italic">Green Supply Chain Management – Past, Present, and Beyond</span>',
            'time':'09:10-10:00',
            'member':[
                {
                    'title':'Moderator',
                    'speaker':[{
                        'src':'/assets/speaker/張巍勳.jpg',
                        'name':'Dr. Wei-Shiun Chang',
                        'detail':'Director, Institute of International Management (IMBA), NCKU',
                        'topic':null
                    }]
                },{
                    'title':'Keynote Speaker',
                    'speaker':[{
                        'src':'/assets/speaker/Tzu-Liang(Bill)Tseng.jpg',
                        'name':'Dr. Tzu-Liang (Bill) Tseng',
                        'detail':'Professor & Department Chair, Industrial, Manufacturing, and Systems Engineering (IMSE), University of Texas at El Paso',
                        'topic':null
                    }]
                }
            ]
        },{
            'title':'Keynote Speech:',
            'subtitle':'<span style="font-style:italic">Cyber Security and Sustainable Growth</span>',
            'time':'10:10-11:00',
            'member':[
                {
                    'title':'Moderator',
                    'speaker':[{
                        'src':'/assets/speaker/Chun-LiTsai.webp',
                        'name':'Dr. Chun-Li Tsai ',
                        'detail':'Professor, Department of Economics, NCKU. And, Director, Research Center for Humanities and Social Sciences',
                        'topic':null
                    }]
                },{
                    'title':'Keynote Speaker',
                    'speaker':[{
                        'src':'/assets/speaker/NaoyukiYoshino.png',
                        'name':'Dr. Naoyuki Yoshino',
                        'detail':'Professor Emeritus, Keio University & Director, Financial Research Center, FSA, Government of Japan. And, Former Dean & CEO, Asian Development Bank Institute (ADBI).',
                        'topic':null
                    }]
                }
            ]
        },{
            'title':'Finance Empirical Research Session',
            'subtitle':null,
            'time':'11:00-12:30',
            'member':[
                {
                    'title':null,
                    'speaker':[{
                        'src':null,
                        'name':'Ruchita Verma',
                        'detail':'Department of Financial Administration, Central University of Punjab',
                        'topic':'Russian-Ukraine Invasion and Stock Market Behaviour: An Empirical Assessment Of European Market'
                    },{
                        'src':null,
                        'name':'Dhanraj Sharma',
                        'detail':'Department of Financial Administration, Central University of Punjab',
                        'topic':'Derivative Use And Financial Performance: Evidence From Indian Stock Market'
                    },{
                        'src':null,
                        'name':'Pravin Kumar Agrawal',
                        'detail':'School of Business Management, CSJM University',
                        'topic':'Empirical Relationship between FPIs and Mutual Fund in Last 20 Years'
                    }]
                }
            ]
        },{
            'title':'Sustainable Finance and Low-Carbon Economy Session',
            'subtitle':null,
            'time':null,
            'member':[
                {
                    'title':null,
                    'speaker':[{
                        'src':'https://researchoutput.ncku.edu.tw/files-asset/195623639/10602011.jpg?w=320&f=webp',
                        'name':'Li-Kai Liao',
                        'detail':'Department of Accountancy & Graduate Institute of Finance, National Cheng Kung University',
                        'topic':'ESG and the Speed of Capital Structure Adjustment'
                    },{
                        'src':null,
                        'name':'Shih-Bin Wu',
                        'detail':'Department of Accountancy & Graduate Institute of Finance, National Cheng Kung University',
                        'topic':'Do Creditors Value a Company’s Sustainable Supply Chain Management? Evidence of Sustainability Reports from Taiwan'
                    },{
                        'src':'https://researchoutput.ncku.edu.tw/files-asset/16417278/9602004.jpg?w=320&f=webp',
                        'name':'Shuen-Lin Jeng',
                        'detail':'Department of Statistics, Institute of Data Science, National Cheng Kung University',
                        'topic':'Essential Economic Features of the European Union Carbon Futures Market'
                    }]
                }
            ]
        },{
            'title':'Innovative FinTech Research Session',
            'subtitle':null,
            'time':'14:10-15:30',
            'member':[
                {
                    'title':null,
                    'speaker':[{
                        'src':null,
                        'name':'Kuei-Chen Chiu',
                        'detail':'Department of Finance, Shih Chien University (Kaohsiung Campus)',
                        'topic':'A Survey on Willingness to Use Mobile Payment by Using ABC Model'
                    },{
                        'src':null,
                        'name':'Pandu Dwi Luhur Pambudi',
                        'detail':'Institute of Information Management, National Cheng Kung University',
                        'topic':'Digital Transformation in Fintech: Choosing Between Application and Software as a Service (SaaS)'
                    },{
                        'src':null,
                        'name':'Pei-Hua Tung',
                        'detail':'Institue of Technology Management, National Tsing Hua University',
                        'topic':'Exploring the Knowledge Evolution of Green Finance: A Main Path Analysis'
                    },{
                        'src':null,
                        'name':'Mi‐Chia Ma',
                        'detail':'Department of Statistics, Institute of Data Science, National Cheng Kung University',
                        'topic':'Estimating the modified mixture cure model with incorporating a penalty term and random forest via the generalized method of moments in the application of online banking data'
                    }]
                }
            ]
        },{
            'title':'ESG Finance Prediction and Tax Policy Session',
            'subtitle':null,
            'time':null,
            'member':[
                {
                    'title':null,
                    'speaker':[{
                        'src':null,
                        'name':'Ping Chen Tsai',
                        'detail':'National Sun Yat-sen University',
                        'topic':'Constructing a Taiwan Index Prediction Model by Integrating News Sentiment Analysis and International Derivatives- A Case Study of the Steel Market'
                    },{
                        'src':null,
                        'name':'Chun-Te Chen',
                        'detail':'Durham University Business School',
                        'topic':'The Effect of corporate governance, and corporate social responsibility on Tax Avoidance—Evidence from the FTSE 100 companies.'
                    },{
                        'src':null,
                        'name':'Sheng-Hung Liu',
                        'detail':'Department of Industry and Information Management, National Cheng Kung University',
                        'topic':'Forecasting ESG Report Rankings in the Chemical Industry Based on NLP Transformer and Topic Models'
                    }]
                }
            ]
        },{
            'title':'Capital Market and Corporate Finance Research Session',
            'subtitle':null,
            'time':'16:00-17:30',
            'member':[
                {
                    'title':null,
                    'speaker':[{
                        'src':'https://conference.hub-fintech-ncku.tw/storage/images/Ming-Lung%20Hsu.jpg',
                        'name':'Ming-Lung Hsu',
                        'detail':'Department of Business Administration, Shu-Te University',
                        'topic':'Forecasting DRAM Spot Prices with ARIMA: Demand-Driven Insights'
                    },{
                        'src':'/assets/Organizing/Liu,Wu-Po.webp',
                        'name':'Wu-Po Liu',
                        'detail':'Department of Accountancy & Graduate Institute of Finance, National Cheng Kung University',
                        'topic':'Firm Life Cycle and Prediction of Future Operating Cash Flows'
                    },{
                        'src':null,
                        'name':'Kuei-Chen Chiu',
                        'detail':'Department of Finance, Shih Chien University (Kaohsiung Campus)',
                        'topic':'Using event study to explore the impact of the COVID-19 epidemic on the stock prices and daily return of shipping concept stocks with big data analytics'
                    }]
                }
            ]
        },{
            'title':'Green Supply Chain Management Session',
            'subtitle':null,
            'time':null,
            'member':[
                {
                    'title':null,
                    'speaker':[{
                        'src':'https://researchoutput.ncku.edu.tw/files-asset/196649373/9208012.jpg?w=320&f=webp',
                        'name':'I‐Lin Wang',
                        'detail':'Department of Industrial and Information Management, National Cheng Kung University',
                        'topic':'Concurrent Optimization of Routing and Platooning Decisions for Autonomous Truck Fleets'
                    },{
                        'src':'https://conference.hub-fintech-ncku.tw/storage/images/1-1%20%E4%B8%BB%E5%B8%AD%20-%20%E6%88%90%E5%8A%9F%E5%A4%A7%E5%AD%B8%E7%AE%A1%E9%99%A2%E9%99%A2%E9%95%B7%E6%9A%A8FinTech%E5%95%86%E5%89%B5%E7%A0%94%E7%A9%B6%E4%B8%AD%E5%BF%83%E9%BB%83%E5%AE%87%E7%BF%94%E4%B8%BB%E4%BB%BB.jpg',
                        'name':'Yeu-Shiang Huang',
                        'detail':'Department of Industrial and Information Management, National Cheng Kung University',
                        'topic':'Optimal Pricing and Recycling Strategies for Hybrid Remanufacturing Systems based on Carbon Emission Policies and Consumption Characteristics'
                    },{
                        'src':'https://conference.hub-fintech-ncku.tw/storage/images/1-1%20%E4%B8%BB%E5%B8%AD%20-%20%E6%88%90%E5%8A%9F%E5%A4%A7%E5%AD%B8%E7%AE%A1%E9%99%A2%E9%99%A2%E9%95%B7%E6%9A%A8FinTech%E5%95%86%E5%89%B5%E7%A0%94%E7%A9%B6%E4%B8%AD%E5%BF%83%E9%BB%83%E5%AE%87%E7%BF%94%E4%B8%BB%E4%BB%BB.jpg',
                        'name':'Yeu-Shiang Huang',
                        'detail':'Department of Industrial and Information Management, National Cheng Kung University',
                        'topic':'Pricing and Recycling Strategies of Dual Recycling Channels in Closed-Loop Supply Chain'
                    }]
                }
            ]
        }
    ]

    return(
        <div className="page-section pb-3 justify-content-center align-items-center d-flex" id='content' style={{minHeight:'80vh',paddingTop:'120px'}}>
            <Container style={{padding: '1rem 0'}} id='agenda'>
                <div className='d-flex flex-row justify-content-between align-items-center ps-2 pb-3'>
                    <h1 className='text-center pb-3 text-light'>Agenda</h1>
                    {/* <Button variant="gradient" style={{minWidth:'400px'}} size="md" radius="xl" onClick={()=>result(2)}>2023/11/15 Agenda</Button> */}
                </div>
                <Timeline bulletSize={40} lineWidth={8}>
                    {timeline.map((item,i)=>(
                        <Timeline.Item bullet={<svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-calendar-due"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M16 3v4" /><path d="M8 3v4" /><path d="M4 11h16" /><path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>} key={i}>
                            <div className='d-flex'>{item.time?(<div className='border rounded p-2 shadow bg-light d-inline-flex'>{item.time}</div>):null}</div>
                            <div className='border rounded p-3 shadow mt-2' style={{backgroundColor:'white'}}>
                                <h2>
                                    <div>{item.title}<div style={{fontSize:'25pt'}} dangerouslySetInnerHTML={{__html:item.subtitle}}/></div>
                                </h2>
                                <Row>
                                {item.member?(item.member.map((element,j)=>(
                                    <div key={j} className='mt-3'>
                                    <Col lg={12}><h4>{element.title}</h4></Col>
                                    {element.speaker.map((value,k)=>(
                                        <Col lg={12} key={k}>
                                        <Row className='p-3 align-items-center'>
                                            <Col xs={2} lg={2} className='d-flex justify-content-center'>
                                            <div style={{maxHeight:'100px',maxWidth:'100px'}}>
                                                <div className='member rounded-circle' style={{height:'100px',width:'100px',overflow:"hidden"}}>
                                                    <Image src={value.src?(value.src):'/assets/img/user.png'} alt={value.name} fluid />
                                                </div>
                                            </div>
                                            </Col>
                                            <Col xs={10} lg={10}>
                                            <p>{value.topic?<span style={{fontSize:'14pt'}}>{value.topic}<br /></span>:null}<span style={{fontSize:'12pt'}}>{value.name}<br />{value.detail}</span></p>
                                            </Col>
                                        </Row>
                                        </Col>
                                    ))}
                                    </div>
                                ))):null}
                                </Row>
                            </div>
                        </Timeline.Item>
                    ))}
                </Timeline>
            </Container>
        </div>
    )
}

export default Agenda;