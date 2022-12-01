
import { useEffect } from 'react';
import AboutUs from './components/AboutUs';
import Carousel from './components/Carousel';
import Header from './components/Header';
import Welcome from './components/Welcome';
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import FindUs from './components/FindUs';
import Infos from './components/Infos';

function App() {

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    document.querySelectorAll('.animate-to-view').forEach(i=>
      gsap.fromTo(i,{opacity:0,y:130},{opacity:1,y:0,duration:0.7,
        scrollTrigger:{
          trigger: i,
        }})
      )
      gsap.fromTo('.fade-to-view',{opacity:0},{opacity:1,duration:1.2,
        scrollTrigger:{
          trigger: '.fade-to-view',
        }})
  },[])

  return (
    <div className="App">
    <Header/>  
    <Welcome/>
    <Carousel/>
    <AboutUs/>
    <FindUs/>
    <Infos/>
    </div>
  );
}

export default App;
