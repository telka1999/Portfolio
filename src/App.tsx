import { useRef, useState, useEffect } from "react";
import {Header} from "./components/Header";
import { About } from "./components/About";
import {Skils} from "./components/Sklis";
import {Advantage} from "./components/Advantage/Advantage";
import {Projects} from "./components/Projects/Projects";
import {Footer} from "./components/Footer";

const query = `
{
  projectsCollection{
    items {
      description{
        json
      }
      img{
        url
      }
      technologies
      name
      url
      githubUrl
    }
  }
}
`;

export const App:React.FC = () => {

  const [projects, setProjects] = useState([]);

  const fetchData = async ()=>{
    try {
      const resolve = await fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_SPACE_ID}/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
          },
          body: JSON.stringify({ query }),
        }
      )
      const {data} = await resolve.json();
      setProjects(data.projectsCollection.items);      
    } catch (error) {
      console.error(error);
    }
  } 

  console.log(projects);
  

  useEffect(()=>{
    fetchData()
  },[]);

  const contactRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const advantageRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);

  return (
    <>
      <Header contactRef={contactRef} aboutRef={aboutRef} advantageRef={advantageRef} projectsRef={projectsRef}/>
      <main className=" text-gray-800 max-w-5xl mx-auto px-4">
        <About aboutRef={aboutRef}/>
        <Skils/>
        <Advantage advantageRef={advantageRef}/>
        <Projects projectsRef={projectsRef} projects={projects}/>
      </main>
      <Footer contactRef={contactRef}/>
    </>
  );
};

export default App;