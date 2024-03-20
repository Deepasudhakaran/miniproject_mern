import React, { useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router';


const Create = () => {
  const [name, setName] = useState(" ")
  const [email, setEmail] = useState(" ")
  const navigate = useNavigate();

  const handlecreate = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/create', { name, email })
      .then(result => {
        console.log(result);

        navigate('/About');
      })
      .catch(err => console.log(err));
  };

  return (

    <div className='d-flex w-70 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-secondary text-white p-5'>
        <form onSubmit={handlecreate} >
          <h3>Add  new employee</h3><br />
          <div>
            <label>Name</label>
            <input type='text'
              name='name'
              onChange={e => setName(e.target.value)}
              className='form-control'
              placeholder='enter name' />
          </div>

          <div>
            <label>Email</label><br />
            <input type='email'
              name='email'
              onChange={e => setEmail(e.target.value)}
              className='form-control'
              placeholder='enter email' />
          </div><br />
          <button className='btn btn-info'>sumbit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
