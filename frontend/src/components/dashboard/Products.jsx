import React from 'react'
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import axios from 'axios';
import { IconPlus } from '@tabler/icons-react';
import { IconPrinter } from '@tabler/icons-react';
import {IconSearch} from "@tabler/icons-react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

let cnt = 0;

function appendData(data){
  const productBody = document.getElementById('product_body');
  data.forEach(element => {
    productBody.innerHTML += (`<div class='d-flex' id='${element.id}'>
    <div class='col-xl-3 col-8 px-2'><div class="product_item border border-1 border-info rounded-5 p-1 ps-2">${element.product}</div></div>
    <div class='col-xl-2 px-2 d-none d-xl-block'><div class="product_item border border-1 border-info rounded-5 p-1 ps-2">${element.in_price}</div></div>
    <div class='col-xl-2 col-4 px-2'><div class="product_item border border-1 border-info rounded-5 p-1 ps-2">${element.price}</div></div>
    <div class='col-xl-2 px-2 d-none d-xl-block'><div class="product_item border border-1 border-info rounded-5 p-1 ps-2">${element.stock}</div></div>
    <div class='col-xl-3 px-2 d-none d-xl-block'><div class="product_item border border-1 border-info rounded-5 p-1 ps-2">${element.description}</div></div>
  </div>`)
  });
}

async function getAllProducts(){
  if(cnt===0){
    let data;
    await axios.get('https://lettfakture-production.up.railway.app/api/products/get_all')
    .then(response => {
      data = response.data;
    })
    .catch(error => {
      console.error('There was a problem while retrieving products:', error);
    });
    const productBody = document.getElementById('product_body');
    productBody.innerHTML = '';
    appendData(data);
    cnt++;
  };
}

function Products() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  getAllProducts();

  function submitHandler(e){
    e.preventDefault();
    const product_name = document.getElementById('product_name').value;
    const in_price = document.getElementById('in_price').value;
    const price = document.getElementById('price').value;
    const stock = document.getElementById('stock').value;
    const description = document.getElementById('description').value;

    const data = [
      {
        "product":product_name,
        "in_price": in_price,
        "price": price,
        "stock": stock,
        "description": description
      }
    ];
    appendData(data);
    handleClose(data);
  }


  return (
    <>
      <div className='p-4 pe-0 offset-xl-2 offset-lg-0 row d-flex fixed-top bg-white' id="product_list_filter" >
        <div className='row ps-0 pt-3'>
          <div className='d-flex row'>
            <div className='col-md-6 mb-2'>
              <input className="w-100 p-1 ps-2 p-sm-2 ps-sm-4 border border-1 rounded-4" type="text" placeholder="Search Product..."/>
              <IconSearch className="p-1 p-sm-0 mb-1" style={{marginLeft:"-35px", zIndex:"10", color:"rgb(68, 220, 255)"}}/>
            </div>
            <div className='col-md mb-2'>
              <div className='d-flex justify-content-md-end justify-content-between gap-1 gap-sm-4'>
                <Button variant="white" className="d-flex px-4 box-shadow rounded-3" onClick={handleShow}>
                  <span className='d-none d-xl-block'>New Product</span>
                  <span className="ms-0 ms-xl-2 rounded-circle" style={{background:"rgb(41, 246, 118)"}}>
                    <IconPlus className='text-white mb-1'/>
                  </span>
                </Button>
                <Button variant="white" className="d-flex px-4 box-shadow rounded-3">
                  <span className='d-none d-xl-block'>Print List</span>
                  <span className="ms-0 ms-xl-2" style={{color:"rgb(102, 214, 242)"}}>
                    <IconPrinter className='mb-1'/>
                  </span>
                </Button>
              </div>

              <Modal show={show} onHide={handleClose} dialogClassName="modal-custom">
                <Modal.Header closeButton className='border-0'>
                </Modal.Header>
                <div className='p-5 pt-3'>
                  <h2 className='text-danger text-center mb-4'>New Product</h2>
                  <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3">
                      <Form.Label >Product / Service</Form.Label>
                      <Form.Control required className="rounded-5" id="product_name" type="text" placeholder="Enter the product name" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>In Price</Form.Label>
                      <Form.Control className="rounded-5" type="text" id="in_price" placeholder="Enter in price" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Price</Form.Label>
                      <Form.Control className="rounded-5" type="text" id="price" placeholder="Enter price" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>In Stock</Form.Label>
                      <Form.Control className="rounded-5" type="text" id="stock" placeholder="Enter stock" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Description</Form.Label>
                      <Form.Control className="rounded-5" type="text" id="description" placeholder="Enter description" />
                    </Form.Group>

                    <div className='d-flex flex-column align-items-center'>
                      <Button variant="primary"  className='px-4 rounded-5' type='submit'>
                        Submit
                      </Button>
                      <Button variant="transparent" className=" mt-2 text-primary fw-semibold" onClick={handleClose}>
                        Close
                      </Button>
                    </div>
                  </Form>
                </div>
              </Modal>
            </div>
          </div>
        </div>
        <div className='mt-4 row'>
          <div className="d-flex gap-3">
            <div className='col-xl-3 col-8'>Product / Service</div>
            <div className='col-xl-2 d-none d-xl-block'>In Price</div>
            <div className='col-xl-2 col-4'>Price</div>
            <div className='col-xl-2 d-none d-xl-block'>In Stock</div>
            <div className='col-xl-3 d-none d-xl-block'>Description</div>
          </div>
        </div>
      </div>
      <div className='d-flex flex-column' id="product_container">
        <div id="product_body" className='d-flex row gap-2'></div>
      </div>
    </>
  )
}

export default Products