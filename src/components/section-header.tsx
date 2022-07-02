interface Prop {
    title: string
}

export const SectionHeader:React.FC<Prop> = ({title})=>{
    return (
            <div className='mb-8 md:mb-10'>
                <h2 className='font-semibold text-3xl md:text-4xl '>{title}</h2>
            </div>
    )
}