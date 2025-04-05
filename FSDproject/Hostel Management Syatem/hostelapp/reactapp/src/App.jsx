import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Registration from './component/Registration'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Registration/>
    </div>
  )
}

export default App
