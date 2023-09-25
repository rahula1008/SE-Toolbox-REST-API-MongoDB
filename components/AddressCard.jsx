'use client'

import { FileEdit, Trash2 } from 'lucide-react'

const AddressCard = (props) => {
  return (
    <div className="flex justify-between rounded-lg shadow-lg overflow-hidden bg-blue-100 my-8">
      <div className="px-6 py-4">
        <h3 className="text-lg font-medium text-gray-900">
          {props.address.title}
        </h3>
        <p className="mt-1 text-sm text-gray-500">{props.address.address}</p>
      </div>
      <div className="bg-green-100 flex flex-col p-2">
        <FileEdit
          className="py-1 cursor-pointer"
          onClick={() => console.log('Click file edit')}
        />
        {/* Add tailwind css to have pointer when hover */}
        <Trash2
          className="py-1 cursor-pointer"
          onClick={() => {
            console.log('Click trash')
          }}
        />
      </div>
    </div>
  )
}

export default AddressCard
