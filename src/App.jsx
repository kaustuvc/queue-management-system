import { useState } from 'react'
import './App.css'
import QueueForm from './components/QueueForm.jsx'

function App() {
  const [queue, setQueue] = useState(0)
  const enQueue = () => {

  }
  const updateStatus = () => {
    
  }
  const deQueue = () => {

  }
  return (
   <div>
    <header>
      <h1>Queue Management System</h1>
      <p>Manage your customers efficiently</p>
    </header>
    <QueueForm />
   </div>
  )
}

export default App
