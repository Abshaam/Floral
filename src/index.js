import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/home'
import About from './components/about'
import IndexPage from './components/index';
import Notfound from './components/notFound'
import PerennialFlowers from './components/perennialflowers';
import AnnualFlowers from './components/annualFlowers';
import FloweringTrees from './components/floweringTrees';
import Flower from './components/flower';
import AllFlowers from './components/allFlowers'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter> 
   <React.StrictMode>
     <Routes>
       <Route path = '/' element={<App/>}>
       <Route
           index
           element={<IndexPage/>}
           />
         <Route path = '/home' element = {<Home/>}/>
         <Route path = '/about' element = {<About/>}/>
         <Route path = '/perennialflowers' element = {<PerennialFlowers/>}/>
         <Route path = '/floweringTrees' element = {<FloweringTrees/>}/>
         <Route path = '/annualflowers' element = {<AnnualFlowers/>}/>
         <Route path = '/allFlowers' element = {<AllFlowers/>}/>
         <Route path = "/flowers/:flowerId" element={<Flower/>}/>
        </Route>


      <Route path = "*" element = {<Notfound/>}/> 
     </Routes>
   </React.StrictMode> 
   </BrowserRouter>,
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();