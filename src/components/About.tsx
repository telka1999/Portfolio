import profilImg from "../img/profilpicture.jpg";
import Buttom from "./buttom";

interface Prop {
    aboutRef: React.LegacyRef<HTMLElement>
}

export const About:React.FC<Prop> = ({aboutRef}) => {

    return(
        <section ref={aboutRef} className="pt-12 md:pt-20 ">
            <div>
                <div className="flex flex-col items-center md:items-center md:flex-row">
                    <div className="text-center md:w-10/12 md:text-left">
                        <h1 className="text-5xl font-semibold my-3 md:text-6xl">Bartosz Telka</h1>
                        <h2 className="text-2xl font-medium my-3">Forntend developer</h2>
                    </div>
                    <div className="mt-6 md:w-2/12 md:mt-0">
                        <img className="w-40 h-40 rounded-full border-solid border-4 border-emerald-500 md:w-full md:h-full" src={profilImg} alt="Zdjęcie profilowe" />
                    </div>
                </div>
                <div className="max-w-2xl mt-16 md:mt-8">
                    <p className="mb-5 leading-7 text-base">Cześć, nazywam się Bartek! 👋</p>
                    <p className="mb-5 text-base leading-7">
                        <strong>Od ponad 3 lat interesuję się technologiami webowymi</strong>. Przez ten okres 
                        hobistycznie programowałem oraz kodowałem (głównie dla siebie) wiele różnych projektów od prostych 
                        stron do małych aplikacji webowych.
                    </p>
                    <p className="mb-5 leading-7 text-base"> 
                        Swoją przygode zaczynałem od platform nocode takich jak <span className="text-emerald-600 underline z-50">Bubble.io</span> oraz <span className="text-emerald-600 underline z-50">Webflow</span> z 
                        czasem zacząłem używać <span className="text-emerald-600 underline z-50">Wordpressa</span> którego pokochałem, a od ostatniego roku
                        intensywnie uczę się takich technologi jak <span className="text-emerald-600 underline z-50">Javascript</span> oraz <span className="text-emerald-600 underline z-50">React.</span>
                    </p>
                    <p className="mb-5 leading-7 text-base">
                        Aktualnie szukam swojej pierwszej pracy w IT jako frontend developer.
                    </p>
                </div>
                <Buttom/>
            </div>
        </section>
    )
}