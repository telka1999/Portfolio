import {SingleAdvantage} from "./Single-Advantage";
import {SectionHeader} from "../section-header";

interface Prop{
    advantageRef: React.LegacyRef<HTMLElement>
}

export const Advantage:React.FC<Prop> = ({advantageRef}) => {
    return(
        <section ref={advantageRef} className="pt-16 md:pt-20">
            <SectionHeader title="Moje zalety" />
            <div className="flex flex-wrap gap-5 md:flex-nowrap">
                <SingleAdvantage
                icon="👩‍💻"
                title="Pracowity"
                description="Programowanie to dla mnie przyjemność której lubię nadużywać."
                />
                <SingleAdvantage
                icon="🛠"
                title="Samodzielny"
                description="Nie boję się problemów bo wiem że z odpowienim podejściem rozwjążę każdy."
                />
                <SingleAdvantage
                icon="💪"
                title="Ambitny"
                description="Zawsze mieżę wysoko i oczekuję od siebie 100% w każdej sytuacji."
                />
            </div>
        </section>
    )
}