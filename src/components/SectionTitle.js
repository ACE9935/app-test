
function SectionTitle({children,centered}) {
    return ( 
        <h2 className={`w-fit after:m-auto after:left-0 ${centered? 'after:right-0':''} relative text-5xl after:content[''] after:bg-red-300 after:h-[2px] after:w-[60%] after:absolute after:bottom-0 pb-5`}>{children}</h2>
     );
}

export default SectionTitle;