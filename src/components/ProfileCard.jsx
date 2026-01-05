// แก้ไขไฟล์ src/components/ProfileCard.jsx
import { useState } from 'react';

function ProfileCard({ name, role, bio }) {
  const [likes, setLikes] = useState(0); // สร้าง State สำหรับเก็บจำนวน Like
  const [skills, setSkills] = useState(['React', 'Javascript']); // สร้าง State สำหรับเก็บรายการทักษะ
  const [inputValue, setInputValue] = useState('');
  const handleAddSkill = () => {
    if (inputValue.trim() !== "") {
      setSkills([...skills, inputValue]); 
      setInputValue('');
    }
  };
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px' }}>
      <h2>{name}</h2>
      <p><strong>Role:</strong> {role}</p>
      <p>{bio}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
        <button onClick={() => setLikes(likes + 1)}>
          ❤️ Like: {likes}
        </button>
        <div style={{ display: 'flex', gap: '5px' , justifyContent: 'center'}}>
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Add new skill..."
            />
            <button onClick={handleAddSkill}>Add Skill</button>
        </div>
        <div style={{ textAlign: 'left' }}>
          <h4>Skills:</h4>
          <ul style={{ marginBottom: '10px' }}>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;