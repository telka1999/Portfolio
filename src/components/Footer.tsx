import Buttom from "./buttom";

interface Prop{
    contactRef: React.LegacyRef<HTMLElement>  
}

export const Footer:React.FC<Prop> = ({contactRef}) => {
    return(
        <footer ref={contactRef} className="bg-neutral-100 flex flex-col items-center px-4 py-10 md:py-14">
            <h2 className="text-center font-semibold text-3xl md:text-4xl">Chcesz mnie zatrudnić ?</h2>
            <p className="text-center mt-6"><strong>email</strong> : bartosztelka@protonmail.com</p>
            <p className="text-center mt-2 mb-4"><strong>telefon</strong> : 502 705 209</p>
            <Buttom/>
        </footer>
    )
}