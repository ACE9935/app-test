import { motion } from "framer-motion";

const list = {
    visible: {
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.2,
          }
    },
    hidden: {},
  }
  
  const item1 = {
    visible: { opacity: 1,x:0, y: 0,transition:{
        duration:0.8
    } },
    hidden: { opacity: 0,x:-20, y: -100 },
  }

  const item2 = {
    visible: { opacity: 1,x:0, y: 0,transition:{
        duration:0.8
    } },
    hidden: { opacity: 0,x:-40, y: -100 },
  }

function Welcome() {
    return ( 
        <section className="relative bg-main-black pt-[8rem] flex justify-center">
            <div className="w-full max-w-[110rem]">
            <motion.div 
            initial="hidden"
            animate="visible"
            variants={list}
            className="relative w-[94%] h-fit m-3 px-4 pt-4 sm:pt-7 pb-20">
            <motion.img
            variants={item1}
            alt="Cups of coffe" src="s2.png" className="object-cover w-[clamp(12rem,50%,17rem)] shadow-xl aspect-[1/1.3]"/>
            <motion.img
            variants={item2}
            alt="Hideaway coffee" src="s1.png" className="object-cover w-[clamp(12rem,50%,17rem)] shadow-xl aspect-[1/1.3] mt-[clamp(-110px,-20%,-12rem)]  sm:mt-[clamp(-230px,-20%,-12rem)] ml-[clamp(120px,20%,19rem)]"/>
            </motion.div>
            <article className="z-10 text-center absolute m-auto inset-0 w-fit h-fit">
                <h1 className="relative !font-bold text-[calc(24px+5vw)] xl:text-8xl p-2 after:content-[''] after:z-[-1] after:absolute after:w-full after:bottom-0 after:left-0 after:h-1/2 after:bg-light-brown">Hideaway Coffee</h1>
                <h3 className="text-main-brown text-3xl !font-bold mt-6">Cafe in London</h3>
            </article>
            <style jsx='true'>{ `
                section{
                    background-image: radial-gradient(circle at 0 20%,#b45309 30%, transparent 30.06%), radial-gradient(circle at 100% 0 ,#b45309 10%, transparent 10.06%);
                }
                `
            }</style>
            </div>
        </section>
     );
}

export default Welcome;