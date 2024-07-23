import './App.css';
import { Routes, Route } from 'react-router-dom'

import { Home } from './Pages/Home/Home.jsx'
import { Go } from './Polaroid/Go/Go'
import { IType } from './Polaroid/iType/IType.jsx'
import { Spectra } from './Polaroid/Spectra/Spectra'
import { SixHundred } from './Polaroid/SixHundred/SixHundred.jsx'
import { InstantFilm } from './Pages/InstantFilm/InstantFilm.jsx'
import { Sx } from './Polaroid/Sx70/Sx'
import { News } from './Pages/News/News.jsx'
import { BadURL } from './Error/BadURL.jsx'
import { UnderConstruction } from './Error/UnderConstruction.jsx'
import { Development } from './Pages/Development/Development.jsx'
import { About } from './Pages/About/About'

export const App = () => {
  return (
    <Routes>
      <Route path='/' index element={<Home />} />
      <Route path='/600' element={<SixHundred />} />
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
      <Route path='/spectragallery' element={<UnderConstruction />} />
      <Route path='/about' element={<About />} />
      <Route path='/development' element={<Development />} />
      <Route path='/support' element={<UnderConstruction />} />
    </Routes>
  );
}
