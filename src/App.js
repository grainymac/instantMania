import './App.css';
import { Routes, Route } from 'react-router-dom'

import { Home } from './Pages/Home'
import { Go } from './Go/Go'
import { IType } from './iType/IType'
import { Spectra } from './Spectra/Spectra'
import { Polaroid } from './Pages/Polaroid'
import { InstantFilm } from './Pages/InstantFilm'
import { Sx } from './Sx70/Sx'
import { News } from './Pages/News'
import { BadURL } from './Error/BadURL.jsx'
import { UnderConstruction } from './Error/UnderConstruction.jsx'
import { Development } from './Pages/Development'

export const App = () => {
  return (
    <Routes>
      <Route path='/' index element={<Home />} />
      <Route path='/polaroid' element={<Polaroid />} />
      <Route path='/itype' element={<IType />} />
      <Route path='/go' element={<Go />} />
      <Route path='/sx' element={<Sx />} />
      <Route path='/spectra' element={<Spectra />} />
      <Route path='/instant' element={<InstantFilm />} />
      <Route path='/news' element={<News /> } />
      <Route path='/*' element={<BadURL />} />
      <Route path='/galleries' element={<UnderConstruction />} />
      <Route path='/polaroidgallery' element={<UnderConstruction />} />
      <Route path='/itypegallery' element={<UnderConstruction />} />
      <Route path='/gogallery' element={<UnderConstruction />} />
      <Route path='/sx70gallery' element={<UnderConstruction />} />
      <Route path='/about' element={<UnderConstruction />} />
      <Route path='/development' element={<Development />} />
      <Route path='/support' element={<UnderConstruction />} />
      <Route path='/socials' element={<UnderConstruction />} />
    </Routes>
  );
}
