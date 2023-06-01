
import React, { createContext } from 'react';
import Navigation from './NavigationS/Navigation';
import Splash from './pages/Splash';
import Slider1 from './pages/Slider1';
import { View } from "react-native"
import { showslidercontext } from './pages/createContext';
export default function App() {
  const [Showsplash, setShowsplash] = React.useState(true);
  setTimeout(() => {
    setShowsplash(false)
  }, 100);

  return (
    <>
      {
        Showsplash ?
          <Splash></Splash>
          :

          <>
           
                <Navigation />
          
          </>
      }
    </>

  )
}

