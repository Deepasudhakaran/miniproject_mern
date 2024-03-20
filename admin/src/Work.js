import React from 'react';
import H1 from './H1';
import './Employeehome.css';
import './Work.css';
const Work = () => {
  return (
    <div>
      <H1 />

      <div className='container'>
        <form>
          <div className='row'>
            <input type='text' placeholder='Enter the work head' />
          </div>
          <div className='row'>
            <textarea name='subject' placeholder='enter the work' style={{ height: '300px' }}></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Work;
