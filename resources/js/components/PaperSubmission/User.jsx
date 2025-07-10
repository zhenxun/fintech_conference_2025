import { LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Input, Layout, Menu, message, Space, theme, Typography } from 'antd';
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
  
function User() {
    const cookie=new Cookies()
    const [user,setUser]=useState(null)

    const [key,setKey]=useState(null)
    function auth(){
        fetch('http://127.0.0.1:8001/api/auth',{
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
                setKey('0')
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
            <a href='/submission'><img style={{width:'100%'}} className='p-3' src='https://academy.hub-fintech-ncku.tw/assets/logo/academy.png' /></a>
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

function Main({ user }) {
    const cookie=new Cookies()
    const [form] = Form.useForm();
    const [serverCode, setServerCode] = useState('');
    const [countdown, setCountdown] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);
    const emailValue = Form.useWatch('email', form);
    
    useEffect(() => {
        // 設定除了 password 以外的欄位
        const { password, ...userWithoutPassword } = user;
        form.setFieldsValue(userWithoutPassword);
    }, [user]);

    const onFinish = (values) => {
        if (!values.password) {
            message.error('Please enter your password to verify your identity');
            return;
        }

        // 如果 email 有修改，驗證碼需一致
        if (values.email !== user.email) {
            if (values.otp !== serverCode) {
                message.error('The verification code is incorrect or has not been verified.');
                return;
            }
        }

        let data = new FormData();
        data.append('firstname', values.firstname);
        data.append('lastname', values.lastname || '');
        data.append('email', values.email);
        data.append('country', values.country);
        data.append('affiliation', values.affiliation);
        data.append('webpage', values.webpage || '');
        data.append('password', values.password);

        fetch('http://127.0.0.1:8001/api/user.update', {
            method: 'POST',
            headers: {
                'Authorization': cookie.get('token'),
            },
            body: data,
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.result) {
                    message.success('updated success');
                } else {
                    message.error('updated failed');
                }
            })
            .catch(() => {
                message.error('system error');
            });
    };

    // 發送 email 驗證
    const onValidate = (email) => {
        if (!email) {
            message.error('please enter your Email');
            return;
        }

        let data = new FormData();
        data.append('email', email);
        fetch('http://127.0.0.1:8001/api/mail.register', { method: 'POST', body: data })
            .then((res) => res.json())
            .then((res) => {
                if (res.result) {
                    message.success('The email was sent successfully. Please go to email to receive the verification code.');
                    setServerCode(res.code); // 記錄後端回傳驗證碼（或根據你的後端實作改）
                    setIsDisabled(true);
                    setCountdown(60);
                    const interval = setInterval(() => {
                        setCountdown((prev) => {
                            if (prev <= 1) {
                                clearInterval(interval);
                                setIsDisabled(false);
                                return 0;
                            }
                            return prev - 1;
                        });
                    }, 1000);
                } else {
                    message.error('Failed to send email');
                }
            })
            .catch(() => {
                message.error('System error');
            });
    };

    return (
        <>
            <Divider orientation='left'><Title level={2}>Profile</Title></Divider>
            <div>
                <Typography className="container p-3">
                    <Form form={form} onFinish={onFinish} layout="vertical" autoComplete="off">
                        <Form.Item name="firstname" label="Firstname" rules={[{ required: true, message: 'Required' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="lastname" label="Lastname">
                            <Input />
                        </Form.Item>

                        {/* Email + 驗證 */}
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[{ required: true, message: 'Required' }]}
                        >
                            <Space.Compact block>
                                <Input type='email' defaultValue={user.email} placeholder='student@example.com' />
                                <Button
                                    onClick={() => onValidate(emailValue)}
                                    disabled={isDisabled || emailValue === user.email}
                                >
                                    {isDisabled ? `Please wait for (${countdown})` : "Send verification code"}
                                </Button>
                            </Space.Compact>
                        </Form.Item>
                        
                        {/* 若 email 改了就顯示驗證碼輸入 */}
                        {form.getFieldValue('email') !== user.email && (
                            <Form.Item
                                name="otp"
                                label="verification code"
                                rules={[{ required: true, message: 'please verification code' }]}
                            >
                                <Input.OTP length={4} />
                            </Form.Item>
                        )}

                        <Form.Item name="country" label="Country" rules={[{ required: true, message: 'Required' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="affiliation" label="Affiliation" rules={[{ required: true, message: 'Required' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="webpage" label="Webpage">
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[{ required: true, message: 'Please enter your password to verify your identity.' }]}
                        >
                            <Input.Password placeholder="Password is required to update your information." />
                        </Form.Item>

                        <Button className='my-3' size={'large'} type="primary" block htmlType={'submit'}>
                            Update
                        </Button>
                    </Form>
                </Typography>
            </div>
        </>
    )
}

export default User;