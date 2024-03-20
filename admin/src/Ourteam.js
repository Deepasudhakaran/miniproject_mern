import React from 'react';
import H1 from './H1';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Ourteam.css'
const Ourteam = () => {
  return (
    <div>
      <H1/>
      <div className='main1'>

      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>


      <div className='form1'>
      <img src="https://cdn3.iconfinder.com/data/icons/web-design-and-development-2-6/512/87-1024.png" alt="Avatar" />
      </div>

      <div className='form1'>
       <img src="https://cdn3.iconfinder.com/data/icons/web-design-and-development-2-6/512/87-1024.png" alt="Avatar" />
      </div>

      <div className='form1'>
      <img src="https://cdn3.iconfinder.com/data/icons/web-design-and-development-2-6/512/87-1024.png" alt="Avatar" />
      </div>

      <div className='form1'>
      <img className='img' src="https://cdn3.iconfinder.com/data/icons/web-design-and-development-2-6/512/87-1024.png" alt="Avatar" />
      </div>
    </div>
    </div>
  );
}

export default Ourteam;
