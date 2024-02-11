import React from 'react';
import AppNavbar from './AppNavbar';
import backgroundImage from '../../public/image/geiranger.jpg';
import "../css/terms.css";
import Button from 'react-bootstrap/Button';
import axios from 'axios';

async function getTerms(){
  let data;

  await axios.get('http://127.0.0.1:5003/api/terms')
  .then(response => {
    data = response.data.value;
    return data;
  })
  .catch(error => {
    console.error('There was a problem while retrieving terms:', error);
  });

  document.getElementById('terms').innerHTML = data;
}

function Terms() {

  getTerms();
  
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
  };

  const buttonStyle = {
    backgroundColor: "#089e1e",
    border:"none"
  }

  return (
    <div className="position-fixed w-100 overflow-hidden" style={backgroundStyle}>
      <div className='overflow-y-auto' style={{ height: 'calc(100vh - 0px)' }}>
        <AppNavbar />
        <div className='text-white d-flex flex-column mt-5 align-items-center'>
          <h2>Terms</h2>
          <Button className="mt-3 px-5 py-3 fw-bold fs-5 text-white rounded-pill" style={buttonStyle}>Close and Go Back</Button>
          <div className='mt-5 mb-5 bg-white text-black px-5 py-5 rounded-4' style={{ maxWidth:"750px" }} id="terms" />
          <Button className="px-5 py-3 fw-bold fs-5 text-white rounded-pill mb-5" style={buttonStyle}>Close and Go Back</Button>
        </div>
      </div>
    </div>
  );
}

export default Terms;
