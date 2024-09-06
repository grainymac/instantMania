import './App.css';
import { Routes, Route } from 'react-router-dom'

import { Home } from './Pages/Home/Home.jsx'
import { GoFilm } from './Polaroid/Go/GoFilm.jsx'
import { ITypeFilm } from './Polaroid/iType/ITypeFilm.jsx'
import { SpectraFilm } from './Polaroid/Spectra/SpectraFilm.jsx'
import { PolaroidFilm } from './Polaroid/SixHundred/PolaroidFilm.jsx'
import { InstantFilm } from './Pages/InstantFilm/InstantFilm.jsx'
import { SxFilm } from './Polaroid/Sx70/SxFilm'
import { News } from './Pages/News/News.jsx'
import { BadURL } from './Error/BadURL.jsx'
import { UnderConstruction } from './Error/UnderConstruction.jsx'
import { Development } from './Pages/Development/Development.jsx'
import { About } from './Pages/About/About'

export const App = () => {
  return (
    <Routes>
      <Route path='/' index element={<Home />} />
      <Route path='/600film' element={<PolaroidFilm />} />
      <Route path='/itypefilm' element={<ITypeFilm/>} />
      <Route path='/gofilm' element={<GoFilm />} />
      <Route path='/sxfilm' element={<SxFilm />} />
      <Route path='/spectrafilm' element={<SpectraFilm />} />
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
