import { Button, Divider, Form, Input, Modal, Radio, Select, Space, Typography, message } from 'antd';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

const { Title,Link } = Typography;

function Register() {
    const cookie=new Cookies()
    const [user,setUser]=useState(null)
    function auth(){
        fetch('https://admin.conference.hub-fintech-ncku.tw/api/auth.register',{
            method:'GET',
            headers: {
                'Authorization': cookie.get('token'),
                'X-FP-API-KEY': 'iphone', //it can be iPhone or your any other attribute
                'Content-Type': 'application/json'
            }
        }).then(response=>{
            return response.json()
        }).then(res=>{
            if(res.result){
                setUser(res.user)
            }
        })
    }

    useEffect(()=>{
        auth()
    },[])

    const returnResult=(result)=>{
        if(result){
            auth()
        }
    }

    const [form] = Form.useForm();
    const emailValue = Form.useWatch('email', form);
    const identityValue = Form.useWatch('identity', form);
    const [messageApi, contextHolder] = message.useMessage();
    const [code, setCode] = useState('1111'); // 範例預設
    const [countdown, setCountdown] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);
    
    const onFinish = (values) => {        
        let data = new FormData();
        data.append('name', values.name);
        data.append('email', values.email);
        data.append('affiliation', values.affiliation);
        data.append('identity', values.identity);
        data.append('job', values.job);
        data.append('submission', values.submission?values.submission:null);
        data.append('year', 2025);     
        register(data);        
    };

    function register(file) {
        fetch('https://admin.conference.hub-fintech-ncku.tw/api/member.register', { method: 'POST', body: file })
            .then(response => response.json())
            .then(res => {
                if (res.result) {
                    messageApi.success(res.message)
                } else {
                    messageApi.error(res.message)
                    console.log('Server response: ', res);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    const onValidate = (email) => {
        if (!email) {
            message.error('Please enter your email');
        } else {
            let data = new FormData();
            data.append('email', email);
            sendValidate(data);
            setIsDisabled(true);
            setCountdown(10);
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
        }
    };

    function sendValidate(file) {
        fetch('https://admin.conference.hub-fintech-ncku.tw/api/mail.register', { method: 'POST', body: file })
            .then(response => response.json())
            .then(res => {
                if (res.result) {
                    message.success('The email was sent successfully. Please go to email to receive the verification code.');
                    setCode(res.code);
                }
            });
    }

    function copyYouself() {
        
        form.setFieldsValue({
            name: user.firstname + ' ' + user.lastname,
            affiliation: user.affiliation,
            email: user.email,
        });
    }


    return (
        <div className="my-5">
            {contextHolder}
            <Typography className="container mt-5 border rounded p-5 bg-light">
                <div className='text-center mb-5'>
                    <img
                        style={{ maxHeight: '200px' }}
                        src='/assets/logo/fintech.png'
                    />
                </div>
                <Form form={form} onFinish={onFinish} layout="vertical" autoComplete="off">
                    <Divider orientation='left'><Title level={2}>Register</Title></Divider>
                    <Form.Item name="identity" initialValue={'false'} label="Identity" rules={[{ required: true, message: 'Required' }]}>
                        <Radio.Group options={[
                            { value: 'true', label: 'Presenter' },
                            { value: 'false', label: 'Not Presenter' },]} 
                        />
                    </Form.Item>
                    {identityValue == 'true' ? (
                        <>
                            {user?(<Button
                            className='mb-2'
                            type='link'
                            onClick={() => copyYouself()}
                            >
                            Click here to add yourself
                            </Button>):<Login className='mb-2'
                            type='link' result={returnResult} />}
                        </>
                        ) : null}

                        <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Required' }]}>
                        <Input />
                        </Form.Item>

                        <Form.Item name="affiliation" label="Institute/Organization" rules={[{ required: true, message: 'Required' }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item name="job" label="Job" rules={[{ required: true, message: 'Required' }]}>
                            <Input />
                        </Form.Item>

                        {identityValue=='true' && user && user.thesis.length!=0?(<Form.Item name="submission" label="Submission" rules={[{ required: true, message: 'Required' }]}>
                            <Select options={user.thesis.map((item)=>(
                                {value:item.id,label:item.title}
                            ))} 
                            />
                        </Form.Item>):null}

                        <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Required' }]}>
                        <Space.Compact block>
                            <Form.Item
                            name="email"
                            noStyle
                            rules={[{ type: "email", message: 'Invalid email' }]}
                            >
                            <Input
                                type="email"
                                placeholder="student@example.com"
                            />
                            </Form.Item>
                            <Button onClick={() => onValidate(emailValue)} disabled={isDisabled}>
                            {isDisabled ? `Please wait (${countdown})` : "Send verification code"}
                            </Button>
                        </Space.Compact>
                        </Form.Item>

                    <Form.Item
                        name="otp"
                        label="Verification code"
                        rules={[
                            {
                                required: true,
                                validator: (_, value) => value == code
                                    ? Promise.resolve()
                                    : Promise.reject(new Error('Incorrect verification code！')),
                            },
                        ]}
                    >
                        <Input.OTP length={4} />
                    </Form.Item>
                    <Button className='my-3' size={'large'} type="primary" block htmlType={'submit'}>
                        Register
                    </Button>
                </Form>
                <div className='text-center'><Link href='/member.join'>Already registered?</Link></div>
            </Typography>
        </div>
    );
}

function Login({result}){

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const [form] = Form.useForm();
    const onFinish = (values) => {
        let data=new FormData();
        data.append('email',values.email)
        data.append('password',values.password)
        login(data)
    };
    
    const cookie=new Cookies()
    function login(file){
        fetch('https://admin.conference.hub-fintech-ncku.tw/api/login',{method:'POST',body:file}
        ).then(response=>{
            return response.json()
        }).then(res=>{
            if(res.result){
                cookie.set('token',res.authorisation.type+' '+res.authorisation.token, {maxAge: 60*60,path:'/'})
                setIsModalOpen(false);
                result(true)
                messageApi.success('Login Success')
            }else{
                console.log('Received values of form: ', values);
                setIsModalOpen(false);
                result(false)
                messageApi.error('Login Failed')
            }
        })
    }

    return(<>
        <Button className='mb-3' type="primary" onClick={showModal}>Login</Button>
        {contextHolder}
        <Modal
            title="Presenter Login"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalOpen}
            footer={null}
            centered
        >
            <Form form={form} className='my-3' onFinish={onFinish} layout="horizontal" autoComplete="off">
                <Form.Item rules={[{required:true,message:'Required'}]} name="email" label="Email">
                    <Input type='email' id='email' />
                </Form.Item>
                <Form.Item rules={[{required:true,message:'Required'}]} name="password" label="Password">
                    <Input type='password' id='password' />
                </Form.Item>
                <Button className='my-3' size={'large'} type="primary" block htmlType={'submit'}>Login</Button>
            </Form>
        </Modal>
    </>)
}

export default Register;
