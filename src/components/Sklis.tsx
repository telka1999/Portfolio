import { Icon } from '@iconify/react';
import {SectionHeader} from "./section-header"

export const Skils:React.FC = () =>{
    return(
        <section className='pt-16 md:pt-20'>
            <SectionHeader title="Umiejętności" />
            <div className='flex flex-wrap gap-8 md:gap-x-10'>
                <Icon icon="vscode-icons:file-type-html" className="text-4xl md:text-5xl"/>
                <Icon icon="vscode-icons:file-type-css" className="text-4xl md:text-5xl"/>
                <Icon icon="logos:javascript" className="text-4xl md:text-5xl"/>
                <Icon icon="logos:typescript-icon"  className="text-4xl md:text-5xl"/>
                <Icon icon="bi:git" color="#ef391a" className="text-4xl md:text-5xl"/>
                <Icon icon="logos:react" className="text-4xl md:text-5xl"/>
                <Icon icon="vscode-icons:file-type-tailwind" className="text-4xl md:text-5xl"/>
                <Icon icon="bi:wordpress" color="#0073aa"  className="text-4xl md:text-5xl"/>
                <Icon icon="simple-icons:webflow" className="text-4xl md:text-5xl"/>
            </div>
        </section>
    )
}