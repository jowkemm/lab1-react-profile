// src/App.jsx
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>My Team Portfolio</h1>

      {/* ลองส่ง Props ข้อมูลของตัวเองลงไป */}
      <ProfileCard 
        name="ปาณัสม์ พิมพ์โคตร" 
        role="Student @ CEDT" 
        bio="ไม่หล่อให้สาวเหลียว กินก๋วยเตี๋ยวให้สาวเลี้ยง" 
      />

      {/* ลองเรียกใช้ซ้ำอีกครั้งด้วยข้อมูลที่ต่างออกไป */}
      <ProfileCard 
        name="John Doe" 
        role="Guest Developer" 
        bio="I love coding and learning new things." 
      />
    </div>
  );
}

export default App;