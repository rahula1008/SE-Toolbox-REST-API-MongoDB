'use client'

import AddressCard from './AddressCard'
import axios from 'axios'
import { useState, useEffect } from 'react'
import AddressForm from './AddressForm'



// render list of AddressCard components
const AddressCardList = () => {
  const [ addresses, setAddresses ] = useState([])
  const [isEditVisible, setIsEditVisible] = useState(false);

  const [editAddress, setEditAddress] = useState('')

  const onEdit = (address) => {

    // 1. Toggles the visibility

    if (!editAddress) {
      // If it has not been toggled on before
      setIsEditVisible(!isEditVisible);
      console.log("Set is visible to !isVisible");
    } else if ((editAddress) && (address._id === editAddress._id)) {
      // If the address is the same then toggle it
      setIsEditVisible(!isEditVisible);
      console.log("Set is visible to !isVisible");
    }

    // 2. Populates the address that the address form will use
    setEditAddress(address);
  };

  useEffect(() => {
    const fetchAddresses = async () => {
    try {
        //Make a GET request to backend server via axios
        const response = await axios.get('http://localhost:8080/api/addresses')
        //update the addresses state with the retrieved data
        setAddresses(response.data)
      } catch (error) {
        console.error("Error fetching addresses: ", error)
      }
    }
    fetchAddresses()
  }, [addresses])

  return (
    <div className="flex-1 max-w-3xl">
      {addresses.map((address) => (
        <AddressCard key={address.id} address={address} showEditForm={onEdit}/>
      ))}

      {
        isEditVisible && (
          <div>
            <AddressForm address = {editAddress}></AddressForm>
          </div>
        )
      }
    </div>

    
  )
}

export default AddressCardList
