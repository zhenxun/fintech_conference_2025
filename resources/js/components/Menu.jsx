
function Menu({link}) {
    
    return (
        <nav className="navbar navbar-expand-lg fixed-top"  data-bs-theme="dark"  style={{backgroundColor:'rgba(0,0,0,0.8)'}} >
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img style={{maxHeight:'80px'}} className="img-fluid" src="/assets/logo/fintech.png" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="justify-content-end navbar-collapse collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
                        {link.map((item,i)=>(
                            <li key={i} className="nav-item px-3">
                                <a className="nav-link" aria-current="page" href={item.href}><div dangerouslySetInnerHTML={{__html:item.name}} /></a>
                            </li>
                        ))}
                        <li class="nav-item">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Other
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li><a class="dropdown-item" href="https://annual-event.hub-fintech-ncku.tw">Annual Event 2025</a></li>
                                <li><a class="dropdown-item" href='https://forum.hub-fintech-ncku.tw'>Forum 2025</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Menu;