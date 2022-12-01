import { Typography } from "@mui/material";
import { motion } from "framer-motion";

const list = {
    visible: {
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
          }
    },
    hidden: {},
  }
  
  const item1 = {
    visible: { opacity: 1,x:0, y: 0,transition:{
        duration:1
    } },
    hidden: { opacity: 0,x:-20, y: -100 },
  }

  const item2 = {
    visible: { opacity: 1,x:0, y: 0,transition:{
        duration:1
    } },
    hidden: { opacity: 0,x:-40, y: -100 },
  }

function Welcome() {
    return ( 
        <section className="linear-gradient-bg relative bg-main-black pt-[8rem] flex justify-center">
            <div className="w-full max-w-[100rem] px-[1rem] sm:px-[3rem] pt-40 sm:pt-24 sm:pb-24">
            <motion.div 
            initial="hidden"
            animate="visible"
            variants={list}
            className="relative w-fit h-fit overflow-hidden">
            <motion.img
            variants={item1}
            alt="Cups of coffe" src="s1.png" className="object-cover border-[0.26em] border-main-black z-[2] relative w-[clamp(16rem,50vw,24rem)] shadow-xl aspect-[1/1.3]"/>
            <motion.img
            variants={item2}
            alt="Hideaway coffee" src="s2.png" className="object-cover border-[0.26em] border-main-black w-[clamp(13rem,50%,19rem)] shadow-xl aspect-[1/1.3] mt-[clamp(-110px,-20%,-12rem)]  sm:mt-[clamp(-230px,-20%,-12rem)] ml-[clamp(120px,36%,22rem)]"/>
            </motion.div>
            <article className="fade-to-view z-10 text-center pb-[200px] absolute m-auto inset-0 w-fit h-fit grid place-items-center">
                <Typography className="heading-s1 !leading-[1.1] relative !font-bold !text-[calc(3.9rem+0.6vw)] md:!text-[7rem] lg:pb-6 p-2 text-black">HIDEAWAY COFFEE</Typography>
                <h3 className="text-white bg-black p-2 text-3xl lg:text-5xl !font-[500] mt-6">Cafe in London</h3>
            </article>
            <style jsx='true'>{ `
      .linear-gradient-bg{
          background-image: radial-gradient(circle at 0 20%,#64748b 30%, transparent 30.06%), radial-gradient(circle at 100% 23% ,#64748b 10%, transparent 10.06%),linear-gradient(190deg,#cbd5e1 0%, #f1f5f9 80%);
      }
      `
  }</style>
            </div>
        </section>
     );
}

export default Welcome;