import './App.css';
import { Routes, Route } from 'react-router-dom'

import { Home } from './Pages/Home/Home.jsx'
import { Go } from './Go/Go'
import { IType } from './iType/IType'
import { Spectra } from './Spectra/Spectra'
import { SixHundred } from './Polaroid/SixHundred/SixHundred.jsx'
import { InstantFilm } from './Pages/InstantFilm/InstantFilm.jsx'
import { Sx } from './Sx70/Sx'
import { News } from './Pages/News/News.jsx'
import { BadURL } from './Error/BadURL.jsx'
import { UnderConstruction } from './Error/UnderConstruction.jsx'
import { Development } from './Pages/Development/Development.jsx'
import { Socials } from './Pages/Socials'
import { About } from './Pages/About/About'
import PolaroidCameraEject from './PolaroidCameraEject'

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
import { MintFrame } from './Pages/Film/600/MintFrame'

//i-Type Film
import { Peanuts } from './Pages/Film/i-Type/Peanuts'
import { BnwItype } from './Pages/Film/i-Type/BnwItype'
import { BnwBlackFrameItype } from './Pages/Film/i-Type/BnwBlackFrameItype'
import { Camo } from './Pages/Film/i-Type/Camo'
import { ColorFrameItype } from './Pages/Film/i-Type/ColorFrameItype'
import { ColorItype } from './Pages/Film/i-Type/ColorItype'
import { ColorWave } from './Pages/Film/i-Type/ColorWave'
import { DavidBowie } from './Pages/Film/i-Type/DavidBowie'
import { Daydream } from './Pages/Film/i-Type/Daydream'
import { GoldenMoments } from './Pages/Film/i-Type/GoldenMoments'
import { GradientFrame } from './Pages/Film/i-Type/GradientFrame'
import { KeithHaring } from './Pages/Film/i-Type/KeithHaring'
import { MetallicNights } from './Pages/Film/i-Type/MetallicNights'
import { MetallicSpectrum } from './Pages/Film/i-Type/MetallicSpectrum'
import { NoteThis } from './Pages/Film/i-Type/NoteThis'
import { Palace } from './Pages/Film/i-Type/Palace'
import { Retinex } from './Pages/Film/i-Type/Retinex'
import { RoseGold } from './Pages/Film/i-Type/RoseGold'
import { Spectrum } from './Pages/Film/i-Type/Spectrum'
import { StrangerThings } from './Pages/Film/i-Type/StrangerThings'
import { SummerBlues } from './Pages/Film/i-Type/SummerBlues'
import { Summer } from './Pages/Film/i-Type/Summer'
import { TheMandalorian } from './Pages/Film/i-Type/TheMandalorian'
import { BlackFrameItype } from './Pages/Film/i-Type/BlackFrameItype'
import { Pantone } from './Pages/Film/i-Type/Pantone.jsx'

//Go Film
import { ColorGo } from './Pages/Film/Go/ColorGo'
import { BlackFrameGo } from './Pages/Film/Go/BlackFrameGo'

//Spectra Film
import { BnwSpectra } from './Pages/Film/Spectra/BnwSpectra.jsx'
import { ColorSpectra } from './Pages/Film/Spectra/ColorSpectra.jsx'
import { BlackFrameSpectra } from './Pages/Film/Spectra/BlackFrameSpectra.jsx'
import { Grid } from './Pages/Film/Spectra/Grid.jsx'

//Sx70 Film
import { BnwSx70 } from './Pages/Film/SX70/BnwSx70.jsx'
import { BlackFrameSx70 } from './Pages/Film/SX70/BlackFrameSx70.jsx'
import { RoundBlackFrameSx70 } from './Pages/Film/SX70/RoundBlackFrameSx70.jsx'
import { GoldFrameSx70 } from './Pages/Film/SX70/GoldFrameSx70.jsx'
import { RoundGoldFrameSx70 } from './Pages/Film/SX70/RoundGoldFrameSx70.jsx';
import { ColorFramesSx70 } from './Pages/Film/SX70/ColorFramesSx70.jsx'
import { ColorSx70 } from './Pages/Film/SX70/ColorSx70.jsx'
import { HardColorSx70 } from './Pages/Film/SX70/HardColorSx70.jsx'
import { LuluGuinness } from './Pages/Film/SX70/LuluGuinness.jsx'
import { SilverFrameSx70 } from './Pages/Film/SX70/SilverFrameSx70.jsx'
import { TimeZero } from './Pages/Film/SX70/TimeZero.jsx'
import { SaintLaurent } from './Pages/Film/SX70/SaintLaurent.jsx'
import { RoundColorFramesSx70 } from './Pages/Film/SX70/RoundColorFramesSx70.jsx'
import { SkinsSx70 } from './Pages/Film/SX70/SkinsSx70.jsx'
import { BnwBlackFramesSx70 } from './Pages/Film/SX70/BnwBlackFramesSx70.jsx'

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
      <Route path='/socials' element={<Socials />} />
      <Route path='/eject' element={<PolaroidCameraEject />} />

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
      <Route path='/mintframe' element={<MintFrame />} />
      
      {/* i-Type Film Pages */}
      <Route path='/peanuts' element={<Peanuts />} />
      <Route path='/bnwitype' element={<BnwItype />} />
      <Route path='/bnwblackframeitype' element={<BnwBlackFrameItype />} />
      <Route path='/blackframeitype' element={<BlackFrameItype />} />
      <Route path='/camo' element={<Camo />} />
      <Route path='/colorframesitype' element={<ColorFrameItype />} />
      <Route path='/coloritype' element={<ColorItype />} />
      <Route path='/colorwave' element={<ColorWave />} />
      <Route path='/davidbowie' element={<DavidBowie />} />
      <Route path='/daydream' element={<Daydream />} />
      <Route path='/goldenmoments' element={<GoldenMoments />} />
      <Route path='/gradientframe' element={<GradientFrame />} />
      <Route path='/keithharing' element={<KeithHaring />} />
      <Route path='/metallicnights' element={<MetallicNights />} />
      <Route path='/metallicspectrum' element={<MetallicSpectrum />} />
      <Route path='/notethis' element={<NoteThis />} />
      <Route path='/palace' element={<Palace />} />
      <Route path='/retinex' element={<Retinex />} />
      <Route path='/rosegold' element={<RoseGold />} />
      <Route path='/spectrum' element={<Spectrum />} />
      <Route path='/strangerthings' element={<StrangerThings />} />
      <Route path='/summerblues' element={<SummerBlues />} />
      <Route path='/summer' element={<Summer />} />
      <Route path='/themandalorian' element={<TheMandalorian />} />
      <Route path='/pantone' element={<Pantone />} />

      {/* Go Film Pages */}
      <Route path='/colorgo' element={<ColorGo />} />
      <Route path='/blackframego' element={<BlackFrameGo />} />

      {/* Spectra Film Pages */}
      <Route path='/bnwspectra' element={<BnwSpectra />} />
      <Route path='/colorspectra' element={<ColorSpectra />} />
      <Route path='/grid' element={<Grid />} />
      <Route path='/blackframespectra' element={<BlackFrameSpectra />} />

      {/* SX-70 Film Pages */}
      <Route path='/bnwsx70' element={<BnwSx70 />} />
      <Route path='/colorsx70' element={<ColorSx70 />} />
      <Route path='/bnwblackframesx70' element={<BnwBlackFramesSx70 />} />
      <Route path='/bnwhardcolorsx70' element={<UnderConstruction />} />
      <Route path='/roundblackframesx70' element={<RoundBlackFrameSx70 />} />
      <Route path='/goldframesx70' element={<GoldFrameSx70 />} />
      <Route path='/roundgoldframesx70' element={<RoundGoldFrameSx70 />} />
      <Route path='/roundframesx70' element={<RoundColorFramesSx70 />} />
      <Route path='/silverframesx70' element={<SilverFrameSx70 />} />
      <Route path='/timezero' element={<TimeZero />} />
      <Route path='/saintlaurent' element={<SaintLaurent />} />
      <Route path='/colorframesx70' element={<ColorFramesSx70 />} />
      <Route path='/skinssx70' element={<SkinsSx70 />} />
      <Route path='/bnwhardcolorsx70' element={<ColorFramesSx70 />} />
      <Route path='/luluguinness' element={<LuluGuinness />} />
      <Route path='/blackframesx70' element={<BlackFrameSx70 />} />
      <Route path='/hardcolorsx70' element={<HardColorSx70 />} />
    </Routes>
  );
}
