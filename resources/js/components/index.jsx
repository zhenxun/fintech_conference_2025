import { MantineProvider } from '@mantine/core';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Agenda from './Agenda/Agenda';
import Home from './Home/Home';
import UserRegister from './PaperSubmission/Register';
import UploadThesis from './PaperSubmission/UploadThesis';
import User from './PaperSubmission/User';
import UserLogin from './PaperSubmission/UserLogin';
import UserThesis from './PaperSubmission/UserThesis';
import Joined from './Register/Joined';
import Register from './Register/Register';

// import Register from './Register/Register';

function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' index element={<Home />} />
                <Route path='/submission' element={<UserThesis />} />
                <Route path='/profile' element={<User />} />
                <Route path='/thesis.upload' element={<UploadThesis />} />
                <Route path='/thesis' element={<UserThesis />} />
                <Route path='/login' element={<UserLogin />} />
                <Route path='/register' element={<UserRegister />} />
                <Route path='/member.register' element={<Register />} />
                <Route path='/member.join' element={<Joined />} />
                {/* <Route path='/agenda' element={<Agenda />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

if (document.getElementById('index')) {
    ReactDOM.createRoot(document.getElementById("index")).render(<MantineProvider><Index /></MantineProvider>)
}