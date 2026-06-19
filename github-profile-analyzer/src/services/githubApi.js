export async function getUser(username) {
    const response = await fetch(
        `https://api.github.com/users/${username}`
    );

    if (!response.ok) {
        throw new Error("User not found");
    }

    return response.json();
}

export async function getRepos(username) {
    const response = await fetch(
        `https://api.github.com/users/${username}/repos`
    );

    if (!response.ok) {
        throw new Error("Repositories not found");
    }

    return response.json();
}