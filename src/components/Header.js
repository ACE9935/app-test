import styled from "@emotion/styled";

const links=[
    {title:'ABOUT US',
     url:'#AboutUs'
},
{title:'FIND US',
     url:'#FindUs'
}
]

function Header() {

    const StyledLink = styled.li`
    padding:10px 0px 10px 0px;
    position:relative;
    color:black;
    :after{
        content:'';
        z-index:2;
        display:block;
        position:absolute;
        width:0%;
        height:100%;
        background:black;
        top:0;
        left:0;
        z-index:-1;
        transition:width 0.3s,color 0.2s;
    }
    :hover{
        color:white;
        transition:color 0.2s;
    }
    :hover:after{
     width:100%;
     transition:width 0.3s;
    }
    `

    return ( 
        <header className="absolute grid place-items-center w-full z-10"
        >
            <nav className="max-w-[110rem] w-full px-5 py-5 sm:px-12 flex justify-between items-center">
            <a href="/"><img src="hlogo.jpg" className="w-[5.8rem] sm:w-[8rem] cursor-pointer pointer-events-none" alt='Hideaway Coffee'/></a>
            <ul className="flex space-x-5 sm:space-x-10">
                {links.map(
                  (o,i)=><StyledLink key={i} className="!font-[600]"><a href={o.url} className="py-[10px] px-[5px]">{o.title}</a></StyledLink>
                )}
            </ul>
            </nav> 
            
        </header>
     );
}

export default Header;