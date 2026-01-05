// แก้ไขไฟล์ src/App.jsx
import { useState, useEffect } from 'react';
import ProfileCard from './components/ProfileCard';

function App() {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`https://api.github.com/users/jowkemm`)
      .then(res => {
        if (!res.ok) {
           if (res.status === 403) {
             throw new Error("API Limit Exceeded");
           }
           if (res.status === 404) {
             throw new Error("User not found");
           }
           throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then(data => {
        setGithubData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const appStyles = {
    textAlign: 'center',
    minHeight: '100vh',
    padding: '20px',
    backgroundColor: theme === 'dark' ? '#222' : '#fff',
    color: theme === 'dark' ? '#fff' : '#000',
    transition: '0.3s'
  };
  
  return (
    <div style={appStyles}>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>

      <h1>My Team Portfolio</h1>

      {loading && <h3>🌀 Loading...</h3>}

      {error && <h3 style={{ color: 'red' }}>❌ {error}</h3>}

      {!loading && !error && githubData && (
        <ProfileCard
          name={githubData.name || githubData.login}
          role="GitHub User"
          bio={githubData.bio || "No bio available"}
        />
      )}
    </div>
  );
}

export default App;