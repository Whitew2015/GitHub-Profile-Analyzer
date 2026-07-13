export default function StatsChart({ repos }) {
    if (!repos || repos.length === 0) {
        return null;
    }

    const languageCounts = {};
    const totalRepos = repos.length;

    repos.forEach((repo) => {
        if(repo.language) {
            languageCounts[repo.language] =
            (languageCounts[repo.language] || 0) + 1;
        }
    });

    const sortedLanguages = Object.entries(languageCounts)
        .sort((a, b) => b[1] - a[1]);


    const totalStars = repos.reduce(
        (sum, repo) => sum + repo.stargazers_count,
        0
    );

    const totalForks = repos.reduce(
        (sum, repo) => sum + repo.forks_count,
        0
    );

    const topRepo = repos.reduce((best, current) => 
        current.stargazers_count > best.stargazers_count 
        ? current
        : best
    );
    
    return (
        <div>
            <h2>Language Statistics</h2>

            <p>Total Repositories: {totalRepos}</p>
            <p>Total Stars: {totalStars}</p>
            <p>Total Forks: {totalForks}</p>

            <p>
                Most Starred Repo: {topRepo.name} ⭐
                ({topRepo.stargazers_count} stars)
            </p>

            {sortedLanguages.map(
                ([language, count]) => (
                    <p key={language}>
                        {language}: {count}
                    </p>
                )
            )}
        </div>
    );
}