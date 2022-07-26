import {Route,Routes} from 'react-router-dom'
import {Home,Contact,About,Service} from './Components/Subcomponent/Index'

const NavBarRoutes = () => {
    return (
        <Routes>
             <Route path="/"  element={<Home/>}/>
             <Route path="/Contact" element={<Contact/>}/>
             <Route path="/About" element={<About/>}/>
             <Route path="/Service" element={<Service/>}/>
        </Routes>
    )
}

export default NavBarRoutes;