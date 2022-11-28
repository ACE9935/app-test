import styled from "@emotion/styled";

const links=[
    {title:'ABOUT US',
     url:'#'
},
{title:'CONTACT US',
     url:'#'
}
]

function Header() {

    const StyledLink = styled.li`
    padding:10px 0px 10px 0px;
    position:relative;
    color:white;
    :after{
        content:'';
        z-index:2;
        display:block;
        position:absolute;
        width:0%;
        height:100%;
        background:#c78e62;
        top:0;
        left:0;
        z-index:-1;
        transition:width 0.3s,color 0.2s;
    }
    :hover{
        color:black;
        transition:color 0.2s;
    }
    :hover:after{
     width:100%;
     transition:width 0.3s;
    }
    `

    return ( 
        <header className="absolute grid place-items-center w-full z-10">
            <nav className="max-w-[110rem] w-full px-5 py-5 sm:px-12 flex justify-between items-center">
            <img src="hlogo.jpg" className="w-[5.6rem]  sm:w-[8rem]" alt='Hideaway Coffee'/>
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