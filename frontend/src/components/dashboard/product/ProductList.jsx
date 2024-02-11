import React from 'react'
import Container from 'react-bootstrap/Container';
import axios from 'axios';

let syncChanges = true;

async function getAllProducts(){
  let data;
  await axios.get('https://lettfakture-production.up.railway.app/api/products/get_all')
  .then(response => {
    data = response.data;
    console.log(data)
  })
  .catch(error => {
    console.error('There was a problem while retrieving products:', error);
  });

  const productBody = document.getElementById('product_body');
  productBody.innerHTML = '';
  data.forEach(element => {
    productBody.innerHTML += (`<div class='d-flex'>
    <div class='col-md-3 px-2'><div class="border border-1 border-info rounded-5 p-1 ps-2">${element.product}</div></div>
    <div class='col-md-2 px-2'><div class="border border-1 border-info rounded-5 p-1 ps-2">${element.in_price}</div></div>
    <div class='col-md-2 px-2'><div class="border border-1 border-info rounded-5 p-1 ps-2">${element.price}</div></div>
    <div class='col-md-2 px-2'><div class="border border-1 border-info rounded-5 p-1 ps-2">${element.stock}</div></div>
    <div class='col-md-3 px-2'><div class="border border-1 border-info rounded-5 p-1 ps-2">${element.description}</div></div>
  </div>`)
  });
}

function ProductList() {
  getAllProducts();

  return (
    <Container>
      <div className='ms-3 d-flex'>
        <div className='col-md-3'>Product / Service</div>
        <div className='ms-2 col-md-2'>In Price</div>
        <div className='col-md-2'>Price</div>
        <div className='col-md-2'>In Stock</div>
        <div className='col-md-3'>Description</div>
      </div>
      <div id="product_body" className='mt-3 d-flex flex-column gap-2'></div>
    </Container>
  )
}

export default ProductList