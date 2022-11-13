import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import SignIn from './Component/SignIn';
import Feature from "./Component/Feature"
import Box4 from './Component/Box4';
import Box5 from './Component/Box5';
import Box6 from "./Component/Box6";
import Box7 from "./Component/Box7";
import Box8 from "./Component/Box8";
import Box9 from "./Component/Box9"
// import Box10 from "./Component/Box10"
import Footer from './Component/Footer';
import { Route, Router} from "react-router-dom"
import { Switch } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
     
     <Navbar/>
   <Feature/>
     <Box4/>
     <Box5/>
     <Box6/>
     <Box7/>
     <Box8/>
     <Box9/>
     {/* <Box10/> */}

     <Footer/>
  
     
    </div>
  );
}

export default App;



