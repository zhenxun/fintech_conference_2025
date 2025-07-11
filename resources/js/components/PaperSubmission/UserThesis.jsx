import { LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PlusCircleOutlined, UploadOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Divider, Layout, Menu, Table, theme, Typography } from 'antd';
import Column from 'antd/es/table/Column';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
const { Header, Sider, Content } = Layout;
const {Title}=Typography
const siderStyle = {
    overflow: 'auto',
    height: '100vh',
    position: 'sticky',
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: 'thin',
    scrollbarGutter: 'stable',
};
  
function UserThesis() {
    const cookie=new Cookies()
    const [user,setUser]=useState(null)

    const [key,setKey]=useState(null)
    function auth(){
        fetch('https://admin.conference.hub-fintech-ncku.tw/api/auth',{
            method:'GET',
            headers: {
                'Authorization': cookie.get('token'),
                'X-FP-API-KEY': 'iphone', //it can be iPhone or your any other attribute
                'Content-Type': 'application/json'
            }
        }).then(response=>{
            return response.json()
        }).then(res=>{
            if(!res.result){
                window.location.href='/login'
            }else{
                setUser(res.user)
                setKey('-1')
            }
        })
    }

    useEffect(()=>{
        auth()
    },[])

    const logout=()=>{
        cookie.remove('token')
        location.href='/login'
    }

    const [collapsed, setCollapsed] = useState(cookie.get('collapsed')?cookie.get('collapsed'):false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    
    if(!user) return(<></>)
    return (
        <Layout style={{minHeight:'100vh'}}>
        <Sider style={siderStyle} trigger={null} collapsible collapsed={collapsed}>
            <a href='/submission'><img style={{width:'100%'}} className='p-3' src='/assets/logo/fintech.png' /></a>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[key]}
                items={[
                  { key: '0', icon: <UserOutlined />, label: 'Profile', onClick: () => location.href = '/profile' },
                  { key: '1', icon: <UploadOutlined />, label: 'Upload', onClick: () => location.href = '/thesis.upload' },
                ]}
            />
        </Sider>
        <Layout>
            <Header style={{padding: 0,background: colorBgContainer,}}>
                <div className='d-flex flex-row align-items-center justify-content-between'>
                    <Button type="text" icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} onClick={() => {cookie.set('collapsed',!collapsed),setCollapsed(!collapsed)}} style={{fontSize: '16px',width: 64,height: 64,}}/>
                    <div>
                        <span className='mx-3'>{user?user.firstname:null}</span>
                        <Button type="text" icon={<LogoutOutlined />} onClick={() => logout()} style={{fontSize: '16px',width: 64,height: 64,}}/>                        
                    </div>
                </div>
            </Header>
            <Content
                style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
                }}
            >
                <Main user={user} />
            </Content>
        </Layout>
      </Layout>
    );
}


function Main({user}) {
    const cookie = new Cookies();
    const [thesisList, setThesisList] = useState([]);

    function getData() {
        fetch('https://admin.conference.hub-fintech-ncku.tw/api/thesis', {
            method: 'GET',
            headers: {
                Authorization: cookie.get('token'),
                'X-FP-API-KEY': 'iphone',
            },
        })
            .then((res) => res.json())
            .then((res) => {
                if (!res.result) {
                    window.location.href = '/login';
                } else {
                    setThesisList(res.thesis);
                }
            });
    }

    function JsontoArray(item){
        let authors=JSON.parse(item)
        const correspondingAuthors = authors.filter(a => a.isCorresponding=="true");
        console.log(correspondingAuthors[0]);
        return correspondingAuthors[0].lastName+' '+correspondingAuthors[0].firstName
    }

    useEffect(() => {
        getData();
    }, []);

    if (!user) return <></>;
    return (
        <>
            <Divider orientation='left'><Title level={2}>My Thesis</Title></Divider>
            <div className='text-end my-3'><Button color={'cyan'} variant={'solid'} icon={<PlusCircleOutlined />} onClick={()=>window.open('/thesis.upload')}>Create New submission</Button></div>
            <Table rowKey={'id'} dataSource={thesisList}>
                <Column className='text-center' title="Submission ID" dataIndex="paper_code" key="paper_code" />
                <Column className='text-center' title="Year" dataIndex="year" key="year" />
                <Column className='text-center' title="Title" dataIndex="title" key="title" />
                <Column className='text-center' title="Corresponding author" dataIndex="author" key="author" render={(item)=>JsontoArray(item)} />
                <Column className='text-center' title="State" dataIndex="state" key="state" />
            </Table>
        </>
    );
}


export default UserThesis;