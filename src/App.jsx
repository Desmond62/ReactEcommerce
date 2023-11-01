import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Reg from './Pages/Reg';
import Log from './Pages/Log';
import SubwomansDresses from './Pages/SubwomansDresses';
import Top from './Pages/Top';
import SubwomensShoe from './Pages/SubwomensShoe';
import Submotorcycle from './Pages/Submotorcycle';
import Submenshirt from './Pages/Submenshirt';
import Submenshoes from './Pages/Submenshoes';
import Submenwatches from './Pages/Submenwatches';
import Subwomenwatches from './Pages/Subwomenswatches';
import Subwomanbags from './Pages/Subwomenbags';
import Subwomansjewel from './Pages/Subwomensjewel';
import Subfurniture from './Pages/Subfurniture';
import SingleProducts from './Pages/SingleProducts';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/register' element={<Reg/>}></Route>
        <Route path='/login' element={<Log/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/motorcycle' element={<Submotorcycle/>}></Route>
        <Route path='/womensdress' element={<SubwomansDresses/>}></Route>
        <Route path='/tops' element={<Top/>}></Route>
        <Route path='/womensshoes' element={<SubwomensShoe/>}></Route>
        <Route path='/furniture' element={<Subfurniture/>}></Route>
        <Route path='/menshirts' element={<Submenshirt/>}></Route>
        <Route path='/menshoes' element={<Submenshoes/>}></Route>
        <Route path='/menwatches' element={<Submenwatches/>}></Route>
        <Route path='/womenwatches' element={<Subwomenwatches/>}></Route>
        <Route path='/womensbags' element={<Subwomanbags/>}></Route>
        <Route path='/womensjewel' element={<Subwomansjewel/>}></Route>
        <Route path='/details/:productId' element={<SingleProducts/>}></Route>
      </Routes>
    </div>
  )
}

export default App
