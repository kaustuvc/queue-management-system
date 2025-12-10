import { useState } from "react"
import { FaUserPlus } from "react-icons/fa"

export default function QueueForm ({onAdd}) {
    const [name, setName] = useState('')
    const [service, setService] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name.trim() || !service.trim()) return
        onAdd({name, service})
        setName('')
        setService('')
    }

    return (
    <>
        <form className="queue-form">
            <h2>Add to queue</h2>
            <div className="form-group">
                <input 
                placeholder="Customer name" 
                type="text"
                value={name}
                onChange={(e) => {setName(e.target.value)}} />
            </div>
            <div className="form-group">
                <select
                value={service}
                onChange={(e) => {setService(e.target.value)}}
                >
                    <option value="">Select service</option>
                    <option value="Consultation">Consultation</option>
                    <option value="Payment">Payment</option>
                    <option value="Support">Support</option>
                </select>
            </div>
            <button type="submit" onClick={(e) => {handleSubmit(e)}}> <FaUserPlus /> Add customer</button>
        </form>
    </>
    )
}