import './App.css';
import LandingPage from './Pages/LandingPage';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Page1 from "./Pages/Services/page1"
import Page2 from "./Pages/Services/page2"
import Page3 from "./Pages/Services/page3"
import Page4 from "./Pages/Services/page4"
import Page5 from "./Pages/Services/page5"
import Page6 from "./Pages/Services/page6"
import Page7 from "./Pages/Services/page7"
import Page8 from "./Pages/Services/page8"
import Page9 from "./Pages/Services/page9"
import Page10 from "./Pages/Services/page10"
import Page11 from "./Pages/Services/page11"
import Page12 from "./Pages/Services/page12"

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<LandingPage/>}/>


    <Route path='/service1' element={<Page1/>} />
    <Route path='/service2' element={<Page2/>} />
    <Route path='/service3' element={<Page3/>} />
    <Route path='/service4' element={<Page4/>} />
    <Route path='/service5' element={<Page5/>} />
    <Route path='/service6' element={<Page6/>} />
    <Route path='/service7' element={<Page7/>} />
    <Route path='/service8' element={<Page8/>} />
    <Route path='/service9' element={<Page9/>} />
    <Route path='/service10' element={<Page10/>} />
    <Route path='/service11' element={<Page11/>} />
    <Route path='/service12' element={<Page12/>} />
    

   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
