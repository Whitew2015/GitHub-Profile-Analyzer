import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';
import { getUser } from './services/githubApi';


function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async(username) => {

    if (!username.trim()) {
      setUser(null);
      setError("Please enter a Github username");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await getUser(username);
      setUser(data);
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setUser(null);
      setError("User not found");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>GitHub Profile Analyzer</h1>
      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <UserProfile user={user} />
      
    </div>
  );
}

export default App
