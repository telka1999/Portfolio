interface Prop {
    link: string
    img: string
    title: string
    description: string
    tech: string[]
    github: string
}

export const SingleProject:React.FC<Prop> = ({link,img,title,description,tech,github}) => {

    return(
        <a href={link} rel="noopener noreferrer" target="_blank">
            <div>
                <img className=" rounded-md shadow-md" src={img} alt="" />
                <div className="flex gap-3 my-4 md:my-6">
                    {tech.map(item=>(
                        <span key={item} className="bg-neutral-100 px-3 py-2 rounded-lg text-xs md:text-sm">{item}</span>
                    ))}
                </div>
                <h3 className="font-medium mt-2 text-xl md:text-2xl">{title}</h3>
                <p className="mt-2 text-base leading-7">{description} <a href={github} rel="noopener noreferrer" target="_blank">
                        <span className="text-emerald-600 underline z-50">Github ➞</span>
                    </a>
                </p>
            </div>
        </a>
    )
}