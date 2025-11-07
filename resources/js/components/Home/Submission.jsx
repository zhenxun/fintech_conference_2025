import { Button } from "@mantine/core";

function Submission() {
    const list = [
        'Submissions will be handled through the submission page on <a href="/login">2025 Annual Conference of Center for Innovative FinTech Business Models, NCKU</a>.',
        'Submitted as <span class="text-danger">two PDF files</span>, which are the front-page (including the title, authors’ names, affiliations, abstract and keywords) and the manuscript.',
        'The manuscripts will be subjected to a <span class="text-danger">blind review</span> process, so they should not contain authors’ names, affiliations, or any other information that may disclose the identity of the author(s).',
        'The ESGFT’s Technical Program Committee will manage the review process and the length of manuscripts should be in 20 pages.',
    ];

    return (
        <div style={{backgroundColor:'rgba(255,255,255)'}} className='align-items-center' id='paper-submission-and-publication'>
            <div style={{paddingBottom:'100px',paddingTop:'100px'}} className='container'>
                <h1 style={{fontSize:'6vh',fontWeight:'bolder'}} className='text-center'>Paper Submission & Publication</h1>
                <div style={{fontSize:'2.5vh'}} className='mt-5 mx-md-5'>
                    <ul className='pb-3'>
                        {list.map((item,i)=>(
                            <li key={i}><div dangerouslySetInnerHTML={{__html:item}} /></li>
                        ))}
                    </ul>
                    <div className='pb-3' style={{textAlign:"justify"}}>RFESG 2025 features a special publication model for authors to expand their conference works to high quality journal publications and books following the conference. Submitted papers will be carefully evaluated based on originality, importance, technical soundness, presentation, and clarity of exposition. Following the standard process of a double-blind review, the selected papers will have an opportunity to be published in Asia Pacific Management Review, APMR (ESCI). More details can be found on the conference website.</div>
                    <div className='justify-content-center d-flex py-3'>
                        <div style={{width:'25%'}}><img className='img-fluid' src='/assets/logo/APMR_logo_revised.png' /></div>
                    </div>
                    <div className='justify-content-center d-flex mb-3 pt-5'>
                        <Button variant="gradient" style={{minWidth:'230px'}} size="xl" radius="xl" onClick={()=>window.location.href='/login'}>Submit your Paper</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Submission;