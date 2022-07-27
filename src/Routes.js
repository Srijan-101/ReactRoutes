import {Route,Routes} from 'react-router-dom'
import {Contact,About,Service} from './Components/Subcomponent/Index'
import  DoctorCard from './Components/Doctor/DoctorCard'
import DoctorInfo from './Components/Reusable/DoctorInfo'

const NavBarRoutes = () => {
    return (
        <Routes>
             <Route path="/"  element={<DoctorCard/>}/>
             <Route path="/doctorInfo/:name" element={<DoctorInfo/>}/>
             <Route path="/Contact" element={<Contact/>}/>
             <Route path="/About" element={<About/>}/>
             <Route path="/Service" element={<Service/>}/>
        </Routes>
    )
}

export default NavBarRoutes;