import './App.css';
import { 
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';

import Home from "./components/Home"
import RestauranstList from "./components/RestauranstList"
import RestaurantCreate from "./components/RestaurantCreate"
import Login from "./components/Login"
import RestaurantSearch from "./components/RestaurantSearch"
import RestaurantUpdate from "./components/RestaurantUpdate"
import Navbar from './components/Navbar'
import Singup from './components/Singup'
import Chart from './components/Chart';
function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar></Navbar>
     
        <Routes>
          <Route path='/home' element={<Home/>}/> 
          <Route path='/list' element={<RestauranstList/>}/>
          <Route path='/create' element={<RestaurantCreate/>}/>
          <Route path='/search' element={<RestaurantSearch/>}/>
          {/* <Route path='/update/:id' render={props=>(<RestaurantUpdate {...props}/>)} />     */}
          <Route path='/update/:id' element={<RestaurantUpdate />}/>
          <Route path='/login' element={<Login/>}/>  
          <Route path='/signup' element={<Singup/>}/>  
          {/* <Route path='/chart' element={<Chart/>}/>   */}
        </Routes>
      </Router>      
    </div>
  );
}
export default App;
