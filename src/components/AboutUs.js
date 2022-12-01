import SectionTitle from './SectionTitle'
function AboutUs() {
    return ( 
        <section id='AboutUs' className="bg-main-gray pt-12 pb-[4.3rem] px-8 flex justify-around items-center flex-wrap">
        <article className='animate-to-view relative flex flex-col space-y-12'>
        <SectionTitle centered={false}>About Us</SectionTitle>
        <p className="leading-[1.7] text-xl w-full max-w-[40rem] pr-6 pb-12"> 
        The best service, satisfied customers, delicious coffee from the most exotic countries and a wide range of drinks and desserts - that's all about us! Come to Hideaway Coffee and see for yourself. We are waiting for your coming!
        </p>
        </article>
        <img className='border-[0.3em] border-black' src='logo.jpg'/>
        </section>
     );
}

export default AboutUs;