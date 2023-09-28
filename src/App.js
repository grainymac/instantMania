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
      {/* <Route path='/*' element={<BadURL />} /> */}
    </Routes>
  );
}
