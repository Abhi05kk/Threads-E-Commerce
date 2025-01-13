import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Users = ({ }) => {

  const url = "http://localhost:4000"
  const [Users, setUsers] = useState([])

  const fetchUsers = async () => {
    try {

      const response = await axios.get(`${url}/api/user/list`);
      if (response.data.success) {
        setUsers(response.data.products);
      }
      else {
        toast.error(response.data.message)
      }


    } catch (error) {
      console.log(error);
      toast.error(error.message)

    }
  }


  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <>

      <p className='mb-2'>All Users List</p>
      <div className='flex flex-col gap-2'>

        <div className='hidden md:grid grid-cols-[2fr_3fr_1fr_1fr_1fr]  items-center py-1 px-2 border bg-gray-100 text-sm'>
          <b>Name</b>
          <b>Email</b>
        </div>

        {
          Users.map((item, index) => (
            <div className='grid grid-cols-[2fr_3fr_1fr_1fr_1fr] items-center gap-2 pb-3' key={index}>
              <p>{item.name}</p>
              <p>{item.email}</p>
            </div>
          ))
        }

      </div>

    </>
  );
}

export default Users;


