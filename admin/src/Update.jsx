import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import axios from 'axios';

const Update = () => {

  


  const {id} = useParams()
  const [name,setName]= useState("");
  const [email,setEmail]= useState("");
  const navigate =useNavigate()
  
  
  useEffect(()=>{
   const fetchData = async () =>{
    try{
      const response = await axios.get('http://localhost:8080/create/'+id);
      console.log(response);
      setEmail(response.data.email);
      setName(response.data.name);
  
    }catch(err){
      console.log(err);
    }
   }
  fetchData();
    },[id]);
  
  
   const submit =(e) =>{
    e.preventDefault() 
    axios.put('http://localhost:8080/updateUser/'+ id,{name,email})
    .then(res =>{
      console.log(res)
      navigate('/About')
    })
    .catch(err =>console.log(err))
   
  }
  
  
  
  return (
    <div>
      <div className='d-flex w-70 vh-100 justify-content-center align-items-center'>
      
        <div className='w-50 border bg-secondary text-white p-5'>
      <form onSubmit={submit} >
        <h3>Update employee</h3><br/>
       
      <div>
            <label>Name</label>
            <input type='name' name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
             className='form-control' 
           />
        </div>

        <div>
            <label>Email</label>
            <input type='email' name='email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
             className='form-control'
              />
        </div><br/>
        <button  className='btn btn-info' >update</button>
      </form>
      </div>
     
    </div>
    </div>
  );
}

export default Update;
