import { useState } from "react";

export default function SearchBar() {

    const [username, setUsername] = useState("");

    return (
        <div>
            <input 
                type="text"
                placeholder="Enter Github username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />

                <button>Search</button>
                <p>Searching for: {username}</p>
        </div>
    );
}