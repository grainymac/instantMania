import './App.css';
import { Routes, Route } from 'react-router-dom'

import { Home } from './Pages/Home'
import { Go } from './Pages/Home'
import { IType } from './Pages/Home'
import { Spectra } from './Pages/Home'
import { Polaroid } from './Pages/Home'
import { InstantFilm } from './Pages/InstantFilm'
import { Sx } from './Pages/Sx'

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
      <Route path='/*' element={<BadURL />} />
    </Routes>
  );
}
