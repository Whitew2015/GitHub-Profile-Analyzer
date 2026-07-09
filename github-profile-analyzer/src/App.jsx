import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';
import { getRepos, getUser } from './services/githubApi';
import RepoList from './components/RepoList';


function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);

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

      const repoData = await getRepos(username);
      setRepos(repoData);
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
      <RepoList repos={repos} />
      
    </div>
  );
}

export default App
