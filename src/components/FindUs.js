import { useEffect } from "react";
import SectionTitle from "./SectionTitle";
import google from 'google-maps'

function FindUs() {

    return ( 
        <section id='FindUs' className="fu-gradient py-12 px-6 grid place-items-center">
            
            <SectionTitle centered={true}>Find Us</SectionTitle>
            <div className="relative w-full flex justify-center pt-[4.3rem] pb-[1.7rem]">
            <iframe src=
"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9932.405942255176!2d-0.1437702451581277!3d51.51135410000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876057cc8805b41%3A0x60c897012e57e344!2sHideaway%20Coffee!5e0!3m2!1sfr!2sfr!4v1669886520434!5m2!1sfr!2sfr"
                    className="max-w-[60rem] w-full aspect-[1/1] sm:aspect-[1/0.5]"
                    frameBorder="0"
                    allowFullScreen=""
                    tabIndex="0">
            </iframe>
            </div>
            <p className="text-slate-1200 text-center leading-[1.6]">7 Farrier's Psge, London W1D 7DP, Royaume-Uni</p>
            <style jsx='true'>{`
             .fu-gradient{
                background:linear-gradient(180deg,#374151 50%,#171717 50%)
             }
            `}</style>
        </section>
     );
}

export default FindUs;