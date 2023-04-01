import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      
    }
      
  };
  return (
    <div className="App">
      <div>
        <p>Choose file to share</p>
        <form onSubmit={handleSubmit}>
        <input type="file" />
        </form>
      </div>
    </div>
  )
}

export default App
