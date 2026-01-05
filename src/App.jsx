// แก้ไขไฟล์ src/App.jsx
import { useState, useEffect } from 'react';
import ProfileCard from './components/ProfileCard';

function App() {
  const [githubData, setGithubData] = useState(null);
  const username = "jowkemm"; // <-- เปลี่ยนเป็น Username ของนิสิต

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(data => {
        setGithubData(data);
      })
      .catch(err => console.error(err));
  }, []); // [] หมายถึงให้ทำแค่ครั้งเดียวตอนโหลดหน้าเว็บ

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>My First React App</h1>

      {githubData ? (
        <ProfileCard
          name={githubData.name || githubData.login}
          role="GitHub User"
          bio={githubData.bio || "No bio available"}
        />
      ) : (
        <p>Loading data from GitHub...</p>
      )}
    </div>
  );
}

export default App;