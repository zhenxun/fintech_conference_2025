import { Avatar, Card, Divider, Grid, Text } from '@mantine/core';

function Committee() {
    const chair=[
        {
            name:'Huang, Yeu-Shiang',
            title:'Director',
            school:'Center for Innovative FinTech Business Models, NCKU & Dean, College of Management, NCKU',
            img:'https://management.ncku.edu.tw/var/file/17/1017/img/3292/848556846.jpg'
        }
    ]

    const coChair=[
        {
            name:'Lee, Chih-Chen',
            title:'Director of Global Studies in Accountancy and William and Dian Taylor Professor of Accountancy',
            school:'Northern Illinois University',
            img:'/assets/Organizing/Lee,Chih-Chen.jpg'

        }
    ]
    const speaker=[
        {
            name:'Broby, Daniel',
            title:'Professor of Financial Technology',
            school:'Ulster University',
            img:'/assets/Organizing/Broby,Daniel.jpeg'
        },{
            name:'Chen, Jen-Ming',
            title:'Professor, Graduate Institute of Industrial Management',
            school:'National Central University'
        },{
            name:'Chen, Mu-Yen',
            title:'Professor, Department of Engineering Science',
            school:'National Cheng Kung University',
            img:'/assets/Organizing/Chen,Mu-Yen.png'
        },{
            name:'Chew, Seen-Meng',
            title:'Associate Dean for External Engagement',
            school:'Chinese University of Hong Kong (CUHK) Business School',
            img:'/assets/Organizing/Chew,Seen-Meng.jpeg'
        },{
            name:'Devraj Basu',
            title:'Senior Lecturer, Department of Accounting and Finance',
            school:'University of Strathclyde'
        },{
            name:'Huang, Hua-Wei',
            title:'Associate Director',
            school:'Center for Innovative FinTech Business Models, NCKU',
            img:'/assets/Organizing/Huang,Hua-Wei.jpeg'
        },{
            name:'Huang, Ting-Chiao',
            title:'Associate Professor',
            school:'Department of Accounting, Monash University',
            img:'/assets/Organizing/Huang,Ting-Chiao.jpeg'
        },{
            name:'Hung, Patrick C. K',
            title:'Director, International Programs & Professor',
            school:'Faculty of Business and Information Technology, Ontario Tech University',
            img:'/assets/Organizing/Hung,PatrickC.K.jpg'
        },{
            name:'Hwang, Nen-Chen',
            title:'Professor, Accounting Department',
            school:'California State University San Marcos',
            img:'/assets/Organizing/Hwang,Nen-Chen.jpeg'
        },{
            name:'Li, Sheng-Tun',
            title:'Distinguished Professor',
            school:'Department of Industrial and Information Management, NCKU',
            // img:'/assets/Organizing/Li,Sheng-Tun.jpeg'
        },{
            name:'Rahmi, S.Hum.',
            title:'Assistant Professor',
            school:'Department of Library and Information Science, University of Indonesia'
        },{
            name:'Tran Thi Thu Ha',
            title:'Deputy Head of the Constitutional Law Department',
            school:'Ho Chi Minh City University of Law'
        },{
            name:'Wang, Hei-Chia',
            title:'Professor, Institute of Information Management',
            school:'National Cheng Kung University',
            // img:'/assets/Organizing/Wang,Hei-Chia.jpeg'
        },{
            name:'Wang, Te-Wei',
            title:'Professor, Department of Management Information Systems',
            school:'University of Illinois at Springfield',
            img:'/assets/Organizing/Wang,Te-Wei.jpeg'
        },{
            name:'Wang, Wei-Tsong',
            title:'Professor, Department of Industrial and Information Management',
            school:'National Cheng Kung University',
            img:'/assets/Organizing/Wang,Wei-Tsong.jpg'
        },{
            name:'Wu, Cheng-Han',
            title:'Professor, Department of Industrial and Information Management',
            school:'National Cheng Kung University',
            // img:'/assets/Organizing/Wu,Cheng-Han.jpg'
        }
    ]
    const fintech=[
        {
            name:'Huang, Chen-Hao',
            title:'Assistant Professor, Department of Business Administration',
            school:'National Cheng Kung University',
            img:'/assets/Organizing/Huang,Chen-Hao.jpg'
        },{
            name:'Shih, Kung-Hong',
            title:'CEO',
            school:'Center for Innovative FinTech Business Models & Sustainable FinTech Alliance, NCKU',
            img:'/assets/Organizing/Shih,Kung-Hong.jpeg'
        }
    ]
    return (
        <div style={{textAlign: 'justify'}} className='align-items-center bg-light' id='organizing-committee'>
            <div style={{paddingBottom:'100px',paddingTop:'100px'}} className='container'>
                <h1 style={{fontSize:'6vh',fontWeight:'bolder'}} className='text-center'>Organizing Committee</h1>
                <Grid className='my-5' justify="center">
                    <Grid.Col span={{ base: 12, xs: 12 }}>
                        <h1 style={{fontSize:'4vh',fontWeight:'bolder'}} className='text-center'>Chair</h1>
                    </Grid.Col>
                    {chair.map((item,i)=>(
                        <Grid.Col key={i} span={{ base: 12, md: 4, xs: 12}}>
                            <Info item={item} />
                        </Grid.Col>
                    ))}
                </Grid>
                <Divider />
                <Grid className='my-5' justify="center">
                    <Grid.Col span={{ base: 12, xs: 12 }}>
                        <h1 style={{fontSize:'4vh',fontWeight:'bolder'}} className='text-center'>Co-Chair</h1>
                    </Grid.Col>
                    {coChair.map((item,i)=>(
                        <Grid.Col key={i} span={{ base: 12, md: 4, xs: 12 }}>
                            <Info item={item} />
                        </Grid.Col>
                    ))}
                </Grid>
                <Divider />
                <Grid className='my-5'>
                    <Grid.Col span={{ base: 12, xs: 12 }}>
                        <h1 style={{fontSize:'4vh',fontWeight:'bolder'}} className='text-center'>Program Committee (alphabetically)</h1>
                    </Grid.Col>
                    {speaker.map((item,i)=>(
                        item.img?(
                            <Grid.Col key={i} span={{ base: 12, lg: 3 ,md:6, xs: 12}}>
                                <Info item={item} />
                            </Grid.Col>
                        ):null
                    ))}
                </Grid>
                <Divider />
                <Grid className='my-5' justify="center">
                    <Grid.Col span={{ base: 12, xs: 12 }}>
                        <h1 style={{fontSize:'4vh',fontWeight:'bolder'}} className='text-center'>Executives of Committee</h1>
                    </Grid.Col>
                    {fintech.map((item,i)=>(
                        <Grid.Col key={i} span={{ base: 12, md: 3, xs: 12}}>
                            <Info item={item} />
                        </Grid.Col>
                    ))}
                </Grid>
            </div>
        </div>
    );
}

function Info({item}) {
    return(
    <div className='d-flex justify-content-center align-items-center'>
        <Card withBorder padding="xl" radius="md" style={{minHeight:'400px'}} >
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