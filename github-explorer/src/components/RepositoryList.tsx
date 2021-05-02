import { useState, useEffect } from 'react';
import RepositoryItem from "./RepositoryItem";

import '../styles/repositories.scss';

interface iRepository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList(){
  const [repositories, setRepositories] = useState<iRepository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/gustavo-cauzzi/repos')
      .then(response => response.json())
      .then(data => setRepositories(data));   
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repo => <RepositoryItem key={repo.name} repository={repo}/>
        )}
      </ul>
    </section>
  )
}