import './App.css';
import { Routes, Route } from 'react-router-dom'

import { Home } from './Pages/Home'
import { Go } from './Go/Go'
import { IType } from './iType/IType'
import { Spectra } from './Spectra/Spectra'
import { Polaroid } from './Pages/Polaroid'
import { InstantFilm } from './Pages/InstantFilm/InstantFilm.jsx'
import { Sx } from './Sx70/Sx'
import { News } from './Pages/News'
import { BadURL } from './Error/BadURL.jsx'
import { UnderConstruction } from './Error/UnderConstruction.jsx'
import { Development } from './Pages/Development'
import { DetailsPage } from './Pages/DetailsPage/DetailsPage'
import { EleyKishimoto } from './Pages/Film/EleyKishimoto'
import { Color600 } from './Pages/Film/Color600'
import { Peanuts } from './Pages/Film/Peanuts'
import { Bnw600 } from './Pages/Film/Bnw600'
import { Skateistan } from './Pages/Film/Skateistan'
import { ReclaimedBlue } from './Pages/Film/ReclaimedBlue'

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
      <Route path='/bnw600' element={<Bnw600 />} />
      <Route path='/eleyKishimoto' element={<EleyKishimoto />} />
      <Route path='/color600' element={<Color600 />} />
      <Route path='/peanuts' element={<Peanuts />} />
      <Route path='/skateistan' element={<Skateistan />} />
      <Route path='/reclaimedBlue' element={<ReclaimedBlue />} />
      {/* <Route path='/details/:id' element={<DetailsPage />} /> */}
    </Routes>
  );
}
