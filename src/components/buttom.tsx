import Pdf from "../img/BartoszTelka.pdf"

export default function Buttom (){
    return(
        <a href={Pdf} rel="noopener noreferrer" target="_blank">
            <button className="bg-emerald-500 rounded-sm font-medium text-white px-10 py-2 mt-2">Moje CV</button>
        </a>
    )
}