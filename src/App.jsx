import { useState } from 'react'
import './App.css'
import QueueForm from './components/QueueForm.jsx'
import QueueDisplay from './components/QueueDisplay.jsx'

function App() {
  const [queue, setQueue] = useState([])
  const enQueue = (customer) => {
    setQueue([...queue, {...customer, id: Date.now(), status: 'waiting'}])
  }
  const updateStatus = (id, newStatus) => {
    setQueue(queue.map(customer => ( //() used instead of {} as () does explicit return automatically - Debug1
      customer.id === id ? {...customer, status: newStatus} : customer
    )))
  }
  const deQueue = (id) => {
    setQueue(queue.filter(customer => customer.id !== id))
  }
  return (
   <>
    <header>
      <h1>Queue Management System</h1>
      <p>Manage your customers efficiently</p>
    </header>
    <main>
      <QueueForm onAdd={enQueue}/>
      <QueueDisplay 
      queue={queue}
      updateItem={updateStatus}
      delItem={deQueue}
      />
    </main>
   </>
  )
}

export default App
