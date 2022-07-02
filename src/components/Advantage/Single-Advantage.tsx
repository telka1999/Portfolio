interface Prop {
    icon: string
    title: string
    description: string
}

export const SingleAdvantage:React.FC<Prop> = ({icon,title,description}) => {
    return(
                <div className="p-5 bg-neutral-50 rounded-lg md:w-1/3">
                    <span className="text-2xl md:text-3xl">{icon}</span>
                    <div className="mt-4 md:mt-6">
                        <h3 className="font-medium text-xl md:text-2xl">{title}</h3>
                        <p className="mt-2 text-base leading-7">{description}</p>
                    </div>
                </div>
    )
}