import React, { useEffect, useState } from 'react';
import H1 from './H1';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';


const About = () => {
  const {id} =useParams();
  const  [users,setUsers] = useState([{
    name:"",email:""
  }]);

 

  useEffect(() => {
   fetchItems();
   
   
  }, []);

  
  const fetchItems = () =>{
    axios.get('http://localhost:8080/create')
   .then(users=> setUsers(users.data))
   .catch(err => console.log(err))
  }



  const handleDelete=  (id) => {
       axios.delete('http://localhost:8080/create/'+id)
       fetchItems(); 
      
     
  };

  
  
  

  

  const navigate = useNavigate();
  

  
 
  return (
    <div>
      <div><H1/></div>
      <div className='main'>
        <div className='container'>

      <h1>Our project team members</h1>
      <button className='btn btn-success my-3'onClick={()=>navigate('/create') }>create +</button>
      <table className='table' >
        <thead>
        <tr>
          
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
          {users.map((user) =>(
            <tr key={user._id}>
              <td>{user.name}{' '}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/update/${user._id}`}  className='btn btn-sm btn-primary' >edit</Link>
                <button className='btn btn-sm btn-danger ms-2'onClick={() => handleDelete(user._id)}>delete</button>
              </td>

            </tr>
          ))}
          
        </tbody>

      </table>
      </div>
      </div>
    </div>
  );
}

export default About;
