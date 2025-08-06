import { Button, Card, Form, Input } from 'antd';
import { useEffect, useState } from 'react';
function Joined() {
    const [form] = Form.useForm();
    const [message,setMessage]=useState(null)
    const onFinish = (values) => {
        let data=new FormData();
        data.append('email',values.email);
        data.append('year',2025);
        searchEmail(data)
    }
    function search(file){
      fetch('https://admin.conference.hub-fintech-ncku.tw/api/member.search',{
        method:'POST',
        body:file,
      }).then(response=>{
        return response.json()
      }).then(res=>{
            setMessage(res.message)
      })
    }

    function searchEmail(file){
      fetch('https://admin.conference.hub-fintech-ncku.tw/api/member.search.email',{
        method:'POST',
        body:file,
      }).then(response=>{
        return response.json()
      }).then(res=>{
        form.resetFields()
        setMessage(res.message)
      })
    }

    useEffect(()=>{
        const params = new URLSearchParams(window.location.search);
        const id = params.get("id");
        if(id){
            let data=new FormData();
            data.append('year',2025);
            data.append('member_code',id);
            search(data)
        }
    },[])

    return (
        <div className='container py-3' style={{maxWidth:'1200px'}}>
            <Card>
                <h1>Check your member ID</h1>
                <Form form={form} onFinish={onFinish} className='my-3' layout={'vertical'}>
                    <Form.Item rules={[{required:true,message:'Required'}]} name={'email'} label={'Register Email'}>
                        <Input id='email' />
                    </Form.Item>
                    <Form.Item className="text-end">
                        <Button type="primary" block htmlType="submit">Search</Button>
                    </Form.Item>
                </Form>
                <div className='my-3'>
                    {message}
                </div>
            </Card>
        </div>
    );
}

export default Joined;
