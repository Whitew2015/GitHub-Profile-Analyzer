import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';
import { getUser } from './services/githubApi';


function App() {
  const [user, setUser] = useState(null);

  const handleSearch = async(username) => {
    try {
      const data = await getUser(username);
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>GitHub Profile Analyzer</h1>
      <SearchBar onSearch={handleSearch} />

      <UserProfile user={user} />
    </div>
  );
}

export default App
