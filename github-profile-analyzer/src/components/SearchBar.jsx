import { useState } from "react";

export default function SearchBar({ onSearch }) {

    const [username, setUsername] = useState("");

    return (
        <div>
            <input 
                type="text"
                placeholder="Github username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        onSearch(username);
                    }
                }}
                />
                <button onClick={() => onSearch(username)}>
                    Search
                </button>

                {/*Testing for username appearing on-screen*/}
                <p>Searching for: {username}</p>
        </div>
    );
}