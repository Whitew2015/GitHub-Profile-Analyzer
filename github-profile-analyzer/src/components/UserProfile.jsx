export default function UserProfile({ user }) {
    if (!user) return null

    return (
        <div>
            <img 
                src={user.avatar_url}
                alt={user.login}
                width="150"
            />

            <h2>{user.name}</h2>
            <p>{user.bio}</p>
        </div>
    )
}