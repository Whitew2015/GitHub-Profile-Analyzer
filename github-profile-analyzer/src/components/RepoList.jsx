export default function RepoList({ repos }) {
    if (!repos || repos.length === 0) return null; 

    return (
        <div>
            <h2>Repositories</h2>

            {repos
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 10).map((repo) => (
                <div key={repo.id}>
                    <h3>
                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noreferrer">
                        {repo.name}
                        </a>
                    </h3>
                    <p>{repo.description}</p>
                    <p>Language: {repo.language ?? "Not Specified"}</p>
                    <p>⭐ Stars: {repo.stargazers_count}</p>
                </div>
            ))}
        </div>
    );
}