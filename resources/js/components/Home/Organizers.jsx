import Marquee from 'react-fast-marquee';
import { useMediaQuery } from 'react-responsive';

function Organizers() {
    const icon=[
        {
            name:'國科會 logo',
            src:'/assets/logo/nstc.png'
        },{
            name:'成功大學 logo',
            src:'/assets/logo/ncku.png'
        },{
            name:'產學小聯盟 logo',
            src:'/assets/logo/sfta.webp'
        },{
            name:'fintech logo',
            src:'/assets/logo/fintech.png'
        },{
            name:'成大管理學院 logo',
            src:'/assets/logo/manage.png'
        }
    ]
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const marqueeSpeed = isMobile ? 50 : 0;
    return (
        <div style={{textAlign: 'justify',backgroundColor:'rgba(255,255,255)'}} className='align-items-center' id='organizers'>
            <div style={{paddingBottom:'100px',paddingTop:'100px'}} className='container text-center'>
                <h1 style={{fontSize:'6vh',fontWeight:'bolder'}}>Organizers</h1>
                <div className='mt-5'>
                    {isMobile?(<Marquee speed={marqueeSpeed} style={{maxHeight:'300px'}}>
                    {icon.map((item,i)=>(
                        <div key={i} style={{width:'150px',marginLeft:'50px',marginRight:'50px'}}>
                            <img style={{maxHeight:'150px'}} className='img-fluid' src={item.src} alt={item.name} />
                        </div>
                    ))}
                    </Marquee>):
                    <div className='d-flex flex-row justify-content-center align-items-center'>
                    {icon.map((item,i)=>(
                        <div key={i} style={{width:'150px',marginLeft:'50px',marginRight:'50px'}}>
                            <img style={{maxHeight:'150px'}} className='img-fluid' src={item.src} alt={item.name} />
                        </div>
                    ))}
                    </div>
                    }
                </div>
            </div>
        </div>
    );
}
export default Organizers;