import './App.css'
import Navbar from './Components/Navbar';
import NavBarRoutes from './Routes';

import { BrowserRouter as Router} from 'react-router-dom';


const App = () => {
   

   return (
      <>
         <Router>
            <Navbar />
            <NavBarRoutes />
         </Router>
      </>
   )
}

export default App;