import { useState } from 'react'
import './App.css'
import QueueForm from './components/QueueForm.jsx'

function App() {
  const [queue, setQueue] = useState(0)
  const enQueue = (customer) => {
    setQueue([...queue, {...customer, id: Date.now(), status: 'waiting'}])
  }
  const updateStatus = (id, status) => {
    
  }
  const deQueue = (id) => {

  }
  return (
   <div>
    <header>
      <h1>Queue Management System</h1>
      <p>Manage your customers efficiently</p>
    </header>
    <QueueForm onAdd={enQueue}/>
    Display component
   </div>
  )
}

export default App
