import { Button, Divider, Form, Input, Space, Typography, message } from 'antd';
import { useState } from 'react';

const { Title,Link } = Typography;

function Register() {
    const [form] = Form.useForm();
    const emailValue = Form.useWatch('email', form);

    const [code, setCode] = useState('1111'); // 範例預設
    const [countdown, setCountdown] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);

    const onFinish = (values) => {
        let data = new FormData();
        data.append('firstname', values.firstname);
        data.append('lastname', values.lastname || '');
        data.append('email', values.email);
        data.append('country', values.country);
        data.append('affiliation', values.affiliation);
        data.append('webpage', values.webpage || '');
        data.append('password', values.password);
        register(data);
    };

    function register(file) {
        fetch('http://127.0.0.1:8001/api/register', { method: 'POST', body: file })
            .then(response => response.json())
            .then(res => {
                if (res.result) {
                    location.href = '/login';
                } else {
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
        fetch('http://127.0.0.1:8001/api/mail.register', { method: 'POST', body: file })
            .then(response => response.json())
            .then(res => {
                if (res.result) {
                    message.success('The email was sent successfully. Please go to email to receive the verification code.');
                    setCode(res.code);
                }
            });
    }

    return (
        <div className="my-5">
            <Typography className="container mt-5 border rounded p-5 bg-light">
                <div className='text-center mb-5'>
                    <img
                        style={{ maxHeight: '200px' }}
                        src='https://academy.hub-fintech-ncku.tw/assets/logo/academy.png'
                    />
                </div>
                <Form form={form} onFinish={onFinish} layout="vertical" autoComplete="off">
                    <Divider orientation='left'><Title level={2}>Register</Title></Divider>
                    <Form.Item name="firstname" label="Firstname" rules={[{ required: true, message: 'Required' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="lastname" label="Lastname">
                        <Input />
                    </Form.Item>
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
                        rules={[{ required: true, message: 'Required' }]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        name="confirm"
                        label="Password confirm"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            { required: true, message: 'Please enter your password again' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The passwords you entered twice do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Required' }]}>
                        <Space.Compact block>
                            <Input type="email" placeholder='student@example.com' />
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
                <div className='text-center'><Link href='/login'>Already registered?</Link></div>
            </Typography>
        </div>
    );
}

export default Register;
