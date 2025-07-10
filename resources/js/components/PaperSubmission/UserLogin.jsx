import { Button, Divider, Form, Input, Typography } from 'antd';
import Cookies from 'universal-cookie';

const { Title, Link} = Typography;
function UserLogin() {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        let data=new FormData();
        data.append('email',values.email)
        data.append('password',values.password)
        login(data)
    };

    const cookie=new Cookies()
    function login(file){
        fetch('http://127.0.0.1:8001/api/login',{method:'POST',body:file}
        ).then(response=>{
            return response.json()
        }).then(res=>{
            if(res.result){
                cookie.set('token',res.authorisation.type+' '+res.authorisation.token, {maxAge: 60*60,path:'/'})
                location.href='/submission'
            }else{
                console.log('Received values of form: ', values);
            }
        })
    }

    return (
        <div className="my-5">
            <Typography className="container mt-5 border rounded p-5 bg-light">
                <div className='text-center mb-5'>
                    <a href='/' className='my-3'><img src='/assets/logo/fintech.png' style={{maxHeight:'150px'}} /></a>
                </div>
                <Form form={form} onFinish={onFinish} layout="horizontal" autoComplete="off">
                    <Divider orientation='left'><Title level={2}>Login</Title></Divider>
                    <Form.Item rules={[{required:true,message:'Required'}]} name="email" label="Email">
                        <Input type='email' id='email' />
                    </Form.Item>
                    <Form.Item rules={[{required:true,message:'Required'}]} name="password" label="Password">
                        <Input type='password' id='password' />
                    </Form.Item>
                    <Button className='my-3' size={'large'} type="primary" block htmlType={'submit'}>Login</Button>
                </Form>
                <div className='text-center'><Link href='/register'>Create an account</Link></div>

            </Typography>
        </div>
    );
}

export default UserLogin;