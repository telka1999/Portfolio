import {SingleProject} from "./Single-project";
import {ApiData} from "../../ApiData";
import {SectionHeader} from "../section-header"

interface Prop {
    projectsRef: React.LegacyRef<HTMLElement>
    projects: ApiData[]
}

export const Projects:React.FC<Prop> = ({projectsRef,projects}) => {

    const ListofProjects = projects.map(project=>{       

        const description = project.description.json.content[0].content[0].value;
        const {url, name, technologies, githubUrl} = project
        const img = project.img.url;

        return <SingleProject
                link={url}
                img={img} 
                title={name} 
                description={description}
                key={name}
                tech={technologies}
                github={githubUrl}
                />
    })

    return(
        <section ref={projectsRef} className="py-16 md:pt-20">
            <SectionHeader title="Projekty" />
            <div className="grid gap-10 mb-10 md:grid-cols-2">
                {ListofProjects}
            </div>
        </section>
    )
}