import React from 'react';
import { Route, Routes} from 'react-router';
import { LoginP } from './Pages/Login/LoginP';
import { MainP } from './Pages/MainPage/MainP';
import  DerLacFer  from './Pages/DerLacFer/DerLacFer';
import PPP from './Pages/PP/PPP';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginP />} />
      <Route path="/mainpage" element={<MainP/>}/>
      <Route path="/derlacfer" element={<DerLacFer/>}/>
      <Route path="/pp" element={<PPP/>}/>
    </Routes>
  );
}

export default App;
