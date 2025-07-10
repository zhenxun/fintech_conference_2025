import { FileTextOutlined, KeyOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined, MinusCircleOutlined, PlusOutlined, UploadOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Divider, Form, Input, Layout, Menu, message, theme, Typography, Upload } from 'antd';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
const { Header, Sider, Content } = Layout;
const {Title,Paragraph}=Typography
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
  
function UploadThesis() {
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
                setKey('1')
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


function Main({user}) {
    const cookie = new Cookies();
    const [form] = Form.useForm();
    const [loading,setLoading]=useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const onFinish = (values) => {
        console.log('表單送出資料：', values);

        const formData = new FormData();

        formData.append('title', values.title);
        formData.append('abstract', values.abstract);

        const keywords = values.keywords?.filter(kw => !!kw) || [];
        keywords.forEach((kw, idx) => {
            formData.append(`keywords[${idx}]`, kw);
        });

        (values.authors || []).forEach((author, idx) => {
            formData.append(`authors[${idx}][firstName]`, author.firstName);
            formData.append(`authors[${idx}][lastName]`, author.lastName);
            formData.append(`authors[${idx}][email]`, author.email);
            formData.append(`authors[${idx}][affiliation]`, author.affiliation);
            formData.append(`authors[${idx}][country]`, author.country);
            formData.append(`authors[${idx}][webPage]`, author.webPage || '');
            formData.append(`authors[${idx}][isCorresponding]`, author.isCorresponding ? 'true' : 'false');
        });

        const coverFile = values.cover?.[0]?.originFileObj;
        const paperFile = values.paper?.[0]?.originFileObj;

        if (coverFile) {
            formData.append('cover', coverFile);
        }
        if (paperFile) {
            formData.append('paper', paperFile);
        }
        setLoading(true)
        create(formData)
    }

    function create(formData) {
        fetch('http://127.0.0.1:8001/api/thesis.create', {
            method: 'POST',
            body: formData,
            headers: {
                Authorization: cookie.get('token'),
                'X-FP-API-KEY': 'iphone',
            },
        })
        .then((response) => response.json())
        .then((res) => {
            form.resetFields();
            if (res.result) {
                messageApi.success(res.message);
                setLoading(false)
            } else {
                messageApi.error(res.message);
                setLoading(false)
            }
        });
  }

    function copyYouself(field){
        form.setFieldsValue({
            authors: {
            [field.name]: {
                firstName: user.firstname,
                lastName: user.lastname,
                email: user.email,
                affiliation: user.affiliation,
                country: user.country,
                webPage: user.webPage,
            },
            },
        });
        
    }

    if (!user) return <></>;
    if(loading) return <>loading</>
    return (
        <>
            {contextHolder}
            <Divider orientation='left'><Title level={1}>New submission</Title></Divider>
            <Paragraph>
                Please fill out the information below and then click “Submit” at the bottom of the form. The required fields are marked by <up className='text-danger'>*</up>.
            </Paragraph>
            <Paragraph className='my-5'>
                <Form form={form} onFinish={onFinish} layout="vertical" autoComplete="off">
                    <div style={{marginTop:'30px',marginBottom:'50px'}} className='p-3'>
                        <Title level={2}><UserAddOutlined className='mx-3' />Author Information</Title>
                        <ul>
                            <li><strong>Email address</strong> will only be used for communication with the authors. It will not appear in public Web pages of this conference. The email address can be omitted for not corresponding authors. These authors will also have no access to the submission page.</li>
                            <li><strong>Web page</strong> can be used on the conference Web pages, for example, for making the program. It should be a Web page of the author, not the Web page of her or his organization.</li>
                            <li>Each author marked as a <strong>corresponding</strong> author will receive email messages from the system about this submission. There must be at least one corresponding author.</li>
                        </ul>
                        <Form.List name="authors" initialValue={[{}]}>
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map((field, index) => (
                                    <div
                                    key={field.key}
                                    style={{ border: '1px solid #ddd', padding: '16px', marginBottom: '16px', borderRadius: '8px' }}
                                    >
                                    <Title level={5}>Author #{index + 1}<Button className='ms-2' type='link' onClick={()=>copyYouself(field)}>Click here to add yourself</Button></Title>

                                    <Form.Item
                                        {...field}
                                        label="First Name"
                                        name={[field.name, 'firstName']}
                                        fieldKey={[field.fieldKey, 'firstName']}
                                        rules={[{ required: true, message: 'Please enter First Name' }]}
                                        >
                                        <Input placeholder="First Name" />
                                    </Form.Item>

                                    <Form.Item
                                        {...field}
                                        label="Last Name"
                                        name={[field.name, 'lastName']}
                                        fieldKey={[field.fieldKey, 'lastName']}
                                        rules={[{ required: true, message: 'Please enter Last Name' }]}
                                        >
                                        <Input placeholder="Last Name" />
                                    </Form.Item>

                                    <Form.Item
                                        {...field}
                                        label="Email"
                                        name={[field.name, 'email']}
                                        fieldKey={[field.fieldKey, 'email']}
                                        rules={[{ required: true, message: 'Please enter Email' }]}
                                        >
                                        <Input placeholder="Email" />
                                    </Form.Item>

                                    <Form.Item
                                        {...field}
                                        label="Affiliation"
                                        name={[field.name, 'affiliation']}
                                        fieldKey={[field.fieldKey, 'affiliation']}
                                        rules={[{ required: true, message: 'Please enter Affiliation' }]}
                                        >
                                        <Input placeholder="Affiliation" />
                                    </Form.Item>

                                    <Form.Item
                                        {...field}
                                        label="Country/Region"
                                        name={[field.name, 'country']}
                                        fieldKey={[field.fieldKey, 'country']}
                                        rules={[{ required: true, message: 'Please enter Country/Region' }]}
                                        >
                                        <Input placeholder="Country/Region" />
                                    </Form.Item>

                                    <Form.Item
                                        {...field}
                                        label="Web Page"
                                        name={[field.name, 'webPage']}
                                        fieldKey={[field.fieldKey, 'webPage']}
                                        >
                                        <Input placeholder="(Optional) Web Page" />
                                    </Form.Item>

                                    <Form.Item
                                        {...field}
                                        name={[field.name, 'isCorresponding']}
                                        fieldKey={[field.fieldKey, 'isCorresponding']}
                                        valuePropName="checked"
                                        >
                                        <Checkbox>Corresponding author</Checkbox>
                                    </Form.Item>

                                    <div style={{ textAlign: 'right' }}>
                                        <Button
                                        type="dashed"
                                        icon={<MinusCircleOutlined />}
                                        onClick={() => remove(field.name)}
                                        danger
                                        >
                                        Delete this Author Information
                                        </Button>
                                    </div>
                                    </div>
                                ))}

                                <Form.Item>
                                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                        Create A new Author Information
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                        </Form.List>
                    </div>
                    <div style={{marginTop:'100px',marginBottom:'50px'}} className='p-3'>
                        <Title level={2}><FileTextOutlined className='mx-3' />Title and Abstract</Title>
                        <div className='rounded border p-3'>
                        <Form.Item name="title" label="Title" rules={[{ required: true, message: '必填' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="abstract" label="Abstract" rules={[{ required: true, message: '必填' }]}>
                            <Input />
                        </Form.Item>
                        </div>
                    </div>
                    <div style={{marginTop:'100px',marginBottom:'50px'}} className='p-3'>
                        <Title level={2}><KeyOutlined className='mx-3' /> Keywords</Title>
                        <div>
                            Type a list of keywords (also known as key phrases or key terms), <strong>one per column</strong> to characterize your submission. You should specify at least two keywords.
                        </div>
                        <div className='rounded border p-3 mt-3'>
                            {[...Array(5)].map((_, idx) => (
                            <Form.Item
                                key={idx}
                                label={`Keyword #${idx + 1}`}
                                name={['keywords', idx]} // 最後表單值會是 keywords: ['keyword1', 'keyword2', ...]
                                rules={idx < 2 ? [{ required: true, message: 'Please enter a keyword' }] : []}
                            >
                                <Input placeholder={`Keyword #${idx + 1}`} />
                            </Form.Item>
                            ))}
                        </div>
                    </div>
                    <div style={{ marginTop: '100px', marginBottom: '50px' }} className="p-3">
                    <Title level={2}>
                        <UploadOutlined className="mx-3" />
                        Files
                    </Title>
                    <ul>
                        <li>Please submit <strong>TWO PDF files</strong>, which are the front-page (including the title, authors’ names, affiliations, abstract and keywords) and the manuscript respectively.</li>
                        <li>The front page should include the title, authors’ names, affiliations, abstract and keywords.</li>
                        <li>The manuscript should contain only the title and the content, which the authors’ names, affiliations, or any other information that may disclose the identity of the author(s) should be omitted for blind review process.</li>
                    </ul>
                    <div className="rounded border p-3 mt-3">
                        <Form.Item
                        name="cover"
                        label="Upload Front page (PDF only)"
                        valuePropName="fileList"
                        getValueFromEvent={(e) => Array.isArray(e) ? e : e && e.fileList}
                        rules={[{ required: true, message: 'Please upload the Front page (PDF).' }]}
                        >
                        <Upload
                            name="cover"
                            accept=".pdf"
                            beforeUpload={() => false} // 不要自動上傳，保留 fileList 給表單
                            maxCount={1}
                        >
                            <Button icon={<UploadOutlined />}>Click to Upload Front page</Button>
                        </Upload>
                        </Form.Item>

                        <Form.Item
                        name="paper"
                        label="Upload Paper (PDF only)"
                        valuePropName="fileList"
                        getValueFromEvent={(e) => Array.isArray(e) ? e : e && e.fileList}
                        rules={[{ required: true, message: 'Please upload the paper file (PDF).' }]}
                        >
                        <Upload
                            name="paper"
                            accept=".pdf"
                            beforeUpload={() => false}
                            maxCount={1}
                        >
                            <Button icon={<UploadOutlined />}>Click to Upload Paper</Button>
                        </Upload>
                        </Form.Item>
                    </div>
                    </div>

                    <div style={{ marginTop: '100px', marginBottom: '50px' }} className="p-3">
                    <Title level={2}>Completion</Title>
                    <div className='my-3'>
                        If you filled out the form and uploaded your files, press the 'Submit' button below. <strong className='text-danger'>Do not press the button twice: uploading may take time!</strong>
                    </div>
                    <Form.Item className='mx-1'>
                        <Button type="primary" size='large' block htmlType="submit">Submit</Button>
                    </Form.Item>
                    </div>
                </Form>
            </Paragraph>
        </>
    );
}


export default UploadThesis;