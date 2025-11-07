import Menu from '../Menu';
import Committee from './Committee';
import Cover from './Cover';
import Footer from './Footer';
import Introduction from './Introduction';
import Organizers from './Organizers';
import Registration from './Registration';
import Submission from './Submission';
import Timeline from './Timeline';
import Topics from './Topics';

function Home() {
    const link=[
        {
            name:'Keynote<br/>Speaker',
            href:'#keynote-speaker'
        },{
            name:'Organizing<br/>Committee',
            href:'#organizing-committee'
        },{
            name:'Topics of<br/>Interests',
            href:'#topics-of-interests'
        },{
            name:'Paper Submission<br/>& Publication',
            href:'#paper-submission-and-publication'
        },{
            name:'Important<br/>Dates',
            href:'#important-dates'
        },{
            name:'Registration<br/>& Payment',
            href:'#registration'
        },{
            name:'Agenda',
            href:'/agenda'
        },{
            name:'Contact',
            href:'#contact'
        }
        
    ]
    return (
        <div id='body'>
            <Menu link={link} />
            <Cover />
            <Introduction />
            {/* <Speaker /> */}
            <Committee />
            <Organizers />
            <Topics />
            <Submission />
            <Timeline />
            <Registration />
            <Footer />
        </div>
    );
}
export default Home;