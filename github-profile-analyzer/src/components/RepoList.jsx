export default function RepoList({ repo }) {
    if (!repo) return null; 

    return (
        <div>
            <p>{repo.name}</p>
            <p>{repo.description}</p>
            <p>{repo.language}</p>
            <p>{repo.stargazers_count}</p>
        </div>
    )
}