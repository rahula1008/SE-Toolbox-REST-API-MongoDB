'use client'

import { useState } from "react"
import { Plus } from 'lucide-react'
import axios from 'axios';

const AddressForm = (props) => {
    
  const [newDescription, setNewDescription] = useState('');

  const onEdit = async () => {
    try {
        await axios.put(`http://localhost:8080/api/addresses/${props.address._id}`, 
            {...props.address, description: newDescription, })
    } catch (error) {
        console.error('Error updating address: ', error)
    }
    
  }
 
  return (
    <div>
        
        <form onSubmit={onEdit} className="w-2/3 space-y-6">
            <p> The address that you will be changing: {props.address.title}</p>
            <input
            placeholder="New description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="border px-2 py-1 rounded w-full"
            />
            <button type="submit" className="flex items-center text-white bg-gray-900 hover:bg-gray-800 rounded-lg text-sm px-5 py-2.5">
                <Plus className="pr-2" /> Update Address
            </button>
        </form>
        
    </div>
  )
}

export default AddressForm