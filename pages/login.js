import React, { useState } from 'react'

function login() {

    const [name,setName]=useState('');
    const [password,setPassword]=useState('');

    function addRec(e){
        e.preventDefault();
        let user=JSON.parse(localStorage.getItem('user'));
        let username=[{'name':name,
                        'password': password}]
                        username.push(user);
        localStorage.setItem('user',JSON.stringify(username))
    }

  


  return (
    <div>
        <div className='bg-black min-h-screen flex items-center justify-center'>

            <form className='flex flex-col'>
                <input placeholder='name'
                type='text'
                className='py-4'
                value={name}
                onChange={(e)=> setName(e.target.value)}
                
                />
                <input placeholder='password'
                type='text'
                className='py-4'
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                
                />
                <button className='text-yellow-300 font-bold text-4xl' onClick={addRec}>Add</button>
                <button className='text-yellow-300 font-bold text-4xl' >SignIn</button>
            </form>

        </div>
    </div>
  )
}

export default login