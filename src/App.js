import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [activity, setActivity] = useState('');

  useEffect(() => {
    getAdvice();
  }, [])
  
  const getAdvice = async () => {
    const responce = await fetch('http://www.boredapi.com/api/activity/');
    const data = await responce.json();
    setActivity(data);
  }

  return (
    <div >
      <div className='cont'>
      <h1>Bored?</h1>
      </div>
      <div className='cont'>
        <h2>Just click the button</h2>
      </div>
      <div className='cont'>
        <h3>{activity.activity}</h3>
      </div>
      <div className='cont'> 
        <button onClick={getAdvice} >nuh...</button>
      </div>
    </div>
  );
}

export default App;
