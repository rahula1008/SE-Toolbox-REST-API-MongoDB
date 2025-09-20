'use client'

import { Plus } from 'lucide-react'
import axios from 'axios';
import { useState } from 'react';



const InputButton = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/addresses', { title, description });
      setTitle(''); setDescription('');
      setOpen(false)
    } catch (error) {
      setErrorMessage(error.message);
      console.error('Error creating address: ', error);
    }
  };

  return (
    <div className="flex bg-red-100 justify-end px-4 py-4 rounded-b-lg">
      <form onSubmit={onSubmit} className="w-2/3 space-y-6">
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border px-2 py-1 rounded w-full"
        />
        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border px-2 py-1 rounded w-full"
        />
        <button type="submit" className="flex items-center text-white bg-gray-900 hover:bg-gray-800 rounded-lg text-sm px-5 py-2.5">
          <Plus className="pr-2" /> Add address
        </button>
      </form>
      <p className="border px-2 py-1 rounded w-full"> Error: {errorMessage} </p>
    </div>
  )
}

export default InputButton
