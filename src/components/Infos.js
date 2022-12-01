import SectionTitle from "./SectionTitle";

function Infos() {
    return ( 
        <section className="overflow-hidden bg-main-black py-12 px-8 flex items-center justify-around flex-wrap">
            <a href='https://www.instagram.com/hideawaycoffee/' className="pb-12"><div className="rounded-xl w-[18rem] sm:w-[25rem] aspect-[1/0.25] link bg-cover bg-white"></div></a>
            <div className="animate-to-view flex flex-col space-y-10">
                <SectionTitle centered>Opening Hours</SectionTitle>
                <div className="w-full flex justify-around">
                <div className="font-bold flex flex-col space-y-3">
                    <p>MONDAY</p>
                    <p>TUESDAY</p>
                    <p>WEDNESDAY</p>
                    <p>THURSDAY</p>
                    <p>FRIDAY</p>
                    <p>SUNDAY</p>
                    <p>SATURDAY</p>
                </div>
                <div className="bg-white w-[3.6px]"></div>
                <div className="!font-bold flex flex-col space-y-3">
                    <p>8 AM – 4 PM</p>
                    <p>8 AM – 4 PM</p>
                    <p>8 AM – 4 PM</p>
                    <p>8 AM – 4 PM</p>
                    <p>8 AM – 4 PM</p>
                    <p>10am–4pm</p>
                    <p>CLOSED</p>
                </div>
            </div>
            </div>
            <style jsx='tue'>{`.link{
                    background-image:url('/link.png');
            }`}</style>
        </section>
     );
}

export default Infos;