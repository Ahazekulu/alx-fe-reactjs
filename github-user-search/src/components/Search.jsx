import { useState } from 'react';
import { fetchUserData, searchUsers } from '../services/githubService';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchType, setSearchType] = useState('basic');

  const handleBasicSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const data = await fetchUserData(searchTerm);
      setUsers([data]);
    } catch (err) {
      setError('Looks like we can\'t find the user');
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  const handleAdvancedSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      let query = searchTerm;
      if (location) query += `+location:${location}`;
      if (minRepos) query += `+repos:>${minRepos}`;
      
      const data = await searchUsers(query);
      setUsers(data.items);
    } catch (err) {
      setError('Error searching users');
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
      
      <div className="mb-4">
        <button 
          onClick={() => setSearchType('basic')} 
          className={`mr-2 ${searchType === 'basic' ? 'font-bold' : ''}`}
        >
          Basic Search
        </button>
        <button 
          onClick={() => setSearchType('advanced')} 
          className={`${searchType === 'advanced' ? 'font-bold' : ''}`}
        >
          Advanced Search
        </button>
      </div>

      {searchType === 'basic' ? (
        <form onSubmit={handleBasicSearch} className="mb-6">
          <div className="mb-4">
            <label className="block mb-2">Username:</label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Enter GitHub username"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Search
          </button>
        </form>
      ) : (
        <form onSubmit={handleAdvancedSearch} className="mb-6">
          <div className="mb-4">
            <label className="block mb-2">Search Term:</label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Username or keywords"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Location:</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Filter by location"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Minimum Repositories:</label>
            <input
              type="number"
              value={minRepos}
              onChange={(e) => setMinRepos(e.target.value)}
              placeholder="Minimum repos"
              className="w-full p-2 border rounded"
            />
          </div>
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Search
          </button>
        </form>
      )}

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map(user => (
          <div key={user.id} className="border p-4 rounded shadow">
            <div className="flex items-center mb-4">
              <img 
                src={user.avatar_url} 
                alt="User avatar" 
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h2 className="font-bold">{user.login}</h2>
                {user.name && <p>{user.name}</p>}
              </div>
            </div>
            {user.bio && <p className="mb-2">{user.bio}</p>}
            {user.location && <p className="mb-2">📍 {user.location}</p>}
            <div className="flex justify-between mb-2">
              <span>Followers: {user.followers || 0}</span>
              <span>Following: {user.following || 0}</span>
            </div>
            {user.public_repos !== undefined && <p>Repos: {user.public_repos}</p>}
            <a 
              href={user.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline block mt-2"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
