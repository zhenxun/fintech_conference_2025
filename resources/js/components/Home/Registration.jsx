import { Button } from '@mantine/core';

function Registration() {
    return (
        <div style={{backgroundColor:'rgba(255,255,255)'}} className='align-items-center' id='registration'>
            <div style={{paddingBottom:'100px',paddingTop:'100px'}} className='container text-center'>
                <h1 style={{fontSize:'4vh',fontWeight:'bolder'}}>Registration</h1>
                <h3 className='text-danger'>*Free registration for this event*</h3>

                <div className='text-center my-5'>
                    <Button style={{minWidth:'230px'}} size="xl" radius="xl" onClick={()=>window.location.href='/member.register'}>
                        Register Now
                    </Button>
                </div>
            </div>
        </div>
    );
}
export default Registration;