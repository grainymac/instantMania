import './App.css';

import { JokeBar } from './Components/JokeBar'
import { NavBar } from './Components/NavBar'
import { Hero } from './Components/Hero'
import { Home } from './Pages/Home'

export const App = () => {
  return (
    <>
    <JokeBar />
    <NavBar />
    <Hero />
    <Home />
    </>
  );
}
