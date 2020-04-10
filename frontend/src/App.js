// import image from './assets/background.png'
import React, {useState, useEffect} from 'react';
import './App.css';
import api from './services/api.js'
import Header from './components/Header';



function App() {
  const [projects, setProjects] = useState([]);
  useEffect(()=> {
    api.get('/projects').then(response => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProjects() {
    // setProjects([... projects, `Novo projeto ${Date.now()}`]);

    const response = await api.post('projects',
      {
        title: `Novo projeto ${Date.now()}`,
        owner: "Daniel Fernando"
      }
    );
    const project = response.data;

    setProjects([... projects, project]);
  }

  return(
  <>
    <Header title="Projects" />
    {/* <img src={image} width={300} alt="plano de fundo"/> */}
    <ul>
      {projects.map(project => <li key={project.id}>{project.title}</li>)}
    </ul>
    <button type="button" onClick={handleAddProjects}>Adicionar projetos</button>
  </>
  );  
}

export default App;