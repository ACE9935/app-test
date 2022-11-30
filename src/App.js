
import { useEffect } from 'react';
import AboutUs from './components/AboutUs';
import Carousel from './components/Carousel';
import Header from './components/Header';
import Welcome from './components/Welcome';
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import FindUs from './components/FindUs';

function App() {

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo('.animate-to-view',{opacity:0,y:130},{opacity:1,y:0,duration:0.7,
      scrollTrigger:{
        trigger: '.animate-to-view',
      }})
  },[])

  return (
    <div className="App">
    <Header/>  
    <Welcome/>
    <Carousel/>
    <AboutUs/>
    <FindUs/>
    </div>
  );
}

export default App;
