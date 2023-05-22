import { database } from '@/firebase';
import { collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function index() {
  const router=useRouter();
  const [name,setName]=useState('');
  const [studentData,setStudentData]=useState([]);

  useEffect(()=>{
    getData();
  },[])

  const getData=async()=>{
    await getDocs(collection(database,"Students"))
    .then((response)=>{
      setStudentData(response.docs);
    })
  }

  const deleteData=async(id)=>{
    let fieldtoDelete= doc(database,'Students',id);
    await deleteDoc(fieldtoDelete)
    .then(()=>{
          alert('Record Deleted')
          getData();
    })
    .catch ((error)=>{
      alert('Something went wrong!'+error)
    })
  } 

  const updateData=async(id)=>{
    let fieldtoUpdate= doc(database,'Students',id);
    await updateDoc(fieldtoUpdate,{
      name:name
    })
    .then(()=>{
          alert('Record Updated')
       
    })
    .catch ((error)=>{
      alert('Something went wrong!'+error)
    })
  } 

  return (
    <div className='flex items-center justify-around mt-56'>
      <form>
        <input placeholder='name'
        type='text'
        value={name}
        onChange={(e)=> setName(e.target.value)}
        />
      </form>
      
        <table className='w-[50%] text-center'>
        
          <thead className='bg-gray-400 text-black '>
          
            <tr>
            
              <th scope='col' className='px-6 '>Mail</th>
              
              <th scope='col' className='px-6 '>Password</th>
              <th scope='col' className='px-6 '>Actions</th>
              
            </tr>
          </thead>
          
          <tbody>
          
            {
              
              studentData.map((user)=>{
                
            return <tr key={user.id} className='border border-spacing-10'>
              
              
              <td scope="row"className='px-10'>{user.data().name}</td>
              <td scope="row" className='px-10'>{user.data().marks}</td>
              <td scope="row" className='px-10'>
                <button className='bg-green-300' onClick={()=> deleteData(user.id)}>Delete</button>
                <button className='bg-red-400 ml-2 ' onClick={()=> updateData(user.id)}>Update</button>
              </td>
            </tr>
            })
}
          </tbody>

        </table>
      
    </div>
  )
}

export default index