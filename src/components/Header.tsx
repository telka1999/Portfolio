import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';

interface Props {
    contactRef: React.LegacyRef<HTMLElement>
    aboutRef: React.LegacyRef<HTMLElement>
    advantageRef: React.LegacyRef<HTMLElement>
    projectsRef: React.LegacyRef<HTMLElement>
}

export const Header:React.FC<Props> = ({contactRef,aboutRef,advantageRef,projectsRef}) => {

    const [menu, setMenu] = useState(false);
    const [screenSize, getDimension] = useState(window.innerWidth,);

    const setDimension = () => {
        getDimension(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', setDimension);

        if(screenSize<768){
            setMenu(prevmenu=>prevmenu=false); 
        }else{
            setMenu(prevmenu=>prevmenu=true);
        }
        
        return(() => {
            window.removeEventListener('resize', setDimension);
        })
      }, [screenSize])

    function togleMenu(){
        setMenu(prevmenu=>!prevmenu);
    }

    const scrollTo = (ref: any)=>{
        
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: "smooth",
        });
        if(screenSize<768){
            togleMenu();
        }
    }

    return(
        <header className="sticky top-0 bg-emerald-500">
            <nav className="flex justify-end md:justify-center">
                <div style={menu?{display:"block"}:{display:"none"}} className="absolute top-20 left-0 w-full bg-white px-4 md:static md:bg-inherit">
                    <ul className="flex flex-col rounded-md shadow-md md:flex-row md:shadow-none md:justify-center">
                        <li onClick={()=>scrollTo(aboutRef)} className="border-solid border-gray-100 border-b py-4 px-6 cursor-pointer md:text-sm md:border-none md:text-white md:py-5 md:px-8">O mnie</li>
                        <li onClick={()=>scrollTo(advantageRef)} className="border-solid border-gray-100 border-b py-4 px-6 cursor-pointer md:text-sm md:border-none md:text-white  md:py-5 md:px-8">Zalety</li>
                        <li onClick={()=>scrollTo(projectsRef)} className="border-solid border-gray-100 border-b py-4 px-6  cursor-pointer md:text-sm md:border-none md:text-white md:py-5 md:px-8">Projekty</li>
                        <li onClick={()=>scrollTo(contactRef)} className="border-solid border-gray-100 border-b py-4 px-6 cursor-pointer md:text-sm md:border-none md:text-white md:py-5 md:px-8">Kontakt</li>
                        <li className="py-4 px-6 md:text-sm md:text-white md:py-5 md:px-8">bartosztelka@protonmail.com</li>
                    </ul>
                </div>
                <Icon onClick={togleMenu} icon="bytesize:menu" color="#ffff" className='text-4xl my-3 mx-6 cursor-pointer md:hidden'/>
            </nav>
        </header>
    )
}