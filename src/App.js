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

// 600 film
import { Barbie } from './Pages/Film/600/Barbie'
import { BlackBlue } from './Pages/Film/600/BlackBlue'
import { BlackGreen } from './Pages/Film/600/BlackGreen'
import { BlackOrange} from './Pages/Film/600/BlackOrange'
import { BlackPink } from './Pages/Film/600/BlackPink'
import { BlackRed } from './Pages/Film/600/BlackRed'
import { BlackYellow } from './Pages/Film/600/BlackYellow'
import { Bnw600 } from './Pages/Film/600/Bnw600'
import { BnwColorFrames600 } from './Pages/Film/600/BnwColorFrames600'
import { Color600 } from './Pages/Film/600/Color600'
import { ColorFrames600 } from './Pages/Film/600/ColorFrames600'
import { CyanMono } from './Pages/Film/600/CyanMono'
import { DeepSeaDive } from './Pages/Film/600/DeepSeaDive'
import { EleyKishimoto } from './Pages/Film/600/EleyKishimoto'
import { FestiveRed } from './Pages/Film/600/FestiveRed'
import { GoldDust } from './Pages/Film/600/GoldDust'
import { GoldFrame600 } from './Pages/Film/600/GoldFrame600'
import { HardColor600 } from './Pages/Film/600/HardColor600'
import { HotPink } from './Pages/Film/600/HotPink'
import { IceCream } from './Pages/Film/600/IceCream'
import { LegoLand } from './Pages/Film/600/LegoLand'
import { Lucky8 } from './Pages/Film/600/Lucky8'
import { MagentaMono } from './Pages/Film/600/MagentaMono'
import { Memphis } from './Pages/Film/600/Memphis'
import { MetallicRedFrame } from './Pages/Film/600/MetallicRedFrame'
import { Mickey } from './Pages/Film/600/Mickey'
import { PoisonedParadise } from './Pages/Film/600/PoisonedParadise'
import { Rainbow } from './Pages/Film/600/Rainbow'
import { ReclaimedBlue } from './Pages/Film/600/ReclaimedBlue'
import { RoundBlackFrame600 } from './Pages/Film/600/RoundBlackFrame600'
import { RoundFrame600 } from './Pages/Film/600/RoundFrame600'
import { RoundGoldFrame600 } from './Pages/Film/600/RoundGoldFrame600'
import { SilverFrame } from './Pages/Film/600/SilverFrame'
import { Skateistan } from './Pages/Film/600/Skateistan'
import { Skins600 } from './Pages/Film/600/Skins600'
import { SummerFruits } from './Pages/Film/600/SummerFruits'
import { SummerHaze } from './Pages/Film/600/SummerHaze'
import { ThirdManRecords } from './Pages/Film/600/ThirdManRecords'
import { Tropics } from './Pages/Film/600/Tropics'

//i-Type Film
import { Peanuts } from './Pages/Film/i-Type/Peanuts'

//Go Film
import { ColorGo } from './Pages/Film/Go/ColorGo'
import { BlackFrameGo } from './Pages/Film/Go/BlackFrameGo'

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

      {/* 600 Film Pages */}
      <Route path='/bnw600' element={<Bnw600 />} />
      <Route path='/bnwcolorframes600' element={<BnwColorFrames600 />} />
      <Route path='/eleykishimoto' element={<EleyKishimoto />} />
      <Route path='/barbie' element={<Barbie />} />
      <Route path='/blackblue' element={<BlackBlue />} />
      <Route path='/blackgreen' element={<BlackGreen />} />
      <Route path='/blackorange' element={<BlackOrange />} />
      <Route path='/blackpink' element={<BlackPink />} />
      <Route path='/blackred' element={<BlackRed />} />
      <Route path='/blackyellow' element={<BlackYellow />} />
      <Route path='/color600' element={<Color600 />} />
      <Route path='/colorframes600' element={<ColorFrames600 />} />
      <Route path='/cyanmono' element={<CyanMono />} />
      <Route path='/deepseadive' element={<DeepSeaDive />} />
      <Route path='/festivered' element={<FestiveRed />} />
      <Route path='/golddust' element={<GoldDust />} />
      <Route path='/goldframe600' element={<GoldFrame600 />} />
      <Route path='/hardcolor600' element={<HardColor600 />} />
      <Route path='/hotpink' element={<HotPink />} />
      <Route path='/icecream' element={<IceCream />} />
      <Route path='/lego' element={<LegoLand />} />
      <Route path='/lucky8' element={<Lucky8 />} />
      <Route path='/magentamono' element={<MagentaMono />} />
      <Route path='/memphis' element={<Memphis />} />
      <Route path='/metallicredframe' element={<MetallicRedFrame />} />
      <Route path='/mickey' element={<Mickey />} />
      <Route path='/poisonedparadise' element={<PoisonedParadise />} />
      <Route path='/rainbow' element={<Rainbow />} />
      <Route path='/reclaimedblue' element={<ReclaimedBlue />} />
      <Route path='/roundblackframe600' element={<RoundBlackFrame600 />} />
      <Route path='/roundframe600' element={<RoundFrame600 />} />
      <Route path='/roundgoldframe600' element={<RoundGoldFrame600 />} />
      <Route path='/silverframe600' element={<SilverFrame />} />
      <Route path='/skateistan' element={<Skateistan />} />
      <Route path='/skins600' element={<Skins600 />} />
      <Route path='/summerfruits' element={<SummerFruits />} />
      <Route path='/summerhaze' element={<SummerHaze />} />
      <Route path='/thirdmanrecords' element={<ThirdManRecords />} />
      <Route path='/tropics' element={<Tropics />} />
      
      {/* i-Type Film Pages */}
      <Route path='/peanuts' element={<Peanuts />} />

      {/* Go Film Pages */}
      <Route path='/colorgo' element={<ColorGo />} />
      <Route path='/blackframego' element={<BlackFrameGo />} />
    </Routes>
  );
}
