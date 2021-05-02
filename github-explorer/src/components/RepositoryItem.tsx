interface RepositoryItemProps{
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

function RepositoryItem({repository}: RepositoryItemProps){
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>

      <a href={repository.html_url}>
        Acessar Repositório
      </a>
    </li>
  );
}

export default RepositoryItem;
