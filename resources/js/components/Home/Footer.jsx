import { Col, Row } from 'react-bootstrap';
import Contact from './Contact';

function Footer() {
    const links = [
        { link: '/', label: 'Home' },
        { link: '/agenda', label: 'Agenda' },
        { link: '#', label: 'Careers' },
    ];
    return (
    <div id='contact'>
        <Contact />
        <div>
          <Row>
            <Col>
              <div className='text-light'>Copyright © 2024 Center for Innovative FinTech Business Models, NCKU. All rights reserved.</div>
            </Col>
            <Col className='d-flex justify-content-end'>
            <a className="mx-2 text-light" href="https://conference.2023.hub-fintech-ncku.tw/privacy-policy">Privacy Policy</a>
            <a className='mx-2 text-light' href="https://conference.2023.hub-fintech-ncku.tw/terms-of-use">Terms of Service</a>
            </Col>
          </Row>
        </div>
        <a id='fixedbutton' target='_blank' className='mb-3' href='/assets/img/ESGFT2024.jpg' style={{maxWidth:"130px",maxHeight:"130px",transform:'scaleX(-1)'}}>
          <lottie-player src="https://lottie.host/af386e20-b360-4757-a913-be4bcad9d688/IIk0bcdJ6s.json"  background="transparent"  speed="1"  style={{maxWidth:"200px",maxHeight:"200px"}}  loop  autoplay></lottie-player>
        </a>
      </div>
    );
}
export default Footer;