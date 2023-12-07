import React, { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/services/Services';
import WhyQumra from './components/WhyQumra/WhyQumra';
import Statistics from './components/Statistics/Statistics';
import WhoQumra from './components/WhoQumra/WhoQumra';
import Footer  from './components/Footer/Footer' 
import WhatsApp from './components/WhatsApp/WhatsApp';

function App() {
   useEffect(() => {
      AOS.init();
    }, []);
       return(
          <>
          <Header/>
          <Home/>
         <Services/>
         <WhyQumra/>
         <Statistics/>
         <WhoQumra/>
         <Footer/>
         <WhatsApp/>
          </>
       )
}

export default App;
