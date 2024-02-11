import React from 'react'
import Container from 'react-bootstrap/Container';
import { IconPlus } from '@tabler/icons-react';
import CreateProduct from './product/CreateProduct';
import ProductList from './product/ProductList';

function Products() {
  return (
    <>
      <CreateProduct />
      <ProductList />
    </>
  )
}

export default Products