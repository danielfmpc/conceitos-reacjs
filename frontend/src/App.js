// import image from './assets/background.png'
import React, {useState, useEffect} from 'react';
import './App.css';
import api from './services/api.js'
import Header from './components/Header';

useEffect(()=> {
  api.get('/projects').then(response => {
    console.log(response);
  });
}, []);

function App() {
  const [projects, setProjects] = useState(["Dev app", "front-end"]);

  function handleAddProjects() {
    setProjects([... projects, `Novo projeto ${Date.now()}`]);
  }

  return(
  <>
    <Header title="Projects" />
    {/* <img src={image} width={300} alt="plano de fundo"/> */}
    <ul>
      {projects.map(project => <li key={project}>{project}</li>)}
    </ul>
    <button type="button" onClick={handleAddProjects}>Adicionar projetos</button>
  </>
  );  
}

export default App;