import { Card } from 'antd';
import { Container } from 'react-bootstrap';
import Menu from '../Menu';
import './agenda.css';

const navigationLinks = [
    {
        name: 'Keynote<br/>Speaker',
        href: '/#keynote-speaker',
    },
    {
        name: 'Organizing<br/>Committee',
        href: '/#organizing-committee',
    },
    {
        name: 'Topics of<br/>Interests',
        href: '/#topics-of-interests',
    },
    {
        name: 'Paper Submission<br/>& Publication',
        href: '/#paper-submission-and-publication',
    },
    {
        name: 'Important<br/>Dates',
        href: '/#important-dates',
    },
    {
        name: 'Registration<br/>& Payment',
        href: '/#registration',
    },
    {
        name: 'Agenda',
        href: '#agenda',
    },
    {
        name: 'Contact',
        href: '/#contact',
    },
];

const agendaData = [
    {
        time: '08:30 – 08:50',
        note: '全英線上',
        sessions: [
            {
                title: 'Guest Check-in',
                tag: 'Welcome',
                description: 'System check and platform onboarding for all attendees.',
            },
        ],
    },
    {
        time: '08:50 – 09:00',
        note: '全英線上',
        sessions: [
            {
                title: 'Opening Remarks',
                tag: 'Ceremony',
                speakers: [
                    {
                        role: 'Speaker',
                        name: 'Dr. Meng-Ru Shen',
                        affiliation: 'President, National Cheng Kung University',
                    },
                    {
                        role: 'Speaker',
                        name: 'Dr. Yeu-Shiang Huang',
                        affiliation:
                            'Dean, College of Management at NCKU & Director, Center for Innovative FinTech Business Models',
                    },
                ],
            },
        ],
    },
    {
        time: '09:00 – 09:30',
        note: '全英線上',
        sessions: [
            {
                title: 'Keynote Speech (1)',
                tag: 'Keynote',
                subtitle: 'Topic: The Economic Effects of The Energy Transition',
                speakers: [
                    {
                        role: 'Moderator',
                        name: 'Dr. Chun-Li Tsai',
                        affiliation: 'Dean, College of Social Science, National Cheng Kung University',
                        avatar: '/assets/agenda/Dr.ChunLiTsai.png',
                    },
                    {
                        role: 'Keynote Speaker',
                        name: 'Christian Upper',
                        affiliation:
                            'Senior Adviser, Representative Office for the Americas (EFTA), Bank for International Settlements (BIS)',
                        avatar: '/assets/agenda/ChristianUpper.jpg',
                    },
                ],
            },
        ],
    },
    {
        time: '09:30 – 09:45',
        note: '全英線上',
        sessions: [
            {
                title: 'Coffee and Tea Break',
                tag: 'Break',
                isBreak: true,
                description: 'Refresh, network, and prepare for the second keynote.',
            },
        ],
    },
    {
        time: '09:45 – 10:30',
        note: '全英線上',
        sessions: [
            {
                title: 'Keynote Speech (2)',
                tag: 'Keynote',
                subtitle:
                    'Topic: Equivalence of Carbon Tax, Carbon Pricing and Small and Medium-Sized Enterprise Green Policies',
                speakers: [
                    {
                        role: 'Moderator',
                        name: 'Dr. Wei-Shiun Chang',
                        affiliation: 'Associate Professor, Institute of International Management (IMBA), NCKU',
                        avatar: '/assets/agenda/Dr.WeiShiunChang.jpg',
                    },
                    {
                        role: 'Keynote Speaker',
                        name: 'Dr. Naoyuki Yoshino',
                        affiliation:
                            'Professor Emeritus, Keio University & Former Dean and CEO, Asian Development Bank Institute (ADBI)',
                        avatar: '/assets/agenda/NaoyukiYoshino.png',
                    },
                ],
            },
        ],
    },
    {
        time: '10:30 – 11:00',
        note: '全英線上',
        sessions: [
            {
                title: 'Coffee and Tea Break',
                tag: 'Break',
                isBreak: true,
                description: 'Take a short pause before the parallel sessions.',
            },
        ],
    },
    {
        time: '11:00 – 12:10',
        note: '全英線上',
        sessions: [
            {
                title: 'Net-Zero and Capital Market Efficiency Session',
                tag: 'Parallel Session',
                topics: [
                    {
                        label: 'Topic 1',
                        description:
                            "Green Energy Economics and Strategies for Kaohsiung Port's Net-Zero Transition",
                    },
                    {
                        label: 'Topic 2',
                        description: 'The Green Zombies: When Zombie Firms Go Green, Healthy Companies Pay the Price',
                    },
                ],
                speakers: [
                    {
                        role: 'Presenter (1)',
                        name: 'Szuan-Yi Jiang',
                        affiliation: 'National Cheng Kung University',
                    },
                    {
                        role: 'Presenter (2)',
                        name: 'Tang-Lin Hwang',
                        affiliation: 'National Cheng Kung University',
                    },
                ],
            },
            {
                title: 'Green Investment Forecast Session',
                tag: 'Parallel Session',
                topics: [
                    {
                        label: 'Topic 1',
                        description:
                            'A Robust Ensemble Learning Framework for Predicting High-Dividend and Bond ETF Prices',
                    },
                    {
                        label: 'Topic 2',
                        description:
                            'Carbon Future Prediction Using Machine Learning Models with News Sentiment Features',
                    },
                ],
                speakers: [
                    {
                        role: 'Presenter (1)',
                        name: 'Kuei-Chen Chiu',
                        affiliation: 'Shih Chien University, Kaohsiung Campus',
                    },
                    {
                        role: 'Presenter (2)',
                        name: 'Shuen-Lin Jeng',
                        affiliation: 'National Cheng Kung University',
                    },
                ],
            },
        ],
    },
    {
        time: '12:10 – 13:30',
        note: '全英線上',
        sessions: [
            {
                title: 'Lunch Break',
                tag: 'Break',
                isBreak: true,
                description: 'Enjoy lunch and informal conversations with fellow participants.',
            },
        ],
    },
    {
        time: '13:30 – 14:40',
        note: '全英線上',
        sessions: [
            {
                title: 'FinTech Application Session I',
                tag: 'Parallel Session',
                topics: [
                    {
                        label: 'Topic 1',
                        description: 'A Q-learning Based Robo-Advisor: Evidence from TAIEX',
                    },
                    {
                        label: 'Topic 2',
                        description: 'Tracing the Evolution of Cryptocurrency Research: A Main Path Analysis',
                    },
                ],
                speakers: [
                    {
                        role: 'Presenter (1)',
                        name: 'Tzu-Hsien Yang',
                        affiliation: 'National Cheng Kung University',
                    },
                    {
                        role: 'Presenter (2)',
                        name: 'Min-Hsuan Huang',
                        affiliation: 'National Chung Cheng University',
                    },
                ],
            },
            {
                title: 'Green Economy Session',
                tag: 'Parallel Session',
                topics: [
                    {
                        label: 'Topic 1',
                        description:
                            'Comparative Analysis of Global Carbon Pricing Mechanism Effectiveness: An Empirical Research Based on Big Data Analysis',
                    },
                    {
                        label: 'Topic 2',
                        description:
                            "Millets in Transition for Sustainable Future: Investigating the Role of Influencers and Barriers in Consumers' Shift Intention towards Millets",
                    },
                ],
                speakers: [
                    {
                        role: 'Presenter (1)',
                        name: 'Chih-Yu Huang',
                        affiliation: 'National Cheng Kung University',
                    },
                    {
                        role: 'Presenter (2)',
                        name: 'Dhanraj Sharma',
                        affiliation: 'Central University of Punjab',
                    },
                ],
            },
        ],
    },
    {
        time: '14:00 – 15:30',
        note: '全英線上',
        sessions: [
            {
                title: 'International Trends and Prospects Online Forum of Responsible Finance',
                tag: 'Forum',
                subtitle: 'The Future of Responsible Finance: Ecosystem Development',
                topics: [
                    {
                        label: 'Topic 1',
                        description: 'A Case Study of Insurtech Company (AIFT) in Hong Kong',
                    },
                    {
                        label: 'Topic 2',
                        description: 'Building Enterprise Readiness for ESG Adoption',
                    },
                    {
                        label: 'Topic 3',
                        description:
                            'The role of the UK and the City of London in advancing Sustainable Finance with a focus on Transition Finance',
                    },
                ],
                speakers: [
                    {
                        role: 'Moderator',
                        name: 'Dr. Wen-Shan Lin',
                        affiliation: 'Associate Professor, Institute of International Management (IMBA), NCKU',
                        avatar: '/assets/agenda/Dr.WenShanLin.jpg',
                    },
                    {
                        role: 'Panelist',
                        name: 'Seen-Meng Chew',
                        affiliation:
                            'Associate Professor of Practice in Finance & Associate Director, MBA Programmes, CUHK Business School',
                        avatar: '/assets/agenda/SeenMengChew.jpg',
                    },
                    {
                        role: 'Panelist',
                        name: 'Devraj Basu',
                        affiliation: 'Senior Lecturer, Department of Accounting and Finance, University of Strathclyde',
                        avatar: '/assets/agenda/Dr.DevrajBasu.png',
                    },
                    {
                        role: 'Panelist',
                        name: 'Michael Wilkins',
                        affiliation:
                            'Visiting Lecturer, Imperial College London & Member of the UK Transition Finance Council',
                        avatar: '/assets/agenda/MichaelWilkinsCCFI.png',
                    },
                ],
            },
        ],
    },
    {
        time: '15:30 – 17:10',
        note: '全英線上',
        sessions: [
            {
                title: 'Labor Economics Session',
                tag: 'Parallel Session',
                topics: [
                    {
                        label: 'Topic 1',
                        description:
                            'Exploring the Critical Success Factors of Middle-Aged and Elderly Employment Business Models in Taiwan',
                    },
                    {
                        label: 'Topic 2',
                        description: 'The Association between Labor Law Violations and the Audit Fees',
                    },
                    {
                        label: 'Topic 3',
                        description:
                            'Mapping The Research Landscape Of Solar Energy And Job Creation: A Bibliometric Perspective',
                    },
                ],
                speakers: [
                    {
                        role: 'Presenter (1)',
                        name: 'Jin-Jou Chen',
                        affiliation: 'National Cheng Kung University',
                    },
                    {
                        role: 'Presenter (2)',
                        name: 'Shih-Bin Wu',
                        affiliation: 'National Dong Hwa University',
                    },
                    {
                        role: 'Presenter (3)',
                        name: 'Ruchita Verma',
                        affiliation: 'Central University of Punjab',
                    },
                ],
            },
        ],
    },
    {
        time: '16:00 – 17:10',
        note: '全英線上',
        sessions: [
            {
                title: 'FinTech Application Session II',
                tag: 'Parallel Session',
                topics: [
                    {
                        label: 'Topic 1',
                        description: 'Detecting Financial Fraud through Semi-supervised Adversarial Learning',
                    },
                    {
                        label: 'Topic 2',
                        description:
                            'The Language of Sustainability: Structural and Discursive Contrasts in ESG Asset Management at BlackRock and HSBC',
                    },
                ],
                speakers: [
                    {
                        role: 'Presenter (1)',
                        name: 'Ming-Lung Hsu',
                        affiliation: 'National Pingtung University of Science and Technology',
                    },
                    {
                        role: 'Presenter (2)',
                        name: 'Xue-Qun Xia',
                        affiliation: 'National Cheng Kung University',
                    },
                ],
            },
            {
                title: 'Sustainable Performance Session',
                tag: 'Parallel Session',
                topics: [
                    {
                        label: 'Topic 1',
                        description:
                            'Configurational Pathways to High ESG Performance: Theoretical Insights and Evidence from U.S. S&P 1500 Firms',
                    },
                    {
                        label: 'Topic 2',
                        description:
                            'Does Switching of the Sustainability Report Assurance Provider Affect the Value Relevance of Sustainability Performance?',
                    },
                ],
                speakers: [
                    {
                        role: 'Presenter (1)',
                        name: 'Wen-Shan Lin',
                        affiliation: 'National Cheng Kung University',
                    },
                    {
                        role: 'Presenter (2)',
                        name: 'Wan-Ci Huang',
                        affiliation: 'National Chung Cheng University',
                    },
                ],
            },
        ],
    },
    {
        time: '17:10 – 17:15',
        note: '全英線上',
        sessions: [
            {
                title: 'Closing Remarks',
                tag: 'Ceremony',
                description: 'Key takeaways, acknowledgements, and a look ahead to future collaborations.',
            },
        ],
    },
];

function Agenda() {
    return (
        <div id='body' className='agenda-page'>
            <Menu link={navigationLinks} />
            <section className='agenda-hero text-center text-light'>
                <Container>
                    <p className='agenda-overline'>
                        2025 The 6th International Conference on Responsible Finance and ESG Management
                    </p>
                    <h1 className='agenda-title'>2025 Center for Innovative FinTech Business Models, NCKU</h1>
                    <p className='agenda-subtitle'>Detailed agenda for the virtual program</p>
                </Container>
            </section>
            <Container id='agenda' className='agenda-wrapper'>
                {agendaData.map((block, index) => (
                    <section className='agenda-card' key={`${block.time}-${index}`}>
                        <div className='agenda-time'>
                            <span className='agenda-slot'>{block.time}</span>
                            {block.note && <span className='agenda-note'>{block.note}</span>}
                        </div>
                        <div className='agenda-session-grid'>
                            {block.sessions.map((session, sessionIndex) => (
                                <Card
                                    key={`${session.title}-${sessionIndex}`}
                                    bordered={false}
                                    className={`session-card ${session.isBreak ? 'session-card--break' : ''}`}
                                    bodyStyle={{ padding: '1.75rem' }}
                                >
                                    {session.tag && <span className='session-tag'>{session.tag}</span>}
                                    <h3 className='session-title'>{session.title}</h3>
                                    {session.subtitle && <p className='session-subtitle'>{session.subtitle}</p>}
                                    {session.description && (
                                        <p className='session-description'>{session.description}</p>
                                    )}
                                    {session.topics && session.topics.length > 0 && (
                                        <ul className='session-topics'>
                                            {session.topics.map((topic, topicIndex) => (
                                                <li key={`${session.title}-topic-${topicIndex}`}>
                                                    {topic.label && (
                                                        <span className='session-topic-label'>{topic.label}</span>
                                                    )}
                                                    <span className='session-topic-text'>{topic.description}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    {session.speakers && session.speakers.length > 0 && (
                                        <div className='session-speakers'>
                                            {session.speakers.map((speaker, speakerIndex) => (
                                                <div
                                                    className='speaker-row'
                                                    key={`${speaker.name}-${speakerIndex}`}
                                                >
                                                    <div className='speaker-role'>{speaker.role}</div>
                                                    <div className='speaker-info'>
                                                        {speaker.avatar && (
                                                            <div className='speaker-avatar'>
                                                                <img src={speaker.avatar} alt={speaker.name} />
                                                            </div>
                                                        )}
                                                        <div>
                                                            <p className='speaker-name'>{speaker.name}</p>
                                                            {speaker.affiliation && (
                                                                <p className='speaker-affiliation'>
                                                                    {speaker.affiliation}
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </Card>
                            ))}
                        </div>
                    </section>
                ))}
            </Container>
        </div>
    );
}

export default Agenda;
